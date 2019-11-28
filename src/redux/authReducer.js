
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

export const setAuthUserData = (id, email, login) => ({ type: 'SET-AUTH-USER-DATA', data: { id, email, login } })

export default authReducer;



