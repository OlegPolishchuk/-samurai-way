import React from 'react';
import style from './ProfilePhoto.module.css';

const ProfilePhoto = () => {
    return (
        <aside className={style.main_style +' '+ style.aside}>
            {/*block with photo and description*/}
            <figure className={style.avatar_wrapper}>

                <img alt={'avatar'} className={style.avatar}/>
            </figure>
            <button className={style.set_avatar_btn + ' common_btn'}>Set photo</button>
        </aside>
    );
};

export default ProfilePhoto;