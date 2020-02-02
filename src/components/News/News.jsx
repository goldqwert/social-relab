import React from 'react';
import s from './News.module.css';
import Preloader from '../common/Preloader/Preloader';

const News = (props) => {
    return (
        <div className={s.wrapper}>
            News is being developed
           <Preloader />
        </div>
    )
}

export default News;