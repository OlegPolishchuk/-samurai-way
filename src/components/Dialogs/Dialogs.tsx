import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DataItemType = {
    id: number
    name: string
    avatar: string
}
type MessageType = {
    id: number
    name: string
    avatar: string
    message: string
}
type DataType = {
    data: Array<DataItemType>
    messages: Array<MessageType>
}
type DialogsPagePropsType = {
    dialogsPage: DataType
}


const Dialogs = (props: DialogsPagePropsType) => {
    // дестркутуризация пропсов
    const {data, messages} = props.dialogsPage;

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
        </div>
    );
};

export default Dialogs;