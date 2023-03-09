import React, { useRef, useState } from "react";

function Name1(){
    const[store,setStore]=useState("");
    const reference=useRef("");
    const method_calling=()=>{setStore("")}
    return (
        <center>
            <h1>useRef hook:{store}</h1>
            <input ref={reference} value={store} type="text" onChange={(e)=>setStore(e.target.value)}/>
            <button onClick={method_calling}>Restart</button>
        </center>
    )
}
export default Name1;