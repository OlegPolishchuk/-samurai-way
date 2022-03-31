import React from 'react';
import style from './Posts.module.css';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import {PostType, updateNewPostText} from "../../../redux/state";


type PostsPropsType = {
    posts: Array<PostType>
    addPost: ()=> void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const Posts = (props: PostsPropsType) => {
    const {posts, newPostText, updateNewPostText} = props

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
            <NewPost
                addPost={props.addPost}
                newPostText={newPostText}
                updateNewPostText={updateNewPostText}
            />
            { postElements }
        </section>
    );
};

export default Posts;