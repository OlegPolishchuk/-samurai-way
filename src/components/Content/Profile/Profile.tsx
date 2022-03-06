import React from 'react';
import style from './Profile.module.css';
import Aside from "../../Aside/Aside";
import Posts from "../Posts/Posts";

const Profile = () => {
    return (
        <>
            <div className={style.profile_wrapper}>
                <Aside/>
                <section className={style.profile}>
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
                    <button className={style.edit_btn}>Edit profile</button>
                </section>
            </div>
            <Posts/>
        </>
    );
};

export default Profile;