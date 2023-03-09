import React, { useState } from "react";
import courseimg_1 from "../../assets/images/one.jpeg";
import courseimg_2 from "../../assets/images/two.jpeg";
import courseimg_3 from "../../assets/images/three.jpeg";
import courseimg_4 from "../../assets/images/four.jpeg";
import Course_show from "./course_grp";

function Course (){
    let [data,setData]= useState([
        {
            img:courseimg_1,
            head:"React",
            p_graph:"kjghhhhhhhh"
            
        },
        {
            img:courseimg_2,
            head:"React1",
            p_graph:"kjffffff"
        },
        {
            img:courseimg_3,
            head:"React2",
            p_graph:"liyfffffff"
        },
        {
            img:courseimg_4,
            head:"React3",
            p_graph:"kutddddd"
        }
    ])
    return(
        <div className="container mt-4">
            <div className="row">
                {
                    data.map((store,setStore)=>{
                        return(
                            <div className="col-sm-3">
                                <Course_show image={store.img} value={store.head} title={store.p_graph} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Course;
