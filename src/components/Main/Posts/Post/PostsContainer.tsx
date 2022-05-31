import React from 'react';
import Posts from "../Posts";
import {AppDispatchType, RootStateType} from "../../../../redux/redux-store";
import {connect} from "react-redux";
import {InitialStateType} from "../../../../redux/profile-reducer/profile-reducer";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profile-reducer/action-creators";


type MapStateToPropsType = {
    posts: InitialStateType['posts']
}

type MapToDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: (text: string) => void
}

export type PostsPropsType = MapStateToPropsType & MapToDispatchPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType): MapToDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: (text: string) => {
            dispatch(addPostAC(text))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer