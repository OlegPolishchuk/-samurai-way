import React from 'react';
import style from './Main.module.css';
import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";

const Main = () => {
    return (
        <main className={style.main_wrapper +' '+ style.wrapper}>
            <Navbar/>
            <Content/>
        </main>
    );
};

export default Main;