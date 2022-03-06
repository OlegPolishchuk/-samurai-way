import React from 'react';
import style from './NewPost.module.css';

const NewPost = () => {
    return (
        <div>
            <textarea placeholder={'write something here...'} className={style.textarea}></textarea>
            <button>Add</button>
        </div>
    );
};

export default NewPost;