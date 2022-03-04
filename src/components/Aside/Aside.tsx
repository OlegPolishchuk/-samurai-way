import React from 'react';
import style from './Aside.module.css';

const Aside = () => {
    return (
        <aside className={style.main_style +' '+ style.aside}>
            {/*block with photo and description*/}
            <figure>

                <img alt={'avatar'} className={style.avatar}/>
                <figcaption className={style.set_avatar}>
                    Set photo
                </figcaption>
                <figcaption>Edit photo</figcaption>
            </figure>
        </aside>
    );
};

export default Aside;