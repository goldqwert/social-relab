import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import noavatar from '../../../assets/img/noavatar.png'
import ProfileData from './ProfileData';
import ProfileForm from './ProfileForm';
import { NavLink } from 'react-router-dom';

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
        props.saveProfile(profile).then(
            () => {
                setEditMode(false)
            })
    }

    return (<div>
        <div className={s.wrapper}>
            <div>
                <div className={s.name}><h3>{props.profile.fullName}</h3></div>
                <NavLink to='/profile'><img className={s.photo} src={props.profile.photos.large || noavatar} alt='avatar' /></NavLink>
            </div>
            <div>{!props.match.params.userId ? <input id='file' type='file' onChange={changeMainPhoto} /> : undefined}
                <label htmlFor='file' className={s.upload}>{props.history.location.pathname === '/profile' ? 'change photo' : ''}</label></div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} isOwner={props.match.params.userId} />
            {editMode ? <ProfileForm profile={props.profile} onSubmit={onSubmit} /> : <ProfileData profile={props.profile}
                isOwner={props.match.params.userId} activateEditMode={() => { setEditMode(true) }} />}
        </div>
    </div>)
}

export default ProfileInfo;