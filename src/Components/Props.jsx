import React from 'react';

const employeedetails=(props)=>
{
    return(
        <>
        <h3>Welcome {props.name} to our {props.designation} department</h3>
        {trainingdetails}
        {comdetails}
        <Constdemo/>
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

const trainingdetails=<h4>Welcome to {course} training</h4>

const comdetails=<h4>Welcome to {company}</h4>

export default employeedetails;