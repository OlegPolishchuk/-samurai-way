import React, {useEffect} from 'react';
import './App.css';
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {getAuthUserDataTC, logoutTC} from "./redux/auth-reducer/thunk-creators";

const App: React.FC = (props) => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAuthUserDataTC())
  }, [])

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
