import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
const SET_AUTH_USER_DATA = 'Social_Relab/AuthReducer/SET_AUTH_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default: return state;
    }
}

export default authReducer;

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, data: { userId, email, login, isAuth } })

export const getAuth = () => {
    return async (dispatch) => {
        const response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuth());
        } else {
            let message = response.data.messages.length > 0
                ? response.data.messages[0]
                : 'Some error'
            dispatch(stopSubmit('login', { _error: message }))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        const response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}




