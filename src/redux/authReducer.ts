import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
const SET_AUTH_USER_DATA = 'Social_Relab/AuthReducer/SET_AUTH_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'Social_Relab/AuthReducer/GET_CAPTCHA_URL_SUCCESS';



let initialState = {
    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.data
            }

        default: return state;
    }
}

export default authReducer;

type SetAuthUserDataTypeData = {
    userId: number | null, email: string | null, login: string | null, isAuth: boolean
}

type SetAuthUserDataType = {
    type: typeof SET_AUTH_USER_DATA,
    data: SetAuthUserDataTypeData
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => ({ type: SET_AUTH_USER_DATA, data: { userId, email, login, isAuth } })

type GetCaptchaUrlSuccess = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    data: {captchaUrl: string}
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccess => ({ type: GET_CAPTCHA_URL_SUCCESS, data: { captchaUrl } })

export const getAuth = () => {
    return async (dispatch: any) => {
        const response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: any) => {
        const response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuth());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            let message = response.data.messages.length > 0
                ? response.data.messages[0]
                : 'Some error'
            dispatch(stopSubmit('login', { _error: message }))
        }
    }
}

export const logout = () => {
    return async (dispatch: any) => {
        const response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch: any) => {
        const response = await securityAPI.getCaptchaUrl()
        dispatch(getCaptchaUrlSuccess(response.data.url))
    }
}


