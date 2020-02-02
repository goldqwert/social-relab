import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (<div className={s.wrapper}>
        <div className={s.info}>
            <ProfileInfo {...props} />
        </div>
        <div className={s.posts}>
            <MyPostsContainer {...props} />
        </div>
    </div>)
}

export default Profile;