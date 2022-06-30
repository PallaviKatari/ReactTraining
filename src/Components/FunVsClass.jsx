import React,{Component} from "react";

export default class ClassComponent extends Component
{
    render()
    {
        return<h3>Welcome to Class Component<br></br><ClassComponent1/></h3>
    }
}

class ClassComponent1 extends Component
{
    render()
    {
        return(
            <div>
                <pre>
                maintain the state <br></br>
                render-return<br></br>
                extends-React.Component<br></br>
                They support all functions which are 
                present in the react lifecycle
                </pre>
            </div>
        )
    }
}