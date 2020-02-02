import React from 'react';

const ProfileContacts = (props) => {
    return (<div>
        <p>{props.contactTitle}: {props.contactValue || 'no'}</p>
    </div>)
}

export default ProfileContacts;