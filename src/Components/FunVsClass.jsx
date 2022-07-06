import React, { Component } from "react";

import Courses from "./CourseDetails";

// export default class ClassComponent extends Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.state={course:"React"}; //course->property->initial state->React
//     }

//     UNSAFE_componentWillMount()
//     {
//         console.log("componentWillMount Phase");
//     }

//     UNSAFE_componentDidMount()
//     {
//         console.log("componentDidMount Phase");
//     }

//     //user-defined function ->change the state of course from React->React JS using setState
//     changecoursestate()
//     {
//         this.setState({course:"React JS"});
//     }

//     render()
//     {
//         return(
//             <div style={{color:'azure'}}>
//                 <a onClick={this.changecoursestate.bind(this)} href="https://www.google.co.in/">Lifecycle Demo</a>
//                 <h4>Welcome to {this.state.course}</h4>
//                 <p>{this.state.course} Training</p>
//             </div>
//         )
//     }
//     UNSAFE_componentWillUpdate()
//     {
//         console.log("Updating phase");
//     }
// }

export default class Destructure extends Component {
    render() {
        const dotnet =
        {
            courseid: 1,
            courseimg: "https://th.bing.com/th/id/OIP._w4kEUAb7-YMEOc46aFcWQHaHD?pid=ImgDet&rs=1",
            coursename: "DOTNET",
            courseduration: "72 HOURS",
            no_of_participants: 16,
        }
        const java =
        {
            courseid: 2,
            courseimg: "https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg",
            coursename: "JAVA",
            courseduration: "80 HOURS",
            no_of_participants: 20,
        }
        const php =
        {
            courseid: 3,
            courseimg: "https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg",
            coursename: "PHP",
            courseduration: "52 HOURS",
            no_of_participants: 30,
        }
        const python =
        {
            courseid: 4,
            courseimg: "https://th.bing.com/th/id/R.1379e2c069798b5aaf81fac899ff76bf?rik=C%2bbzIGYtMYexog&riu=http%3a%2f%2fpngimg.com%2fuploads%2fphp%2fphp_PNG12.png&ehk=CMslpDyieHiNYpA2oVMKIT6euUCRGrt1B8HcBv9BJ6s%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
            coursename: "PYTHON",
            courseduration: "40 HOURS",
            no_of_participants: 25,
        }

        return (
            <>
                <Courses dotnet={dotnet} java={java} php={php} python={python} />
            </>
        )
    }
}