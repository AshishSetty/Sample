import React from "react";

function Course_show(props){
    return(<>
        <div className="card shadow-lg">
            <img src={props.image} width="250px" height="250px"/>
            <center><h1>{props.value}</h1></center>
            
        </div>
        <center><h1>{props.title}</h1></center>

        </>
    )
}
export default Course_show;