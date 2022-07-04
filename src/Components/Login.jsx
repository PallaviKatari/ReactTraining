import React, { useState } from "react";
import "../Styles/Login.css";
//Functional components->Stateless->to make them stateful->implement the hooks
const ValidateLogin = () => {
    const [email, setEmail] = useState("")

    const [error, setError] = useState(false)

    const [password, setPassword] = useState("")

    const onLogin = (e) => {
        e.preventDefault();
        if (email === "" && password === "") {
            setError(true)
            console.log(email+" "+password)
            return;
        }
        else {
            setError(false)
            alert("Login Successful")
            return;
        }
    }
    return (
        <div>
            <form onSubmit={onLogin}>
                <label className="labelfield">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}
                    value={email} className="inputfield"/> 
                {
                    error && <span style={{ color: 'red' }}>Enter Email</span>
                }
                <br></br><br></br>
                <label className="labelfield">Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}
                    value={password} className="inputfield"></input>
                {
                    error && <span style={{ color: 'red' }}>Enter Password</span>
                }
                <br></br>
                <button type="submit" className="inputbutton">Submit</button>
            </form>
        </div>
    )
}

export default ValidateLogin