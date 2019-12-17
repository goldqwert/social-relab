import { usersAPI } from "../api/api";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: false,
    followInProgress: []
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
                ...state, totalUsersCount: action.totalCount
            }
        case 'PRELOADER_IS_FETCHING':
            return {
                ...state, isFetching: action.status
            }
        case 'CHANGE_FOLLOW_IN_PROGRESS':
            debugger
            return {
                ...state,
                followInProgress: action.status
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id != action.userId)
            }
        default: return state
    }
}

debugger

export default usersReducer;

export const followSuccess = (userId) => ({ type: 'FOLLOW', userId })
export const unfollowSuccess = (userId) => ({ type: 'UNFOLLOW', userId })
export const setUsers = (users) => ({ type: 'SET_USERS', users })
export const setCurrentPage = (pageNumber) => ({ type: 'SET_CURRENT_PAGE', pageNumber })
export const setTotalUsersCount = (totalCount) => ({ type: 'SET_TOTAL_USERS_COUNT', totalCount })
export const preloaderIsFetching = (status) => ({ type: 'PRELOADER_IS_FETCHING', status })
export const changeFollowInProgress = (status, userId) => ({ type: 'CHANGE_FOLLOW_IN_PROGRESS', status, userId })


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(preloaderIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
                dispatch(preloaderIsFetching(false));
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(changeFollowInProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(changeFollowInProgress(false, userId));
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(changeFollowInProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(changeFollowInProgress(false, userId));
            })
    }
}