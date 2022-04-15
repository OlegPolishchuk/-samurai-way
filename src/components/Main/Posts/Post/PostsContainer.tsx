import React, {ChangeEvent} from 'react';
import style from './Posts.module.css';
// import Post from "./Post/Post";
// import TextArea from "../../TextArea/TextArea";
// import {ActionsTypes, PostType} from "../../../redux/state";
// import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import Posts from "../Posts";
import {RootStateType} from "../../../../redux/redux-store";
import {ActionsTypes} from "../../../../redux/state";


type PostsPropsType = {
    // posts: Array<PostType>
    // addPost: ()=> void
    // newPostText: string
    // updateNewPostText: (newText: string) => void
    // dispatch: (action: ActionsTypes) => void
    store: RootStateType
}

const PostsContainer = (props: PostsPropsType) => {
    // const {posts, newPostText, updateNewPostText} = props
    const {
        // posts,
        // newPostText,
        // dispatch,
        store
    } = props

    const newPostText = store.profilePage.newPostText
    const posts = store.profilePage.posts

    const addNewPost = () => {
        // dispatch(addPostAC())
    }


    // const onChangeTextHandler = (text: string) => {
    //     updateNewPostText()
    //     // dispatch(updateNewPostTextAC(text))
    // }
    const onChangeTextHandler = (text: string) => {
        // dispatch(updateNewPostTextAC(text))
    }


    return (
        <Posts posts={posts} newPostText={newPostText} addPost={addNewPost} updateNewPostText={onChangeTextHandler}/>
    )
};

export default PostsContainer;