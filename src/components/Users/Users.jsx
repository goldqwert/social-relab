import React from 'react'
import s from './Users.module.css';
import Paginator from '../common/Paginator/Paginator'
import User from './User';

const Users = ({ users, totalUserCount, pageSize, onPageChanged, currentPage, ...props }) => {

    return (<div className={s.wrapper}>
        <Paginator totalUserCount={totalUserCount}
            pageSize={pageSize} onPageChanged={onPageChanged} currentPage={currentPage} />

        {users.map(u => <User u={u}
            followInProgress={props.followInProgress}
            follow={props.follow}
            unfollow={props.unfollow} />)}
    </div >)
}

export default Users;