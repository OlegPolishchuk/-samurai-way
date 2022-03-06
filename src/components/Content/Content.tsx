import React from 'react';
import style from './Content.module.css';
import Profile from "./Profile/Profile";
import Posts from "./Posts/Posts";


const Content = () => {
    return (
        <div className={`${style.main_style} ${style.main}`}>
            <Profile/>
            <Posts/>
        </div>
    );
};

export default Content;