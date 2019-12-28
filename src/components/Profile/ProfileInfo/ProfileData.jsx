import React from 'react';
import ProfileContacts from './ProfileContacts';
import s from '../../common/Validation/FormControls/FormControls.module.css'

const ProfileData = (props) => {
    return (<div>
        {!props.isOwner && <button onClick={props.activateEditMode}>edit</button>}
        <div>fullName: {props.profile.fullName}</div>
        <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
        <div>
            <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
        </div>
        <div>
            <b>About me</b>: {props.profile.aboutMe}
        </div>
        <b>Contacts:</b>{Object.keys(props.profile.contacts).map(el => {
            return <ProfileContacts key={el} contactTitle={el} contactValue={props.profile.contacts[el]} />
        })}
    </div>)
}

export default ProfileData;