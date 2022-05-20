import React from 'react';
import style from './Main.module.css';
import {Route} from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import Login from "../login/Login";


type PropsType = {}

const Main = (props: PropsType) => {

    return (
        <main className={style.main_wrapper + ' main_style'}>
            <Route
                path={'/profile/:userId?'}
                render={() => <ProfileContainer/>}
            />
            <Route
                path={'/dialogs'}
                render={() => <DialogsContainer/>}
            />
            <Route
                path={'/users'}
                render={() => <UsersContainer/>}
            />
            <Route
                path={'/login'}
                render={() => <Login/>}
            />
</main>
)
    ;
};

export default Main;