import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";

/// DialogsPage types
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

export type DialogsPageType = {
    data: Array<DataType>
    messages: Array<MessageType>
}
///////////////////////////////
// Profile page types
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

export type ProfilePageType = {
    posts: Array<PostType>
}
////////////////////////////////

export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}
/////////////////////////////////
type PropsType = {
    state: StateType
}

const App = (props: PropsType) => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className={'wrapper'}>
                    <Navbar/>
                    <Main state={props.state}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
