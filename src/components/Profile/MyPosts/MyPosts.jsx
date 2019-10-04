import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postData = [
        { id: 1, message: 'The my first post', likesCount: 22 },
        { id: 2, message: 'Hello all', likesCount: 1 },
        { id: 3, message: 'Add me to friend', likesCount: 2 }
    ]
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>

            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount} id={postData[0].id} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} id={postData[1].id} />
                <Post message={postData[2].message} likesCount={postData[2].likesCount} id={postData[2].id} />

            </div>
        </div>
    )
}

export default MyPosts;