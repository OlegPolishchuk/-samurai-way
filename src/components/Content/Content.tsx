import React from 'react';
import style from './Content.module.css';
import Profile from "./Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";


const Content = () => {
    return (
        <div className={`${style.main_style} ${style.main}`}>
            {/*<Profile/>*/}
            <Dialogs/>
        </div>
    );
};

export default Content;