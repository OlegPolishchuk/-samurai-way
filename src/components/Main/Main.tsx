import React from 'react';
import style from './Main.module.css';
import Profile from "./Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";

const Main = () => {
    return (
        <main className={style.main_wrapper +' main_style'}>
            {/*<Content/>*/}
            <Profile/>
            {/*<Dialogs/>*/}
        </main>
    );
};

export default Main;