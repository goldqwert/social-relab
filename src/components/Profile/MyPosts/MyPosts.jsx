import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postData = [
        { id: 1, message: 'The my first post', likesCount: 22 },
        { id: 2, message: 'Hello all', likesCount: 1 },
        { id: 3, message: 'Add me to friend', likesCount: 2 }
    ]

    let postsElements = postData.map((p) => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;