import React, {ChangeEvent} from 'react';
import style from './Posts.module.css';
import Post from "./Post/Post";
import TextArea from "../../TextArea/TextArea";
import {ActionsTypes, PostType} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";


type PostsPropsType = {
    posts: Array<PostType>
    addPost: ()=> void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const Posts = (props: PostsPropsType) => {
    const {
        posts,
        newPostText,
        addPost,
        updateNewPostText,
    } = props

    const addNewPost = () => {
        addPost()
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
                newPostText={newPostText}
                onChangeText={onChangeTextHandler}
                onClickCallback={addNewPost}
            />
            { postElements }
        </section>
    );
};

export default Posts;