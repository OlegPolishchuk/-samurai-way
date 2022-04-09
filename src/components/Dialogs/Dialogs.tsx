import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/state";
import TextArea from "../TextArea/TextArea";

type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPagePropsType) => {
    // дестркутуризация пропсов
    const {data, messages, newMessageText} = props.dialogsPage;

    let dialogList = data.map(el =>  <DialogItem key={el.id} name={el.name} avatar={el.avatar} id={el.id}/>);
    let messageList = messages.map(el => <Message key={el.id} id={el.id} name={el.name} avatar={el.avatar} message={el.message} />);

    return (
        <div className={style.wrapper}>
            <aside className={style.dialogs_list}>
                { dialogList }
            </aside>
            <main className={style.messages}>
                { messageList }
            </main>
            {/*<TextArea newPostText={newMessageText} dispatch={props.dispatch} />*/}
        </div>
    );
};

export default Dialogs;