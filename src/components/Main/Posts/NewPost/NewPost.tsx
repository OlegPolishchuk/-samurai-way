import React, {ChangeEvent} from 'react';
import style from './NewPost.module.css';
import {ActionsTypes} from "../../../../redux/state";


type NewPostPropsType = {
    // addPost: ()=> void
    newPostText: string
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

const NewPost = (props:NewPostPropsType) => {

    const totalClassName =  'common_btn'

    const onClickBtnHandler = () => {
        props.dispatch({
            type: 'ADD-POST'
        })
    }

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        // props.updateNewPostText(text) //del
        props.dispatch({
            type: 'UPDATE-NEW-POST-TEXT',
            newText: text
        })
    }

    return (
        <div className={style.wrapper}>
            <textarea
                value={props.newPostText}
                placeholder={'write new post'}
                className={style.textarea}
                onChange={onChangeTextareaHandler}
            />
            <button
                onClick={ onClickBtnHandler }
                className={totalClassName}
            >
                Add
            </button>
        </div>
    );
};

export default NewPost;