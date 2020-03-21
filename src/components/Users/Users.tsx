import React from 'react'
import s from './Users.module.css';
import User from './User';
import Paginator from '../common/Paginator/Paginator';
import {UserType} from '../../types'

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followInProgress: Array<number>
    unfollow: (id: number) => void
    follow: (id: number) => void
}

const Users: React.FC<PropsType> = ({ users, totalUsersCount, pageSize, onPageChanged, currentPage, ...props }) => {
    return (<div className={s.wrapper}>
        <Paginator totalUsersCount={totalUsersCount}
            pageSize={pageSize} onPageChanged={onPageChanged} currentPage={currentPage} />
        <div className={s.users}>
            {users.map(u => <User u={u}
                followInProgress={props.followInProgress}
                follow={props.follow}
                unfollow={props.unfollow}
                key={u.id} />)}
        </div>
    </div >)
}

export default Users;