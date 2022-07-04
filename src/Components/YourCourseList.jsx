import React, { Component } from 'react';
import "../Styles/Career.css";

export default class MyCourseList extends Component {

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
            <div>
            {course.map(course => (
                <div className="divtag" key={course.id}>
                    <>
                        {course.name}
                        <br></br>
                        No of Participants: {this.state.count}
                        <br></br>
                        <button onClick={this.handleDecrement} style={{color:'blue'}}>-</button>
                        <button onClick={this.handleIncrement} style={{color:'blue'}}>+</button>
                    </>
                </div>
            )
            )}
        </div>
        )
    }
}

  const course=[
        {
            id:1,
            name:'DOTNET'
        },
        {
            id:2,
            name:'JAVA'
        },
        {
            id:3,
            name:'PHP'
        },
        {
            id:4,
            name:'PYTHON'
        },

    ];

    