import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.main_nav}>
            {/* navigation (left sidebar)*/}
            <ul className={style.main_nav_inner}>
                <li><NavLink to={'/profile'}>Profile</NavLink></li>
                <li><NavLink to={'/dialogs'}>Dialogs</NavLink></li>
                <li><a href={'#'}>Messages</a></li>
                <li><a href={'#'}>Settings</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;