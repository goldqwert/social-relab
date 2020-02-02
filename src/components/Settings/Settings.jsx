import React from 'react';
import s from './Settings.module.css'
import Preloader from '../common/Preloader/Preloader';

const Settings = (props) => {
    return (
        <div className={s.wrapper}>
            Settings are customizable
            <Preloader />
        </div>
    )
}

export default Settings;