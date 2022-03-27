import React from 'react';
import style from './NewPost.module.css';

const NewPost = () => {
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const totalClassName =  'common_btn'

    const addPost = () => {
        const text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={style.wrapper}>
            <textarea
                ref={newPostElement}
                placeholder={'write new post'}
                className={style.textarea} />
            <button
                onClick={ addPost }
                className={totalClassName}
            >
                Add
            </button>
        </div>
    );
};

export default NewPost;