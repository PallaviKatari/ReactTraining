import React, { useState } from 'react';
import './App.css';
import Career from './Components/Career';
import Destructure from './Components/FunVsClass';
import EmpDetails from './Components/Props';
import Nav from './Components/Nav';
import ValidateLogin from './Components/Login';
import CourseDetails from './Components/Course';
import MyCourseList from './Components/YourCourseList';
import OnlineAd from './Components/AxiosDemo';
import AwaitAsync from './Components/AxiosAwaitAsync';
//Routing
import { Routes, Route } from 'react-router-dom';

function App() {
  const [name, setName] = useState(" ");
  return (
    <div className="App">
      <Nav />
      <h1 style={{ marginTop: 100, color: 'azure' }}>Welcome {name} !!! <AwaitAsync/></h1>
      <Child changeName={(name) => setName(name)} />
      <Routes>
        <Route exact path="career" element={<Career />} />
        <Route exact path="mycourse" element={<MyCourseList />} />
        <Route exact path="destructure" element={<Destructure />} />
        <Route exact path="emp" element={<EmpDetails name="John" designation="Developer" />} />
        <Route exact path="login" element={<ValidateLogin />} />
        <Route exact path="course" element={<CourseDetails />} />
      </Routes>
      <nav className="navbar navbar-inverse navbar-fixed-bottom">
        <h4 style={{ textAlign: "center", color: "azure" }}>LIGHTNING DEALS IN AMAZON</h4>
        <OnlineAd />
      </nav>
    </div>
  );
}

export default App;

function Child(props) {
  return (
    <>
      <a onClick={() => props.changeName("Have a Nice Day!!!")}>
        Click Here!!!
      </a>
    </>
  )
}



