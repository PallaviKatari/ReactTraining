import './App.css';
import Career from './Components/Career';
import ClassComponent from './Components/FunVsClass';
import EmpDetails from './Components/Props';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React JS</h1>
      <Home />
      <Career/>
      <ClassComponent/>
      <EmpDetails name="John" designation="Software Developer"/>
      <EmpDetails name="Peter" designation="Software Tester"/>
      <EmpDetails name="Paul" designation="Software Designer"/>
    </div>
  );
}

export default App;

function Home() {
  return <p>Let's get started!!!</p>
}
