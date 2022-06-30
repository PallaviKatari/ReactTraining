import React from 'react';

const employeedetails=(props)=>
{
    return(
        <div>
        <h3>Welcome {props.name} to our {props.designation} department</h3>
        </div>
    );
}

export default employeedetails;