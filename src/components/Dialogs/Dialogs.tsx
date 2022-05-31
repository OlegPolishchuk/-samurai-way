import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import TextArea, {MessageFormType} from "../TextArea/TextArea";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs = (props: DialogsPropsType) => {
    const {data, messages, newMessageText} = props.dialogsPage;
    const {addMessage, updateMessageText} = props

    const onChangeTextHandler = (text: string) => {
        updateMessageText(text)
    }

    const addMessageHandler = () => {
        addMessage()
    }

    const submitPost = (values: MessageFormType) => {
        console.log(values)
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
                          onSubmitForm={submitPost}
                />
            </main>
        </div>
    );
};

export default Dialogs;