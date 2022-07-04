import React from 'react';

const userdetails=['Peter','John','Jancy','Paul','Prince'];

const employeedetails=(props)=>
{
    return(
        <>
        <h3 style={{color:'azure'}}>Welcome {props.name} to our {props.designation} department</h3>
        {trainingdetails}
        {comdetails}
        <Constdemo/>
        <br>
        </br>
        <Filteruser/>
        </>
    );
}

//React fragments
function Constdemo()
{
    return(
        <React.Fragment>
            {trainingdetails}
            {comdetails}
        </React.Fragment>
    )
}

//constant

const course="React JS";

const company="IBM";

const trainingdetails=<h4 style={{color:'azure'}}>Welcome to {course} training</h4>

const comdetails=<h4 style={{color:'azure'}}>Welcome to {company}</h4>

function Filteruser() {
    return (
        <>
        {userdetails.filter(user=>user.includes('J')).map
        (
            username=>
            (
                <h4 style={{color:'azure'}} key={username.index}>
                    Username: {username}
                </h4>

            )

        )}
            
        </>

    )
}

export default employeedetails;