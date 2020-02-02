import React from 'react'
import s from './Users.module.css';
import User from './User';
import Paginator from '../common/Paginator/Paginator';

const Users = ({ users, totalUsersCount, pageSize, onPageChanged, currentPage, ...props }) => {
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