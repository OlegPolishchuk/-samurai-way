import React from 'react';
import s from './Preloader.module.css'

const Preloader: React.FC = () => {
    const preloader = require( '../../assets/img/preloader.gif')

    return (
        <div className={s.wrapper}>
            <img className={s.isFetching} src={preloader} alt={'preloader'}/>
        </div>
    );
};

export default Preloader;