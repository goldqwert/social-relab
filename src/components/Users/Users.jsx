import React from 'react'
import s from './Users.module.css';
import photoNull from '../../assets/img/photoNull.png'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }


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
                        <img src={u.photos.small != null ? u.photos.small : photoNull} className={s.userPhoto} alt="photo" />
                    </NavLink>
                </div>

                {u.followed ? <button onClick={() => {

                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        withCredentials: true,
                        headers: {
                            'API-KEY': 'e95ce95d-8f55-48e7-8249-188812878de1'
                        }
                    }).then(response => {
                        if (response.data.resultCode === 0) {
                            props.unfollow(u.id)
                        }
                    })
                }}>Unfollow</button> :
                    <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': 'e95ce95d-8f55-48e7-8249-188812878de1'
                            }
                        }).then(response => {
                            if (response.data.resultCode === 0) {
                                props.follow(u.id)
                            }
                        })
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