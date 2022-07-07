import React from "react";
//npm install use-axios-client --force
import { useAxios } from "use-axios-client";
//npm install react-jss --force
import { createUseStyles } from "react-jss";

const styles=createUseStyles({
    h3:{
        color:'lightseagreen',
        fontFamily:'cursive'
    },
    h4:{
        color:'lightskyblue',
        fontFamily:'cursive'
    },

})

export default function TopPerformers()
{
    const styling=styles()
    const{data,error,loading}=useAxios({
        url:"https://jsonplaceholder.typicode.com/users"
    });

    if(loading||!data)return "Loading...";
    if(error) return "Error!!!";
    return(
        <>
        <div className="row" style={{marginLeft:50}}>
                {data.map(u=>
                <div className="col-md-4" style={{marginLeft:10,marginRight:10,marginTop:10,marginBottom:10}} key={u.id}>
                <div className="card">
                    <div className="card-body" style={{borderRadius:15,borderStyle:'groove',borderColor:'violet'}}>
                        <img src="https://static.vecteezy.com/system/resources/previews/000/551/599/original/user-icon-vector.jpg" className="img" alt='' style={{marginTop:10,mixBlendMode:'normal',borderRadius:20}}/>
                        <center>
                            <h3 className={styling.h3}>NAME: {u.username}</h3>
                            <h3 className={styling.h3}>CITY: {u.address.city}</h3>
                            <h4 className={styling.h4}>COMPANY: {u.company.name}</h4>
                        </center>
                    </div>
                </div>
                </div>
                )}
            </div>    
        </>
    )
}