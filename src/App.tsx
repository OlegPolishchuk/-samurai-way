import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import {StoreType} from './redux/state'
import {AppDispatchType, RootStateType} from "./redux/redux-store";

type AppPropsType = {
    // store: StoreType
    store: RootStateType
    dispatch: AppDispatchType
}


const App: React.FC<AppPropsType> = (props) => {

    // const state = props.store.getState();
    const state = props.store
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className={'wrapper'}>
                    <Navbar/>
                    <Main
                        store={state}
                        // profilePage={state.profilePage}
                        // dialogsPage={state.dialogsPage}
                        // addPost={props.store.addPost.bind(props.store)}
                        // updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                        dispatch={props.dispatch.bind(props.store)}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
