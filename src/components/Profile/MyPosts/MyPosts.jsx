import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreater, updateNewPostCreater } from '../../../redux/profileReducer'

const MyPosts = (props) => {
    debugger
    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

    let addPost = () => {
        props.dispatch(addPostActionCreater());
    }

    let onPostChange = (e) => {
        debugger
        let text = e.target.value
        props.dispatch(updateNewPostCreater(text));
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} placeholder='Сделайте новый пост!'></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;