import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";

export type DataType = {
    id: number
    name: string
    avatar: string
}
export type MessageType = {
    id: number
    name: string
    avatar: string
    message: string
}

type PostItemType = {
    id: number
    message: string
    date: string
}
export type PostType = {
    id: number
    userName: string
    photo: string
    post: PostItemType
}
type DialogsPageType = {
    data: Array<DataType>
    messages: Array<MessageType>
}
type ProfilePageType = {
    posts: Array<PostType>
}

type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

type PropsType = {
    state: StateType
}

const App = (props: PropsType) => {
    // разворачиваем объект state, что бы в компонент main закинуть отдельные части
    const {data, messages} = props.state.dialogsPage;
    const posts = props.state.profilePage.posts

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className={'wrapper'}>
                    <Navbar/>
                    <Main data={data} messages={messages} posts={posts}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
