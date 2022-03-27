import React from 'react';
import style from './Posts.module.css';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import {PostType} from "../../../redux/state";


type PostsPropsType = {
    posts: Array<PostType>
    addPost: (text: string)=> void
}

const Posts = (props: PostsPropsType) => {
    const posts = props.posts

    let postElements = posts.map(el => {
        return (
            <Post
                userName={el.userName}
                id={el.id} photo={el.photo}
                post={el.post}
                key={el.id}
                date={el.date}
                likeCount={el.likeCount}
            />
        )
    })

    return (
        <section className={style.post_wrapper}>
            <NewPost addPost={props.addPost}/>
            { postElements }
        </section>
    );
};

export default Posts;