

let initialState = {
    posts: [
        { id: 1, message: 'The my first post', likesCount: 22 },
        { id: 2, message: 'Hello all', likesCount: 1 },
        { id: 3, message: 'Add me to friend', likesCount: 2 }
    ],
    newPostText: ''
}


const profileReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {

        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case 'UPDATE-NEW-POST-TEXT':
            debugger
            state.newPostText = action.newText;
            return state;
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
    debugger
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: text
    }
}

