import style from "../Dialogs.module.css";
import React from "react";
import {MessageType} from "../../../redux/dialogs-reducer";


export const Message = (props: MessageType) => {

    return (
        <div className={style.message_item}>
            {/*messages*/}
            <figure>
                <img alt={'user_photo'} className={style.message_item_photo}
                     src={props.avatar}/>
                <figcaption className={style.message}>
                    <h3 className={style.message_item_name}>{props.name}</h3>
                    <p>{props.message}</p>
                </figcaption>
            </figure>
        </div>
    )
}