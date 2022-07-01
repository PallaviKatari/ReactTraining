import React from 'react';
//Routing
import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/">Home</Link></li>
                            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="https://www.google.co.in/">React Concepts<span
                                className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="funclass">Components</Link></li>
                                    <li><Link to="emp">Props</Link></li>
                                </ul>
                            </li>
                            <li><Link to="career">Career</Link></li>
                            <li><a href="https://www.cgvakindia.com/">Contact <span className="glyphicon glyphicon-envelope"></span></a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="https://www.google.co.in/"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="https://www.google.co.in/"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}