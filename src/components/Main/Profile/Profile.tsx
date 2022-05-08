import React from 'react';
import style from './Profile.module.css';
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "../Posts/Post/PostsContainer";
import {ProfileType} from "../../../redux/profile-reducer/types";
import Preloader from "../../Preloader/Preloader";

type ProfilePagePropsType = {
    profile: ProfileType
}

const Profile: React.FC<ProfilePagePropsType> = ({profile}) => {
    console.log(profile)
    return (
        <>
            {!profile && <Preloader/>}
            <div className={style.profile_wrapper}>
                <ProfilePhoto photo={profile.photos}/>
                <ProfileInfo profile={profile}/>
            </div>
            <PostsContainer/>
        </>
    );
};

export default Profile;