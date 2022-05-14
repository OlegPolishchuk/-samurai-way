import React from 'react';
import './App.css';
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";

const App: React.FC = (props) => {

    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <div className={'wrapper'}>
                    <Navbar/>
                    <Main
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
