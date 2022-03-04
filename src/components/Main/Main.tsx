import React from 'react';
import style from './Main.module.css';
import Navbar from "../Navbar/Navbar";
import Aside from "../Aside/Aside";
import Profile from "../Profile/Profile";

const Main = () => {
    return (
        <main className={style.main_wrapper +' '+ style.wrapper}>
            <Navbar/>
            <Aside/>
            <Profile/>
        </main>
    );
};

export default Main;