import { arrowFunctionExpression } from "@babel/types";


let initialState = {
    users: []
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case 'SET-USERS':
            return {

                ...state, users: [...state.users, ...action.users]
            }

        default: return state
    }

}


export default usersReducer;


export const followAC = (userId) => {
    return {
        type: 'FOLLOW', userId
    }
}


export const unfollowAC = (userId) => {
    return {
        type: 'UNFOLLOW', userId
    }
}


export const setUsersAC = (users) => {
    return {
        type: 'SET-USERS', users
    }
}


