import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (<div>
        <div>
            <img src='https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg' alt=''></img>
        </div>
        <div className={s.descriptionBlock}>
            ava + decription
        </div>
    </div>)
}

export default ProfileInfo;