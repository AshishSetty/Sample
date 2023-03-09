import React, { useEffect, useState } from "react";

function Name4(){
    const[api,setApi]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then(
            x=>x.json()
        ).then(y=>setApi(y))
    })
    return<>
    <h1>using React call Api data</h1>
    <div>{api.map(data=><li key={data.id}>{data.title}</li>)}</div>
    

    </>
}
export default Name4;