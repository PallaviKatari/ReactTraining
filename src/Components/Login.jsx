import React, { useState } from "react";
import "../Styles/Login.css";
//Functional components->Stateless->to make them stateful->implement the hooks
const ValidateLogin = () => {
    const [email, setEmail] = useState("")

    const [error, setError] = useState(false)

    const [error1, setError1] = useState(false)

    const [password, setPassword] = useState("")

    const onLogin = (e) => {
        e.preventDefault();
        if (email === "") {
            setError(true)
            return;
        }
        else if (password === "") {
            setError1(true)
            return;
        }
        else {
            setError(false)
            setError1(false)
            alert("Login Successful")
            return;
        }
    }
    return (
        <div style={{ marginTop: 50 }}>
            <form onSubmit={onLogin}>
                <label className="labelfield">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}
                    value={email} className="inputfield" placeholder="Enter email" />
                {
                    error && <span style={{ color: 'red', fontFamily: 'cursive', marginLeft: 5 }}>Enter Email</span>
                }
                <h3 style={{ color:'azure' }}>DataBinding: {email}</h3>
                <br></br><br></br>
                <label className="labelfield">Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}
                    value={password} className="inputfield" placeholder="Enter password"></input>
                {
                    error1 && <span style={{ color: 'red', fontFamily: 'cursive', marginLeft: 5 }}>Enter Password</span>
                }
                <br></br>
                <button type="submit" className="inputbutton">Submit</button>
                <br></br>
            </form>
        </div>
    )
}

export default ValidateLogin