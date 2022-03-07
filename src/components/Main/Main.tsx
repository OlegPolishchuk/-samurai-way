import React from 'react';
import style from './Main.module.css';
import Profile from "./Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const Main = () => {
    return (
        <main className={style.main_wrapper +' main_style'}>
            {/*<Route path={'/profile'} render={()=> <Profile/>} />
            <Route path={'/dialogs'} render={()=> <Dialogs/>} />*/}
            <Route path={'/profile'} component={()=> <Profile/>} />
            <Route path={'/dialogs'} component={()=> <Dialogs/>} />
        </main>
    );
};

export default Main;