import React from 'react';
import style from './Profile.module.css';
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import Posts from "../Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../../../App";


// type PostsType = {
//     posts: Array<PostType>
// }
// export ProfilePageType from App
type PropsType = {
    profilePage: ProfilePageType
}

const Profile = (props:PropsType) => {
    const posts = props.profilePage.posts
    return (
        <>
            <div className={style.profile_wrapper}>
                <ProfilePhoto/>
                <ProfileInfo/>
            </div>
            <Posts posts={posts}/>
        </>
    );
};

export default Profile;