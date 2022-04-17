import React from 'react';
import Posts from "../Posts";
import {AppDispatchType, RootStateType} from "../../../../redux/redux-store";
import {addPostAC, InitialStateType, updateNewPostTextAC} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";


type MapStateToPropsType = {
    posts: InitialStateType['posts']
    newPostText: InitialStateType['newPostText']
}

type MapToDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export type PostsPropsType = MapStateToPropsType & MapToDispatchPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType): MapToDispatchPropsType => {
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