import { usersAPI, profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
import { PostType, ProfileType, PhotosType} from '../types';
const ADD_POST = 'Social_Relab/ProfileReducer/ADD_POST';
const SET_USER_PROFILE = 'Social_Relab/ProfileReducer/SET_USER_PROFILE';
const SET_STATUS = 'Social_Relab/ProfileReducer/SET_STATUS';
const SAVE_PHOTO = 'Social_Relab/ProfileReducer/SAVE_PHOTO';

let initialState = {
    posts: [
        { id: 1, message: 'The my first post', likesCount: 22 },
        { id: 2, message: 'Hello all', likesCount: 1 },
        { id: 3, message: 'Add me to friend', likesCount: 2 }
    ] as PostType[],
    profile: null as ProfileType | null,
    status: '',
    valueOfPostArea: ''
}

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.valueOfPostArea,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photo } as ProfileType
            }
        default: return state;
    }
}

export default profileReducer;

type AddPostType = {
    type: typeof ADD_POST,
    valueOfPostArea: string
}

export const addPost = (valueOfPostArea: string): AddPostType => ({ type: ADD_POST, valueOfPostArea })

type SetUserProfile = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfile => ({ type: SET_USER_PROFILE, profile })

type SetStatus = {
    type: typeof SET_STATUS,
    status: string
}

export const setStatus = (status: string): SetStatus => ({ type: SET_STATUS, status })

type savePhotoSuccess = {
    type: typeof SAVE_PHOTO,
    photo: PhotosType
}

export const savePhotoSuccess = (photo: PhotosType): savePhotoSuccess => ({ type: SAVE_PHOTO, photo })

export const getUserProfile = (userId: string) => {
    return async (dispatch: any) => {
        const response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
    }
}

export const getStatus = (userId: string) => {
    return async (dispatch: any) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }
}

export const updateStatus = (status: string) => {
    return async (dispatch: any) => {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export const savePhoto = (photo: PhotosType) => {
    return async (dispatch: any) => {
        const response = await profileAPI.savePhoto(photo);
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
}

export const saveProfile = (profile: ProfileType) => {
    return async (dispatch: any, getState: any) => {
        const response = await profileAPI.saveProfile(profile);
        if (response.data.resultCode === 0) {
            const userId = getState().auth.userId
            dispatch(getUserProfile(userId));
        } else {
            dispatch(stopSubmit('profile-form', { _error: response.data.messages[0] }));
            return Promise.reject(response.data.messages[0]);
        }
    }
}
