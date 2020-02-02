import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.active} className={s.link}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.active} className={s.link}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' activeClassName={s.active} className={s.link}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.active} className={s.link}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.active} className={s.link}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.active} className={s.link}>Settings</NavLink>
        </div>
        <div className={s.auth}>
            {props.isAuth
                ? <div className={s.nick}>{props.login} <button className={s.logout} onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'} activeClassName={s.active} className={s.link}>
                    Login</NavLink>}
        </div>
    </header >
}

export default Header;