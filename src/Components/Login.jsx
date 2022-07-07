import React, { useState } from "react";
import "../Styles/ReactHookForm.css";
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
            <SpreadOperator/>
            <br></br>
            <br></br>
            <form onSubmit={onLogin}>
                <label className="labelfield" style={{color:'azure'}}>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}
                    value={email} className="inputfield" placeholder="Enter email" />
                {
                    error && <span style={{ color: 'red', fontFamily: 'cursive', marginLeft: 5 }}>Enter Email</span>
                }
                <h3 style={{ color:'azure' }}>DataBinding: {email}</h3>
                <br></br><br></br>
                <label className="labelfield" style={{color:'azure'}}>Password</label>
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

export default ValidateLogin;


function SpreadOperator()
{
    const actualimg=
    {
        src:"https://th.bing.com/th/id/R.32adacdb13aac8155a64a40d9ca50b6a?rik=6gkvUOrB40qpqg&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fy%2fo%2fN%2fR%2fL%2ff%2flogin-blue-hi.png&ehk=mfje0T0CCrtU9jCzsoFR8xtQlWmTKachh5RlaJ%2bvu4g%3d&risl=&pid=ImgRaw&r=0",
        alt:"This is a Login Image"
    };
    const actualimg1=
    {
        src:"https://cdn3.iconfinder.com/data/icons/security-3-1/512/access-512.png",
        alt:"This is a Login Image1"
    };

    const formattedimg=
    {
        ...actualimg,
        height:50,
        width:50,
    };
    const formattedimg1=
    {
        ...actualimg1,
        height:50,
        width:50,
    };

    return(
        <>
        {/* <img {...formattedimg}/> */}
        <span><Image {...formattedimg}/>
        <Image1 {...formattedimg1} style={{marginLeft:20}}/></span>
        </>           
    )
}

function Image(props)
{
    return(
        <>
        <img {...props}/>
        </>
    )
}

function Image1(props)
{
    return(
        <>
        <img {...props}/>
        </>
    )
}

