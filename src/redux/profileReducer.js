
const profileReducer = (action, state) => {
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
            state.newPostText = action.newText;
            return state;
        default: return state;

    }
}

export default profileReducer;

export const addPostActionCreate = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostCreate = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: text
    }
}

