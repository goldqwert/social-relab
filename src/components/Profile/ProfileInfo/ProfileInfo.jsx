import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import photoNull from '../../../assets/img/photoNull.png'
import ProfileData from './ProfileData';
import ProfileForm from './ProfileForm';

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    const changeMainPhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (profile) => {
        debugger
        props.saveProfile(profile).then(
            () => {
                debugger
                setEditMode(false)
            })
    }

    return (<div>
        <div className={s.descriptionBlock}>
            <img className={s.mainPhoto} src={props.profile.photos.large || photoNull} />
            <div>{!props.match.params.userId ? <input type='file' onChange={changeMainPhoto} /> : undefined}</div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} isOwner={props.match.params.userId} />
            {editMode ? <ProfileForm profile={props.profile} onSubmit={onSubmit} /> : <ProfileData profile={props.profile}
                isOwner={props.match.params.userId} activateEditMode={() => { setEditMode(true) }} />}
        </div>
    </div>)
}

export default ProfileInfo;