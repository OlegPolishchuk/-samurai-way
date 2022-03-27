import React from 'react';
import style from "./Post.module.css";
import Like from "../../Like/Like";
import {PostType} from "../../../../redux/state";



const Post = (props: PostType) => {
    return (
        <section className={style.post}>
            <div className={style.writer}>
                <img alt={'userPhoto'} className={style.photo} src={props.photo}/>
                <div>
                    <h3 className={style.name}>{props.userName}</h3>
                    <p className={style.date}>{props.date}</p>
                </div>
            </div>
            <article className={style.text}>
                <p>{props.post}</p>
            </article>
            <Like/>
        </section>
    );
};

export default Post;