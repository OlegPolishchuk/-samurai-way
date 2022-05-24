import React, {useState} from 'react';
import {useAppSelector} from "../../../../hooks/hooks";
import s from './ProfileStatus.module.css'

const ProfileStatus = () => {
    const [editMode, setEditMode] = useState(false)

    const status = useAppSelector(state => state.profilePage.profile.aboutMe)

    const onDblClickHandler = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        setEditMode(true)
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
                    value={status}
                    onBlur={onBlurHandler}
                    onChange={() => {}}
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