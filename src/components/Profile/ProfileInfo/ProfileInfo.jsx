import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import photoNull from '../../../assets/img/photoNull.png'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    const changeMainPhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (<div>
        {/* <div>
            <img src='https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg' alt=''></img>
        </div> */}
        <div className={s.descriptionBlock}>
            <img className={s.mainPhoto} src={props.profile.photos.large || photoNull} />
            <div>{!props.match.params.userId ? <input type='file' onChange={changeMainPhoto} /> : undefined}</div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            <div>{props.profile.lookingForAJob}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.contacts.github}</div>
            <div>{props.profile.contacts.vk}</div>
            <div>{props.profile.contacts.facebook}</div>
            <div>{props.profile.contacts.instagram}</div>
            <div>{props.profile.contacts.twitter}</div>
            <div>{props.profile.contacts.website}</div>
            <div>{props.profile.contacts.youtube}</div>
            <div>{props.profile.contacts.mainLink}</div>
        </div>
    </div>)
}

export default ProfileInfo;