import React from "react";
import '../Styles/Career.css';
import reactimg from '../Assets/reactimg.png';

export default function Career()
{
    return<h2  style={{marginTop:100}}>Welcome to Career Component<br></br><Image/><br></br><Careers/></h2>
}

//export default Career;

function Image()
{
    return<img src={reactimg} alt="reactimage" height={200} width={200}/>
}

function Careers()
{
    return(
        <div>
            <h4>Careers</h4>
            <ul>
                <li>Software Developer</li>
                <li>Software Designer</li>
                <li>Software Tester</li>
                <li>Software Trainer</li>
            </ul>
        </div>
    );
}