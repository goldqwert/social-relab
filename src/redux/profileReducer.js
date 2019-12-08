import { usersAPI, profileAPI } from '../api/api';


let initialState = {
    posts: [
        { id: 1, message: 'The my first post', likesCount: 22 },
        { id: 2, message: 'Hello all', likesCount: 1 },
        { id: 3, message: 'Add me to friend', likesCount: 2 }
    ],
    newPostText: '',
    profile: null,
    status: ''
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile

            }
        case 'SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        default: return state;

    }
}

export default profileReducer;

export const addPostActionCreater = () => ({ type: 'ADD-POST' })
export const updateNewPostCreater = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
export const setUserProfile = (profile) => ({ type: 'SET-USER-PROFILE', profile })
export const setStatus = (status) => ({ type: 'SET-STATUS', status })

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }
}

