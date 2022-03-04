import React from 'react';
import style from './Header.module.css';


const Header = () => {
    return (
        <header className={style.main_header}>
            <div className={style.wrapper}>
                <img alt={style.logo} src={'https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj'}/>
            </div>
        </header>
    );
};

export default Header;