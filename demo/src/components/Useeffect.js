import React, { useEffect, useState } from "react";

function Name(){
    let [store,data]=useState(1);
    useEffect(()=>console.log(store))
    return(
        <center><h1>Its UseEffect:{store}</h1>
        <button onClick={()=>data(store+1)}></button>
        <button onClick={()=>data(store-1)}></button></center>

        
    )

}
export default Name;