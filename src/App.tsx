import React from 'react';
import './App.css';
import Header from "./components/Header";
import Technologies from "./components/Technologies";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
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
