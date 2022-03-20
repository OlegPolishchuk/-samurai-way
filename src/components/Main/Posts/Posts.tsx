import React from 'react';
import style from './Posts.module.css';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import {PostType} from "../../../App";

type PostsPropsType = {
    posts: Array<PostType>
}

const Posts = (props: PostsPropsType) => {
    const posts = props.posts

    let postElements = posts.map(el => <Post userName={el.userName} id={el.id} photo={el.photo} post={el.post} key={el.id}/>)

    return (
        <section className={style.post_wrapper}>
            { postElements }
            <NewPost/>
        </section>
    );
};

export default Posts;