import React, { Component } from "react";
import '../Styles/Career.css';
//import reactimg from '../Assets/reactimg.png';

// export default function Career()
// {
//     return<h2  style={{marginTop:100}}>Welcome to Career Component<br></br><Image/><br></br><Careers/></h2>
// }

// //export default Career;

// function Image()
// {
//     return<img src={reactimg} alt="reactimage" height={200} width={200}/>
// }

// function Careers()
// {
//     return(
//         <div>
//             <h4>Careers</h4>
//             <ul>
//                 <li>Software Developer</li>
//                 <li>Software Designer</li>
//                 <li>Software Tester</li>
//                 <li>Software Trainer</li>
//             </ul>
//         </div>
//     );
// }

//state Management

export default class Career extends Component {
    constructor() {
        super();
        this.state = { show: false }; //show->property
        this.toggleShowHide = this.toggleShowHide.bind(this);

    }
    toggleShowHide() {
        this.setState({ show: !this.state.show });
        console.log('Component: ', this.state);
    }
    render() {
        return (
            <>
                <div className="divtag">
                    <h1>DOTNET</h1>
                    {
                        //Conditional Rendering
                        this.state.show ?
                            (
                                <>
                                    <button onClick={this.toggleShowHide}>-</button>
                                    <br></br>
                                    <h4>A Full-stack .NET Developer is an expert who can build and manage all the stacks of an application meaning Front-end, Back-end, database, version control, server and APIs. This learning path focus on C#, SQL Server, ASP.NET MVC, Web API, Entity Framework Code First, Bootstrap and HTML5 which are required to build a real-world application with .NET.</h4>
                                </>
                            ) : (
                                <>
                                    <button onClick={this.toggleShowHide}>+</button>
                                    <br></br>
                                </>
                            )
                    }
                </div>
                <br></br>
                <CareerJava />
                <br>
                </br>
                <CareerPHP />
            </>
        )
    }
}

class CareerJava extends Component {
    constructor() {
        super();
        this.state = { show: false }; //show->property
        this.toggleShowHide = this.toggleShowHide.bind(this);

    }
    toggleShowHide() {
        this.setState({ show: !this.state.show });
        console.log('Component: ', this.state);
    }
    render() {
        return (
            <div className="divtag">
                <h1>JAVA</h1>
                {
                    //Conditional Rendering
                    this.state.show ?
                        (
                            <>
                                <button onClick={this.toggleShowHide}>-</button>
                                <br></br>
                                <h4>A Java Full Stack Developer is a developer who has expertise and deep knowledge of frameworks and tools used in Java full stack development like Core Java, servlets, APIs, database, web architecture, etc. A Full Stack Java developer can build whole Java applications including front end, back-end, database, APIs, server and version control.</h4>
                            </>
                        ) : (
                            <>
                                <button onClick={this.toggleShowHide}><i class="fa fa-caret-square-o-down" aria-hidden="true"></i></button>
                                <br></br>
                            </>
                        )
                }
            </div>
        )
    }
}

class CareerPHP extends Component {
    constructor() {
        super();
        this.state = { show: false }; //show->property
        this.toggleShowHide = this.toggleShowHide.bind(this);
    }
    toggleShowHide() {
        this.setState({ show: !this.state.show });
        console.log('Component: ', this.state);
    }
    render() {
        return (
            <div className="divtag">
                <h1>PHP</h1>
                {
                    //Conditional Rendering
                    this.state.show ?
                        (
                            <>
                                <button onClick={this.toggleShowHide}>-</button>
                                <br></br>
                                <h4>A professional web developer who uses hypertext pre-processor in order to develop dynamic web applications, can also conclude that PHP developers are full stack developers who use HTML, CSS, javascript, and PHP to create a complete web development solution.</h4>
                            </>
                        ) : (
                            <>
                                <button onClick={this.toggleShowHide}>Read More</button>
                                <br></br>
                            </>
                        )
                }
            </div>
        )
    }
}



