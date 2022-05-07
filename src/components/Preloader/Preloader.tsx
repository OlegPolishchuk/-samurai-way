import React from 'react';

const Preloader: React.FC = () => {
    const preloader = require( '../../assets/img/preloader.gif')

    return (
        <div>
            <img className={'isFetching'} src={preloader} alt={'preloader'}/>
        </div>
    );
};

export default Preloader;