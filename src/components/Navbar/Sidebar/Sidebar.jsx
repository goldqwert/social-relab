import React from 'react';
import s from './Sidebar.module.css';
import { NavLink } from 'react-router-dom'

const Sidebar = (props) => {
    return <div className={s.friendItem}>
        <div className={s.avatar}>
            <img src="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" alt=''></img>
        </div>
        <div className={s.link}>
            <NavLink to=''>{props.friend}</NavLink>
        </div>
    </div >
}

export default Sidebar;