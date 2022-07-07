//https://react-hooks.org/docs/getting-started/
//npm i -s rooks
import { useToggle } from "rooks";
import React from "react";
export default function App() {
  const [state, setState] = useToggle();
  function toggle() {
    setState(!state);
  }
  return (
    <div className="App">
      <br></br>
      <h2 onClick={toggle}>
        <p style={{color:'azure'}}>Do you feel good today?</p>
        <div style={{ cursor: "pointer" }}>
          {state ? <span style={{color:'azure'}}>Yes! 👍</span> : <span style={{color:'azure'}}>No! 👎</span>}
        </div>
      </h2>
    </div>
  );
}
