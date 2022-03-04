import React from 'react';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <main className={style.main_style +' '+ style.main}>
            {/*Profile description*/}
            <div className={style.Profile_name}>
                <h2>Profile Name</h2>
                <p className={style.profile_status}>set status</p>
            </div>
            <div className={style.profile_data}>
                <p>City <span>Minsk</span></p>
                <p>Age <span>30</span></p>
                <p>Marital status <span>single</span></p>
            </div>
        </main>
    );
};

export default Profile;