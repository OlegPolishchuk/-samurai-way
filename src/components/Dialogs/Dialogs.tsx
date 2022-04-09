import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, AddNewMessageAC, DialogsPageType, updateNewMessageTextAC} from "../../redux/state";
import TextArea from "../TextArea/TextArea";

type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPagePropsType) => {
    // дестркутуризация пропсов
    const {data, messages, newMessageText} = props.dialogsPage;

    const onChangeTextHandler = (text: string) => {
        props.dispatch(updateNewMessageTextAC(text))
    }

    const addMessageHandler = () => {
        props.dispatch(AddNewMessageAC())
    }

    let dialogList = data.map(el =>  <DialogItem key={el.id} name={el.name} avatar={el.avatar} id={el.id}/>);
    let messageList = messages.map(el => <Message key={el.id} id={el.id} name={el.name} avatar={el.avatar} message={el.message} />);

    return (
        <div className={style.wrapper}>
            <aside className={style.dialogs_list}>
                { dialogList }
            </aside>
            <main className={style.messages}>
                { messageList }
                <TextArea newPostText={newMessageText}
                          onChangeText={onChangeTextHandler}
                          onClickCallback={addMessageHandler}
                />
            </main>
        </div>
    );
};

export default Dialogs;