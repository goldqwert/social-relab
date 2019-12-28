import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileContacts = (props) => {
    return (<div>
        <b>{props.contactTitle}:</b> {props.contactValue}
    </div>)
}

export default ProfileContacts;