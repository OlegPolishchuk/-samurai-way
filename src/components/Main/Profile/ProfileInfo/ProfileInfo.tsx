import React from 'react';
import style from "./ProfileInfo.module.css";
import {ProfileType} from "../../../../redux/profile-reducer/types";
import Preloader from "../../../Preloader/Preloader";

type ProfileInfoType = {
    profile: ProfileType
}

const ProfileInfo: React.FC<ProfileInfoType> = ({profile}) => {
    return (
        <>
            {Object.keys(profile).length === 0 && <Preloader/>}
            <section className={style.profile}>
                {/*Profile description*/}
                <div className={style.profile_name}>
                    <h2>{profile.fullName}</h2>
                    <p className={style.profile_status}>{profile.aboutMe}</p>
                </div>
                <div className={style.profile_data}>
                    <p>City <span>Minsk</span></p>
                    <p>Age <span>30</span></p>
                    <p>Marital status <span>single</span></p>
                </div>
                <button className={style.edit_btn + ' common_btn'}>Edit profile</button>
            </section>
        </>
    );
};

export default ProfileInfo;