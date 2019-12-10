import { authAPI } from '../api/api';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default: return state;
    }
}

export default authReducer;

export const setAuthUserData = (userId, email, login) => ({ type: 'SET-AUTH-USER-DATA', data: { userId, email, login } })

export const getAuth = () => {
    return (dispatch) => {
        authAPI.getAuth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    dispatch(setAuthUserData(id, email, login));
                }
            })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { userId } = response.data.data
                    dispatch(setAuthUserData(userId));
                }
            })
    }
}




