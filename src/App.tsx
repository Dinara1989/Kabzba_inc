import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Raiting from "./components/Raiting/Raiting";
import AppTitle from "./AppTitle";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";


function App() {
  return (
    <div className="App">
        <AppTitle title={"Learning React"}/>
        <OnOff />
        <OnOff />
        <OnOff />
        <Accordion titleValue={"Menu"} collapsed={true}/>
        <Raiting value={3}/>
        <Accordion titleValue={"Users"} collapsed={false}/>
        <Raiting value={2}/>

        <UncontrolledAccordion titleValue={"Numbers"} />
        <UncontrolledAccordion titleValue={"Words"} />
    </div>
  );
}

export default App;
