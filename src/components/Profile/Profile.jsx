import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (<div>
        <div>
            <img src='https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg' alt=''></img>
        </div>
        <div>
            ava + decription
        </div>
        <MyPosts />
    </div>)
}

export default Profile;