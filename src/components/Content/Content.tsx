import React from 'react';
import style from './Content.module.css';
import Profile from "./Profile/Profile";


const Content = () => {
    return (
        <div className={`${style.main_style} ${style.main}`}>
            <Profile/>
        </div>
    );
};

export default Content;