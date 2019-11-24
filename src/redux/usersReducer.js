
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 10,
    currentPage: 2
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

        case 'SET_USERS':
            return {

                ...state, users: action.users
            }

        case 'SET_CURRENT_PAGE':
            return {
                ...state, currentPage: action.pageNumber
            }

        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state, totalUserCount: action.totalCount
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
        type: 'SET_USERS', users
    }
}

export const setCurrentPageAC = (pageNumber) => {
    return {
        type: 'SET_CURRENT_PAGE', pageNumber
    }
}

export const setTotalUsersCountAC = (totalCount) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT', totalCount
    }
}


