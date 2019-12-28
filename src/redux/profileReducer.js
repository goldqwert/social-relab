import { usersAPI, profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
const ADD_POST = 'Social_Relab/ProfileReducer/ADD_POST';
const SET_USER_PROFILE = 'Social_Relab/ProfileReducer/SET_USER_PROFILE';
const SET_STATUS = 'Social_Relab/ProfileReducer/SET_STATUS';
const SAVE_PHOTO = 'Social_Relab/ProfileReducer/SAVE_PHOTO';

let initialState = {
    posts: [
        { id: 1, message: 'The my first post', likesCount: 22 },
        { id: 2, message: 'Hello all', likesCount: 1 },
        { id: 3, message: 'Add me to friend', likesCount: 2 }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
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
                profile: { ...state.profile, photos: action.photo }
            }
        default: return state;
    }
}

export default profileReducer;

export const addPost = (valueOfPostArea) => ({ type: ADD_POST, valueOfPostArea })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photo) => ({ type: SAVE_PHOTO, photo })

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        const response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export const savePhoto = (photo) => {
    return async (dispatch) => {
        const response = await profileAPI.savePhoto(photo);
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
}

export const saveProfile = (profile) => {
    return async (dispatch, getState) => {
        const response = await profileAPI.saveProfile(profile);
        debugger
        if (response.data.resultCode === 0) {
            const userId = getState().auth.userId
            dispatch(getUserProfile(userId));
        } else {
            dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
            return Promise.reject(response.data.messages[0]);
        }
    }
}
