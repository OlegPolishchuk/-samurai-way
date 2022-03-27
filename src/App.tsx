import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import {addPost, state} from './redux/state'



const App = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className={'wrapper'}>
                    <Navbar/>
                    <Main
                        profilePage={state.profilePage}
                        dialogsPage={state.dialogsPage}
                        addPost={addPost}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
