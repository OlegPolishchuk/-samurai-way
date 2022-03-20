import React from 'react';
import style from './Main.module.css';
import Profile from "./Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StateType} from "../../App";


type PropsType = {
    state: StateType
}

const Main = (props: PropsType) => {

    const {profilePage, dialogsPage} = props.state;
    return (
        <main className={style.main_wrapper +' main_style'}>
            <Route path={'/profile'} render={()=> <Profile profilePage={profilePage}/>} />
            <Route path={'/dialogs'} render={()=> <Dialogs dialogsPage={dialogsPage}/>} />
        </main>
    );
};

export default Main;