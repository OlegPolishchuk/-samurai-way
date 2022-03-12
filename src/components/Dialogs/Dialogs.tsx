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
    return (
        <div className={style.wrapper}>
            <aside className={style.dialogs_list}>
                <DialogItem
                    name={'Piter Parker'}
                    id={1}
                    avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''}
                />
                <DialogItem
                    name={'Bruce Wayne'}
                    id={2}
                    avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''}
                />
                <DialogItem
                    name={'Clark Kent'}
                    id={3}
                    avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''}
                />
            </aside>
            <main className={style.messages}>
                <Message id={1}
                         name={'Piter Parker'}
                         avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''}
                         message={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
                             '                                Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
                             '                                when an unknown printer took a galley of type and scrambled it to make a type specimen\n' +
                             '                                book.\n' +
                             '                                It has survived not only five centuries, but also the leap into electronic typesetting,\n' +
                             '                                remaining essentially unchanged.\n' +
                             '                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem\n' +
                             '                                Ipsum passages,\n' +
                             '                                and more recently with desktop publishing software like Aldus PageMaker including\n' +
                             '                                versions of Lorem Ipsum.'}
                />

            </main>
        </div>
    );
};

export default Dialogs;