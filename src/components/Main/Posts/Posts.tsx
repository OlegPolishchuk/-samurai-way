import React from 'react';
import style from './Posts.module.css';
import Post from "./Post/Post";
import TextArea, {MessageFormType} from "../../TextArea/TextArea";
import {PostsPropsType} from "./Post/PostsContainer";


const Posts = (props: PostsPropsType) => {
    const {
        posts,
        addPost,
        updateNewPostText,
    } = props

    const addNewPost = (values: MessageFormType) => {
        addPost(values.newPostText)
    }

    const onChangeTextHandler = (text: string) => {
        updateNewPostText(text)
    }


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
            <TextArea
                newPostText={''}
                onSubmitForm={addNewPost}
            />
            { postElements }
        </section>
    );
};

export default Posts;