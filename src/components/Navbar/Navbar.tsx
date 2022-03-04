import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.main_nav}>
            {/* navigation (left sidebar)*/}
            <ul className={style.main_nav_inner}>
                <li><a href={'#'}>Profile</a></li>
                <li><a href={'#'}>Messages</a></li>
                <li><a href={'#'}>Settings</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;