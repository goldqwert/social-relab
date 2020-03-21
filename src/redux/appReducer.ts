import { getAuth } from './authReducer';
const INITIALIZE_SUCCESS = 'Social_Relab/AppReducer/INITIALIZE_SUCCESS';

export type InitialStateType = {
    initialize: boolean
}

let initialState: InitialStateType = {
    initialize: false
}

const appReducer = (state = initialState, action: any): InitialStateType  => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialize: true
            }
        default: return state;
    }
}

type InitializeSuccessType = {
    type: typeof INITIALIZE_SUCCESS
}

export const initializeSuccess = (): InitializeSuccessType => ({ type: INITIALIZE_SUCCESS })

export const initializeApp = () => {
    return async (dispatch: any) => {
        let promise = await dispatch(getAuth())
        Promise.all([promise])
        dispatch(initializeSuccess())

    }
}
export default appReducer;

