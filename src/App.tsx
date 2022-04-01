import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import {RootStateType} from './redux/state'

type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


const App: React.FC<AppPropsType> = (props) => {

    const {state, addPost, updateNewPostText} = props;

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
                        updateNewPostText={updateNewPostText}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
