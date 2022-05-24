import React, {useState} from 'react';
import style from "../ProfileInfo/ProfileInfo.module.css";
import {useAppSelector} from "../../../../hooks/hooks";

const ProfileStatus = () => {
    const [editMode, setEditMode] = useState(false)

    const status = useAppSelector(state => state.profilePage.profile.aboutMe)

    return (
        <>
            {editMode
                ? <input type={'text'} value={status}/>
                : <p className={style.profile_status}>{status}</p>
            }

        </>
    );
};

export default ProfileStatus;