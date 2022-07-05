import React,{Component} from "react";

export default class UserDetails extends Component
{
    constructor(props)
    {
        super(props)
        this.state={users:[]}
    }

    componentDidMount()
    {
        fetch('https://api.escuelajs.co/api/v1/users').then
        (
            (response)=>response.json()
        ).then(users=>this.setState({users:users}))
    }

    render()
    {
        return(
            <div className="row">
                {this.state.users.map(u=>
                <div className="col-md-4"  key={u.id}>
                <div className="card" style={{borderRadius:30,borderStyle:'dashed',borderColor:'azure'}}>
                    <div className="card-body" >
                        <img src={u.avatar} className="img" alt='' style={{mixBlendMode:'normal'}}/>
                        <center>
                            <h1 className="card-title" style={{color:'azure'}}>NAME: {u.name}</h1>
                            <h3 className="card-title" style={{color:'azure'}}>ROLE: {u.role}</h3>
                            <h4 className="card-title" style={{color:'azure'}}>EMAIL: {u.email}</h4>
                        </center>
                    </div>
                </div>
                </div>
                )}
            </div>           
        )
    }
}