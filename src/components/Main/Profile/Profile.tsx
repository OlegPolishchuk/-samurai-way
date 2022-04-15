import React from 'react';
import style from './Profile.module.css';
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import Posts from "../Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import {ActionsTypes, ProfilePageType, StoreType} from "../../../redux/state";
import PostsContainer from "../Posts/Post/PostsContainer";
import {RootStateType} from "../../../redux/redux-store";
import {ActionsTypes} from "../../../redux/state";

// type ProfilePagePropsType = ProfilePageType & {
//     // addPost: () => void
//     // updateNewPostText: (newText: string) => void
//     store: RootStateType
    // dispatch: (action: ActionsTypes) => void
// }
type ProfilePagePropsType = {
    store: RootStateType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props:ProfilePagePropsType) => {

    // const {posts, newPostText, updateNewPostText} = props // del
    // const {posts, newPostText, dispatch} = props
    const {store} = props

    return (
        <>
            <div className={style.profile_wrapper}>
                <ProfilePhoto/>
                <ProfileInfo/>
            </div>
            <PostsContainer
              store={store}
              dispatch={props.dispatch}
            />
        </>
    );
};

export default Profile;