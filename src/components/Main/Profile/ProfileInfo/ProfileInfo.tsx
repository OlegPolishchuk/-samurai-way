import React from 'react';
import style from "./ProfileInfo.module.css";
import {ProfileType} from "../../../../redux/profile-reducer/types";
import Preloader from "../../../Preloader/Preloader";

type ProfileInfoType = {
    profile: ProfileType
}

const ProfileInfo: React.FC<ProfileInfoType> = ({profile}) => {
    const profileContacts = profile.contacts ? Object.keys(profile.contacts) : null

    const profileContactsList = profileContacts ? profileContacts.map((el, i) => {
        if (profile.contacts[el]) {
            return (
                <p key={`${el}${i}`}>{el}
                    <span>
                        <a href={`${profile.contacts[el]}`}>{profile.contacts[el]}</a>
                    </span>
                </p>
            )
        }
    }) : null

    return (
        <>
            <section className={style.profile}>
                {/*Profile description*/}
                <div className={style.profile_name}>
                    <h2>{profile.fullName}</h2>
                    <p className={style.profile_status}>{profile.aboutMe}</p>
                </div>
                <div className={style.profile_data}>
                    {profileContactsList}
                </div>
                <button className={style.edit_btn + ' common_btn'}>Edit profile</button>
            </section>
        </>
    );
};

export default ProfileInfo;