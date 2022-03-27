import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from "./redux/state";


export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}