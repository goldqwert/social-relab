import { usersAPI } from '../api/api';
import { changeFollowUnfollow } from '../components/common/Utils/Utils';
const FOLLOW = 'Social_Relab/UsersReducer/FOLLOW';
const UNFOLLOW = 'Social_Relab/UsersReducer/UNFOLLOW';
const SET_USERS = 'Social_Relab/UsersReducer/SET_USERS';
const SET_CURRENT_PAGE = 'Social_Relab/UsersReducer/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'Social_Relab/UsersReducer/SET_TOTAL_USERS_COUNT';
const PRELOADER_IS_FETCHING = 'Social_Relab/UsersReducer/PRELOADER_IS_FETCHING';
const CHANGE_FOLLOW_IN_PROGRESS = 'Social_Relab/UsersReducer/CHANGE_FOLLOW_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: false,
    followInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: changeFollowUnfollow(state.users, action.userId, true)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: changeFollowUnfollow(state.users, action.userId, false)
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.pageNumber
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case PRELOADER_IS_FETCHING:
            return {
                ...state, isFetching: action.status
            }
        case CHANGE_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followInProgress: action.status
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)
            }
        default: return state
    }
}
export default usersReducer;

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const preloaderIsFetching = (status) => ({ type: PRELOADER_IS_FETCHING, status })
export const changeFollowInProgress = (status, userId) => ({ type: CHANGE_FOLLOW_IN_PROGRESS, status, userId })

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(preloaderIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(preloaderIsFetching(false));
    }
}

const followUnfollow = async (dispatch, userId, apiMethod, actionCreater) => {
    dispatch(changeFollowInProgress(true, userId));
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreater(userId))
    }
    dispatch(changeFollowInProgress(false, userId));
}
export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollow(dispatch, userId, usersAPI.follow, unfollowSuccess)
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollow(dispatch, userId, usersAPI.unfollow, followSuccess)
    }
}