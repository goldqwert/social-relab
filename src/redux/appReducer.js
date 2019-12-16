import { getAuth } from "./authReducer";

let initialState = {
    initialize: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALIZE_SUCCESS':
            return {
                ...state,
                initialize: true
            }
        default: return state;
    }
}

export const initializeSuccess = () => ({ type: 'INITIALIZE_SUCCESS' })

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuth())
        Promise.all([promise]).then(() => {
            dispatch(initializeSuccess())
        })
    }
}

export default appReducer;

