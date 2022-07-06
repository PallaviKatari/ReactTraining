import React, { useEffect, useState } from "react";
import axios from "axios";

const client=axios.create({
    baseURL:"https://fakestoreapi.com/users"
});

export default function AwaitAsync(){
    const[post,setPost]=useState(" ");

    useEffect(()=>{
        async function getPost(){
            const response=await client.get("/5");
            setPost(response.data);
        }
        getPost();
    },[] );

    return(
        <>
        <h1>{post.username}</h1>
        </>
    )
}