import React from 'react';
import style from './NewPost.module.css';

type NewPostPropsType = {
    addPost: (text: string)=> void
}

const NewPost = (props:NewPostPropsType) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const totalClassName =  'common_btn'

    const onClickBtnHandler = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.addPost(text)
        }
    }

    return (
        <div className={style.wrapper}>
            <textarea
                ref={newPostElement}
                placeholder={'write new post'}
                className={style.textarea} />
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