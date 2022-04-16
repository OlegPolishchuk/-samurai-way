import React from 'react';
import Posts from "../Posts";
import {AppDispatchType, RootStateType} from "../../../../redux/redux-store";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";


const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer