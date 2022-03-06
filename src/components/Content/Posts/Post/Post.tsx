import React from 'react';
import style from "./Post.module.css";
import Like from "../../Like/Like";

// в качестве props передаем объект из Posts.tsx
// в данном объекте есть свойства, который являются объектами,
// так что нужно протипизировать кажыдй объект отдельно
type PostDataPropsType = {
    userName: string,
    photo: string,
    post: messagePropsType
}
type messagePropsType = {
    message: string,
    date: string
}

type PostPropsType = {
    post: PostDataPropsType
}


const Post = (props: PostPropsType) => {
    return (
        <section className={style.post}>
            <div className={style.writer}>
                <img alt={'userPhoto'} className={style.photo} src={props.post.photo}/>
                <div>
                    <h3 className={style.name}>{props.post.userName}</h3>
                    <p className={style.date}>{props.post.post.date}</p>
                </div>
            </div>
            <article className={style.text}>
                <p>{props.post.post.message}</p>
            </article>
            <Like/>
        </section>
    );
};

export default Post;