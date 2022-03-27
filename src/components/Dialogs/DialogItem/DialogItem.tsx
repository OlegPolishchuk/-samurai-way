import React from 'react';
import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DataType} from "../../../redux/state";


// export DataType from App

export const DialogItem = (props: DataType) => {
    const path = `/dialogs/${props.id}`

    return (
        <figure className={style.dialog_item_wrapper}>
            <NavLink to={path} activeClassName={style.active} className={style.dialog_item}>
                {/*user photo*/}
                <img alt={'item_photo'} className={style.item_photo}
                     src={props.avatar}/>
                <figcaption className={style.item_name}>
                    {/*user name*/}
                    <h3 className={style.dialog_item_name}>{props.name}</h3>
                </figcaption>
            </NavLink>
        </figure>
    )
}

