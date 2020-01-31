import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileContacts = (props) => {
    return (<div>
        <p>{props.contactTitle}: {props.contactValue || 'no'}</p>
    </div>)
}

export default ProfileContacts;