import React, { Component } from "react";
import axios from "axios";
import { render } from "@testing-library/react";

export default class OnlineAd extends Component {
    state = { advertisement: [] }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products').then(res => {
            const advertisement = res.data;
            this.setState({ advertisement });
        })
    }

    render() {
        return (
            <div className="row" style={{borderColor:"black"}}>
                {this.state.advertisement.filter(advertisement => advertisement.id < 13).map(u =>
                    <div className="col-md-1" key={u.id}>
                        <div className="card">
                            <div className="card-body" >
                                <img src={u.image} className="img" alt='' style={{ mixBlendMode: 'normal',height:50,width:50,borderRadius:5 }} />
                                <center>
                                    <h6 className="card-title" style={{ color: 'azure',textAlign:'center'}}>Rs:{u.price}</h6>       
                                </center>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}



