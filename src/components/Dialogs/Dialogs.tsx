import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string
    avatar: string
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
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

type MessagePropsType = {
    id: number
    name: string
    avatar: string
    message: string
}

const Message = (props: MessagePropsType) => {

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


const Dialogs = () => {

    let data = [
        {id : 1, name: 'Piter Parker', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''},
        {id: 2, name: 'Bruce Wayne', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''},
        {id: 3, name: 'Clark Kent', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''}
    ]

    let messages = [
        {
            id: 1,
            name: 'Piter Parker',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\'',
            message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id: 2,
            name: 'Bruce Wayne',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\'',
            message: 'Hello everyone!!!'
        }
    ]
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