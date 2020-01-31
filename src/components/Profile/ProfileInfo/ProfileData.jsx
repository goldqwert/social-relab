import React from 'react';
import ProfileContacts from './ProfileContacts';
import s from './ProfileInfo.module.css'

const ProfileData = (props) => {
    return (<div>
        <div className={s.info}>
            <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div className={s.info}>
            <b>Looking for a job description</b> {props.profile.lookingForAJobDescription}
        </div>
        <div className={s.info}>
            <b>About me:</b> {props.profile.aboutMe}
        </div>
        <div className={s.contacts}>
            <b>Contacts:</b>{Object.keys(props.profile.contacts).map(el => {
                return <ProfileContacts key={el} contactTitle={el} contactValue={props.profile.contacts[el]} />
            })}
        </div>
        {!props.isOwner && <button className={s.edit} onClick={props.activateEditMode}>edit profile info</button>}
    </div>)
}

export default ProfileData;