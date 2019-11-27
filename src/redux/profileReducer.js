

let initialState = {
    posts: [
        { id: 1, message: 'The my first post', likesCount: 22 },
        { id: 2, message: 'Hello all', likesCount: 1 },
        { id: 3, message: 'Add me to friend', likesCount: 2 }
    ],
    newPostText: '',
    profile: null
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
        default: return state;

    }
}

export default profileReducer;

export const addPostActionCreater = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostCreater = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: text
    }
}
debugger
export const setUserProfile = (profile) => {
    debugger
    return {
        type: 'SET-USER-PROFILE', profile
    }
}

