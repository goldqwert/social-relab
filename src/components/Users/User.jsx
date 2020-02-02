/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import s from './Users.module.css';
import noavatar from '../../assets/img/noavatar.png'
import { NavLink } from 'react-router-dom'

const User = ({ u, followInProgress, follow, unfollow }) => {
    return (<div>
        <NavLink to={'/profile/' + u.id}>
            <img src={u.photos.small || noavatar} className={s.userPhoto} alt='photo' />
        </NavLink>
        <div>
            <div className={s.nick}>{u.name}</div>
            <div>{u.status}</div>
            {u.followed ? <button className={s.follow} disabled={followInProgress.some(id => id === u.id)} onClick={() => {
                follow(u.id)
            }}>Unfollow</button> :
                <button className={s.follow} disabled={followInProgress.some(id => id === u.id)} onClick={() => {
                    unfollow(u.id)
                }}>Follow</button>}
        </div>
    </div>)
}

export default User;