import React from 'react';
import style from './Main.module.css';
import Profile from "./Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {DialogsPageType, ProfilePageType} from "../../redux/state";


type PropsType = {
    dialogsPage : DialogsPageType
    profilePage: ProfilePageType
    addPost: (test: string) => void
}

const Main = (props: PropsType) => {

    const {profilePage, dialogsPage, addPost} = props;
    return (
        <main className={style.main_wrapper +' main_style'}>
            <Route path={'/profile'} render={()=> <Profile posts={profilePage.posts} addPost={addPost}/>} />
            <Route path={'/dialogs'} render={()=> <Dialogs dialogsPage={dialogsPage}/>} />
        </main>
    );
};

export default Main;