import React from 'react';
import s from './Post.module.css';
import noavatar from '../../../../assets/img/noavatar.png'
import { NavLink } from 'react-router-dom';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.avatar}>
                <NavLink to='/profile'><img src={props.smallPhoto || noavatar} alt='avatar'></img></NavLink>
            </div>
            <div className={s.avatar}>
                {props.message}
            </div>
            <div className={s.like}>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;