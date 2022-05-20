import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

type PropsType = {
    isAuth: boolean,
    login: string | null
}

const Header: React.FC<PropsType> = ({isAuth, login}) => {
    console.log(isAuth)
    return (
        <header className={style.main_header}>
            <div className={style.wrapper}>
                <img alt={style.logo} src={'https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj'}/>
                <div className={style.loginBlock}>
                    {
                        isAuth
                            ? <span className={style.loginName}>{login}</span>
                            : <NavLink className={style.login} to={'/login'}>Login</NavLink>
                    }

                </div>
            </div>
        </header>
    );
};

export default Header;