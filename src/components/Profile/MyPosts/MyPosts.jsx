import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.state.map((p) => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} placeholder='Сделайте новый пост!'></textarea>
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