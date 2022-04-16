import React from 'react';
import style from './Profile.module.css';
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "../Posts/Post/PostsContainer";

type ProfilePagePropsType = {}

const Profile = (props: ProfilePagePropsType) => {

    return (
        <>
            <div className={style.profile_wrapper}>
                <ProfilePhoto/>
                <ProfileInfo/>
            </div>
            <PostsContainer/>
        </>
    );
};

export default Profile;