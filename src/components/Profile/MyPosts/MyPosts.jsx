import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostForm from './AddPostForm/AddPostForm';
import Preloader from '../../common/Preloader/Preloader';

const MyPosts = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} id={p.id} key={p.id} smallPhoto={props.profile.photos.small} />)
    let onAddPost = (value) => {
        props.addPost(value.valueOfPostArea)
    }

    return (
        <div className={s.posts_wrapper}>
            <h3>My posts</h3>
            <div>
                <AddPostForm onSubmit={onAddPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;