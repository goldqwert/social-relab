import { headersAPI } from '../api/api';

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

export const setAuthUserData = (id, email, login) => ({ type: 'SET-AUTH-USER-DATA', data: { id, email, login } })

export const getAuth = () => {
    return (dispatch) => {
        headersAPI.getAuth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    dispatch(setAuthUserData(id, email, login));
                }
            })
    }
}




