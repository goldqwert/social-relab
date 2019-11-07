import React from 'react';
import { addPostActionCreater, updateNewPostCreater } from '../../../redux/profileReducer'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {


    let state = props.store.getState();

    let onAddPost = () => {
        props.store.dispatch(addPostActionCreater());
    }

    let onUpdatePostChange = (text) => {
        props.store.dispatch(updateNewPostCreater(text));
    }

    return (
        <div>
            <MyPosts onAddPost={onAddPost} onUpdatePostChange={onUpdatePostChange} posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText} />
        </div>
    )
}

export default MyPostsContainer;