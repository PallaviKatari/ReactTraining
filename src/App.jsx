import React from 'react';
import './App.css';
import Career from './Components/Career';
import ClassComponent from './Components/FunVsClass';
import EmpDetails from './Components/Props';
import Nav from './Components/Nav';
//Routing
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Nav/>
      <h1 style={{marginTop:200}}>Welcome to React JS</h1>
      <Routes>
        <Route exact path="career" element={<Career/>}/>
        <Route exact path="funclass" element={<ClassComponent/>}/>
        <Route exact path="emp" element={<EmpDetails name="John" designation="Developer"/>}/>
      </Routes>
    </div>
  );
}

export default App;



