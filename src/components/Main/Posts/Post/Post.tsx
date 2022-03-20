import React from 'react';
import style from "./Post.module.css";
import Like from "../../Like/Like";

type PostPropsType = {
    id: number
    userName: string
    photo: string
    post: messagePropsType
}
type messagePropsType = {
    id: number
    message: string
    date: string
}


const Post = (props: PostPropsType) => {
    return (
        <section className={style.post}>
            <div className={style.writer}>
                <img alt={'userPhoto'} className={style.photo} src={props.photo}/>
                <div>
                    <h3 className={style.name}>{props.userName}</h3>
                    <p className={style.date}>{props.post.date}</p>
                </div>
            </div>
            <article className={style.text}>
                <p>{props.post.message}</p>
            </article>
            <Like/>
        </section>
    );
};

export default Post;