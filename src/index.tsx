import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {subscribe,addPost, state, updateNewPostText} from "./redux/state";



const renderTree = () => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}
renderTree()
subscribe(renderTree)