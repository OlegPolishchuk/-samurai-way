import React from 'react';
import style from './Main.module.css';
import Profile from "./Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";


type PropsType = {

}

const Main = (props: PropsType) => {

    return (
        <main className={style.main_wrapper + ' main_style'}>
            <Route
                path={'/profile'}
                render={() => <Profile />}
            />
            <Route
                path={'/dialogs'}
                render={() => <DialogsContainer />}
            />
            <Route
                path={'/users'}
                render={() => <UsersContainer />}
            />
        </main>
    );
};

export default Main;