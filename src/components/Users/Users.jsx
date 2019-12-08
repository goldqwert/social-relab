import React from 'react'
import s from './Users.module.css';
import photoNull from '../../assets/img/photoNull.png'
import { NavLink } from 'react-router-dom'

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    debugger
    return (<div className={s.wrapper}>
        <div>
            {
                pages.map(p => {
                    return <span onClick={(e) => { props.onPageChanged(p) }} className={props.currentPage === p && s.selectedPage}>{p} </span>
                })

            }
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : photoNull} className={s.userPhoto} alt='photo' />
                    </NavLink>
                </div>

                {u.followed ? <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {
                    props.follow(u.id)
                }}>Unfollow</button> :
                    <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {
                        props.unfollow(u.id)
                    }}>Follow</button>}

                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
            </div>
            )
        }
    </div >)
}



export default Users;