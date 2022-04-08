import React from 'react';
import style from './Profile.module.css';
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import Posts from "../Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../../redux/state";

type ProfilePagePropsType = ProfilePageType & {
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props:ProfilePagePropsType) => {

    // const {posts, newPostText, updateNewPostText} = props // del
    const {posts, newPostText, dispatch} = props

    return (
        <>
            <div className={style.profile_wrapper}>
                <ProfilePhoto/>
                <ProfileInfo/>
            </div>
            <Posts
                posts={posts}
                // addPost={props.dispatch}
                newPostText={newPostText}
                // updateNewPostText={dispatch}
                dispatch={dispatch}
            />
        </>
    );
};

export default Profile;