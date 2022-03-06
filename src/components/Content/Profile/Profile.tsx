import React from 'react';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <section className={style.profile}>
            {/*Profile description*/}
            <div className={style.profile_name}>
                <h2>Profile Name</h2>
                <p className={style.profile_status}>set status</p>
            </div>
            <div className={style.profile_data}>
                <p>City <span>Minsk</span></p>
                <p>Age <span>30</span></p>
                <p>Marital status <span>single</span></p>
            </div>
            <button className={style.edit_btn}>Edit profile</button>
        </section>
    );
};

export default Profile;