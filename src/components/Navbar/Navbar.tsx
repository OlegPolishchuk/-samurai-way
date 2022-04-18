import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.main_nav}>
            {/* navigation (left sidebar)*/}
            <ul className={style.main_nav_inner}>
                <li><NavLink to={'/profile'} activeClassName={style.active}>Profile</NavLink></li>
                <li><NavLink to={'/dialogs'} activeClassName={style.active}>Dialogs</NavLink></li>
                <li><NavLink to={'/users'} activeClassName={style.active}>Users</NavLink></li>
                {/*<li><a href={'#'}>Messages</a></li>*/}
                {/*<li><a href={'#'}>Settings</a></li>*/}
            </ul>
        </nav>
    );
};

export default Navbar;