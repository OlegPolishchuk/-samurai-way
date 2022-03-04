import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className={'wrapper main_wrapper'}>
                <Navbar/>
                <Aside/>
                <Main/>
            </div>
        </div>
    );
};

// type MessageType = {
//     message: string
// }
//
// function HelloMessage(props: MessageType){
//     return <h1>{props.message}</h1>
// }
//
// const ByeMessage: React.FC<MessageType> = (props)=>{
//     return <h1>{props.message}</h1>
// };




export default App;
