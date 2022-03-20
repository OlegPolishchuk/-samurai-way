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

type PropsType = {
    data: Array<DataType>
    messages: Array<MessageType>
    posts: Array<PostType>
}

const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className={'wrapper'}>
                    <Navbar/>
                    <Main data={props.data} messages={props.messages} posts={props.posts}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
