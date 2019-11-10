import React from 'react';
import { addPostActionCreater, updateNewPostCreater } from '../../../redux/profileReducer'
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {

                let state = store.getState();

                let onAddPost = () => {
                    store.dispatch(addPostActionCreater());
                }

                let onUpdatePostChange = (text) => {
                    store.dispatch(updateNewPostCreater(text));
                }

                return (
                    <div>
                        <MyPosts onAddPost={onAddPost} onUpdatePostChange={onUpdatePostChange} posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText} />
                    </div>
                )
            }
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer;