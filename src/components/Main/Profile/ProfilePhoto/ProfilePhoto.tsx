import React from 'react';
import style from './ProfilePhoto.module.css';

type ProfilePhotoPropsType = {
    photo: {
        small: string | null,
        large: string | null
    }
}

const ProfilePhoto: React.FC<ProfilePhotoPropsType> = ({photo}) => {
    const userPhoto = require('../../../../assets/img/userPhoto.png')

    return (
        <aside className={style.main_style +' '+ style.aside}>
            {/*block with photo and description*/}
            <figure className={style.avatar_wrapper}>

                <img
                    alt={'avatar'}
                    className={style.avatar}
                    src={photo? photo.large : userPhoto}
                />
            </figure>
            <button className={style.set_avatar_btn + ' common_btn'}>Set photo</button>
        </aside>
    );
};

export default ProfilePhoto;