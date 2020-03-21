import { UserType } from './../types';
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
    users: [] as UserType[],
    pageSize: 10,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: false,
    followInProgress: [] as number[]
}

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any) => {
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

type FollowSuccessType = {
    type: typeof FOLLOW,
    userId: string
} 

export const followSuccess = (userId: string): FollowSuccessType => ({ type: FOLLOW, userId })

type UnfollowSuccessType = {
    type: typeof UNFOLLOW,
    userId: string
}

export const unfollowSuccess = (userId: string): UnfollowSuccessType => ({ type: UNFOLLOW, userId })

type SetUsersType = {
    type: typeof SET_USERS,
    users: UserType
}

export const setUsers = (users: UserType): SetUsersType => ({ type: SET_USERS, users })

type setCurrentPage = {
    type: typeof SET_CURRENT_PAGE,
    pageNumber: string
}

export const setCurrentPage = (pageNumber: string): setCurrentPage => ({ type: SET_CURRENT_PAGE, pageNumber })

type SetTotalUsersCount = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalCount: number
}

export const setTotalUsersCount = (totalCount: number): SetTotalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalCount })

type preloaderIsFetching = {
    type: typeof PRELOADER_IS_FETCHING,
    status: boolean
}

export const preloaderIsFetching = (status: boolean) => ({ type: PRELOADER_IS_FETCHING, status })

type changeFollowInProgress = {
    type: typeof CHANGE_FOLLOW_IN_PROGRESS,
    status: boolean,
    userId: number
}

export const changeFollowInProgress = (status: boolean, userId: number) => ({ type: CHANGE_FOLLOW_IN_PROGRESS, status, userId })



export const getUsers = (currentPage: string, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(preloaderIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(preloaderIsFetching(false));
    }
}

const followUnfollow = async (dispatch: any, userId: number, apiMethod: any, actionCreater: any) => {
    dispatch(changeFollowInProgress(true, userId));
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreater(userId))
    }
    dispatch(changeFollowInProgress(false, userId));
}
export const follow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollow(dispatch, userId, usersAPI.follow, unfollowSuccess)
    }
}
export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollow(dispatch, userId, usersAPI.unfollow, followSuccess)
    }
}