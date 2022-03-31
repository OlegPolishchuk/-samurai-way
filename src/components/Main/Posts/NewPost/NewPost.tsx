import React from 'react';
import style from './NewPost.module.css';
import {updateNewPostText} from "../../../../redux/state";

type NewPostPropsType = {
    addPost: ()=> void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const NewPost = (props:NewPostPropsType) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const totalClassName =  'common_btn'

    const onClickBtnHandler = () => {
        props.addPost()
    }

    const onChangeTextarea = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            updateNewPostText(text)
        }
    }

    return (
        <div className={style.wrapper}>
            <textarea
                value={props.newPostText}
                ref={newPostElement}
                placeholder={'write new post'}
                className={style.textarea}
                onChange={onChangeTextarea}
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