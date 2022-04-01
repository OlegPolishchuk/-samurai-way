import React from 'react';
import style from './Profile.module.css';
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import Posts from "../Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../../redux/state";

type ProfilePagePropsType = ProfilePageType & {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props:ProfilePagePropsType) => {

    const {posts, newPostText, updateNewPostText} = props

    return (
        <>
            <div className={style.profile_wrapper}>
                <ProfilePhoto/>
                <ProfileInfo/>
            </div>
            <Posts
                posts={posts}
                addPost={props.addPost}
                newPostText={newPostText}
                updateNewPostText={updateNewPostText}
            />
        </>
    );
};

export default Profile;