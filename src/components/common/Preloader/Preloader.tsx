import React from 'react';
import preloader from '../../../assets/img/preloader.svg';
import s from '../Validation/FormControls/FormControls.module.css'

const Preloader = () => {
    return <div className={s.preloader}>
        <img src={preloader} alt='preloader' />
    </div>
}

export default Preloader;