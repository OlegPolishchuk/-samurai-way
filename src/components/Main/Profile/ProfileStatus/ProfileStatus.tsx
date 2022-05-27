import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../../hooks/hooks";
import s from './ProfileStatus.module.css'

const ProfileStatus = () => {
    const [editMode, setEditMode] = useState(false)

    // const status = useAppSelector(state => state.profilePage.profile.aboutMe)
    const status = useAppSelector(state => state.profilePage.userStatus)
    console.log(`status => ${status}`)

    const [localStatus, setLocalStatus] = useState(status)

    useEffect(() => {
        setLocalStatus(status)
    }, [status])

    console.log(`localstatus => ${localStatus}`)

    const onDblClickHandler = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        setEditMode(true)
        console.log(localStatus)
    }

    const onBlurHandler = (e: React.FocusEvent<HTMLParagraphElement>) => {
        setEditMode(false)
    }

    return (
        <>
            {editMode
                ? <input
                    className={s.editable_status}
                    type={'text'}
                    value={localStatus}
                    onBlur={onBlurHandler}
                    onChange={(e) => {setLocalStatus(e.currentTarget.value)}}
                    autoFocus
                />
                : <p
                    className={s.profile_status}
                    onDoubleClick={onDblClickHandler}
                >{status}</p>
            }

        </>
    );
};

export default ProfileStatus;