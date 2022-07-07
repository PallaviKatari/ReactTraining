import React, { Component } from 'react';
import "../Styles/Career.css";
import CourseData from "../Data/Course.json";
import "../Styles/InfoCard.css";

class CourseDetails extends Component {

    state = { count: 0 }

    handleIncrement = () => {
        this.setState(prevState => (
            {
                count: prevState.count + 1
            }
        ))
    }

    handleDecrement = () => {
        if (this.state.count > 0) {
            this.setState(prevState => (
                {
                    count: prevState.count - 1
                }
            ))
        }
    }

    render() {
        return (
            <>
                No of Participants: {this.state.count}
                <br></br>
                <button onClick={this.handleDecrement} style={{ color: 'blue' }}>-</button>
                <button onClick={this.handleIncrement} style={{ color: 'blue' }}>+</button>
            </>
        )
    }
}

const course = [
    {
        id: 1,
        name: 'DOTNET'
    },
    {
        id: 2,
        name: 'JAVA'
    },
    {
        id: 3,
        name: 'PHP'
    },
    {
        id: 4,
        name: 'PYTHON'
    },
    {
        id: 5,
        name: 'TESTING'
    },
    {
        id: 6,
        name: 'MACHINE LEARNING'
    },
    {
        id: 7,
        name: 'DATABASE MANAGEMENT'
    },

];

export default function MyCourseList() {
    const reqSentHandler = () => {
        alert("Request Sent Successfully")
    }
    return (
        <>
            <Infocard/>
            <br></br>
            {course.map(course => (
                <div className="divtag" key={course.id}>
                    <>
                        {course.name}
                        <br></br>
                        <CourseDetails />
                        <br></br><br></br>
                        <button type="button" id='ibtn' onClick={reqSentHandler} className="btn btn-primary">Apply Now</button>
                        <br></br>
                        <button type="button" className="btn btn-primary"><a href="https://rzp.io/i/MFiCxPD"alt="" style={{color:'azure'}}>Book Slot</a></button>
                    </>
                </div>
            )
            )}
        </>
    )
}

const Infocard = () => {

    const InfocardCards = (cards) => {
        return (
            <div className="col-md-4">
                <div className="card Infocard cardbg" style={{borderRadius:30,borderStyle:'dashed'}}>
                    <div className="card-body" key={cards.id} >
                        <img src={cards.courseimage} className="img" alt=''/>
                        <center>
                            <h1 className="card-title">{cards.coursename}</h1>
                            <h4 className="card-title">{cards.courseduration}</h4>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="container-fluid infocard">
                <div className='row'>
                    {CourseData.map(InfocardCards)}
                </div>
            </div>
        </>
    )
}