import React from 'react'
import preloader from '../../../assets/img/preloader.svg'

const Preloader = (props) => {
    return <div className={props.classForPreloader}>
        <img src={preloader} alt='preloader' />
    </div>
}

export default Preloader;