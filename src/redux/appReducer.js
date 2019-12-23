import { getAuth } from './authReducer';
const INITIALIZE_SUCCESS = 'Social_Relab/AppReducer/INITIALIZE_SUCCESS';

let initialState = {
    initialize: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialize: true
            }
        default: return state;
    }
}

export const initializeSuccess = () => ({ type: INITIALIZE_SUCCESS })

export const initializeApp = () => {
    return async (dispatch) => {
        let promise = await dispatch(getAuth())
        Promise.all([promise])
        dispatch(initializeSuccess())

    }
}
export default appReducer;

