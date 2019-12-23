import React from 'react'
import s from './Users.module.css';
import photoNull from '../../assets/img/photoNull.png'
import { NavLink } from 'react-router-dom'
import Paginator from '../common/Paginator/Paginator'

const User = ({ u, followInProgress, follow, unfollow }) => {
return (<div>

        <NavLink to={'/profile/' + u.id}>
            <img src={u.photos.small != null ? u.photos.small : photoNull} className={s.userPhoto} alt='photo' />
        </NavLink>

        {u.followed ? <button disabled={followInProgress.some(id => id === u.id)} onClick={() => {
            follow(u.id)
        }}>Unfollow</button> :
            <button disabled={followInProgress.some(id => id === u.id)} onClick={() => {
                unfollow(u.id)
            }}>Follow</button>}

        <div>{u.name}</div>
        <div>{u.status}</div>
        <div>{'u.location.country'}</div>
        <div>{'u.location.city'}</div>
    </div>)
}

export default User;