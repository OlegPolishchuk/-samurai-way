import React from 'react';
import style from './Profile.module.css';
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import Posts from "../Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../../App";

type PostPropsType = {
    posts: Array<PostType>
}

const Profile = (props: PostPropsType) => {
    return (
        <>
            <div className={style.profile_wrapper}>
                <ProfilePhoto/>
                <ProfileInfo/>
            </div>
            <Posts posts={props.posts}/>
        </>
    );
};

export default Profile;