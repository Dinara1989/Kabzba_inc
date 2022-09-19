import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Raiting from "./components/Raiting/Raiting";
import AppTitle from "./AppTitle";


function App() {
  return (
    <div className="App">
        <AppTitle title={"Learning React"}/>
        <Accordion titleValue={"Menu"} collapsed={true}/>
        <Raiting value={3}/>
        <Accordion titleValue={"Users"} collapsed={false}/>
        <Raiting value={2}/>
    </div>
  );
}

export default App;
