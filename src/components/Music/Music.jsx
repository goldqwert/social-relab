import React from 'react';
import s from './Music.module.css'
import Preloader from '../common/Preloader/Preloader';

const Music = (props) => {
    return (
        <div className={s.wrapper}>
            Music is in the process of recording :)
            <Preloader />
        </div>
    )
}

export default Music;