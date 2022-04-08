import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import {StoreType} from './redux/state'

type AppPropsType = {
    store: StoreType
}


const App: React.FC<AppPropsType> = (props) => {

    const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className={'wrapper'}>
                    <Navbar/>
                    <Main
                        profilePage={state.profilePage}
                        dialogsPage={state.dialogsPage}
                        // addPost={props.store.addPost.bind(props.store)}
                        // updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
