import React from 'react';
import style from './Main.module.css';
import Profile from "./Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {DataType, MessageType, PostType} from "../../App";

type PropsType = {
    data: Array<DataType>
    messages: Array<MessageType>
    posts: Array<PostType>
}

const Main = (props: PropsType) => {
    return (
        <main className={style.main_wrapper +' main_style'}>
            <Route path={'/profile'} render={()=> <Profile posts={props.posts}/>} />
            <Route path={'/dialogs'} render={()=> <Dialogs data={props.data} messages={props.messages}/>} />
        </main>
    );
};

export default Main;