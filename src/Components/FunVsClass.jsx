import React,{Component} from "react";

export default class ClassComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state={course:"React"}; //course->property->initial state->React
    }

    UNSAFE_componentWillMount()
    {
        console.log("componentWillMount Phase");
    }

    UNSAFE_componentDidMount()
    {
        console.log("componentDidMount Phase");
    }

    //user-defined function ->change the state of course from React->React JS using setState
    changecoursestate()
    {
        this.setState({course:"React JS"});
    }

    render()
    {
        return(
            <div style={{color:'azure'}}>
                <a onClick={this.changecoursestate.bind(this)} href="https://www.google.co.in/">Lifecycle Demo</a>
                <h4>Welcome to {this.state.course}</h4>
                <p>{this.state.course} Training</p>
            </div>
        )
    }
    UNSAFE_componentWillUpdate()
    {
        console.log("Updating phase");
    }
}