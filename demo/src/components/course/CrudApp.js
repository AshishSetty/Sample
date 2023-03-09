import React, { useState } from "react";
function CrudTable(){
    let [car,setCar]=useState([
        {
            id:"Challenger",
            imgurl:"https://images.unsplash.com/photo-1612814251241-6089fc8fee42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
            name:"Dodge",
            price:10000000,
            qty:3
        },
        {
            id:"Supra",
            imgurl:"https://images.unsplash.com/photo-1607603750909-408e193868c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            name:"Toyota",
            price:100000000,
            qty:5
        },
        
        {
            id:"GTR",
            imgurl:"https://images.unsplash.com/photo-1595527137281-3cb1fd8968ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGd0cnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name:"Nissan",
            price:100000000,
            qty:7
        }
    ]);
    let incrQty=(insc)=>{
        setCar((toinsc)=>{
            return toinsc.map((Cars,index)=>{
                if(Cars.id===insc){
                    return {
                        ...Cars,
                        qty:Cars.qty+1
                    }

                }
                else{
                    return Cars;
                }
            })
        })
    }
    let decQty=(insc)=>{
        setCar((toinsc)=>{
            return toinsc.map((Cars,index)=>{
                if(Cars.id===insc){
                    return {
                        ...Cars,
                        qty:Cars.qty-1 > 0 ? Cars.qty-1:1
                    }

                }
                else{
                    return Cars;
                }
            })
        })
    }
let deleteCars=(insc)=>{
    setCar((toinsc)=>{
        return toinsc.filter(car =>car.id !==insc);
    })
}
let calGrandtotal=()=>{
    let total=0;
    for(let Cars of car ){
        total+=(Number(Cars.qty)*Number(Cars.price))
    }
    return total;

}
return(
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col">
                <p className="h1 text-success">Cars Table </p>

            </div>
            </div> 
            <div className="row mt-3">
            <div className="col">
                <table className="table table-hover text-center text-striped">
                    <thead>
                        <tr>
                            <th>S:NO</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Events</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        car.map((Cars,index)=>{
                            return (
                                <tr>
                                    <td>{Cars.id}</td>
                                    <td>
                                        <img alt="#" src={Cars.imgurl} width={100} height={100}/>
                                    </td>
                                    <td>{Cars.name}</td>
                                    <td>&#8377;{Cars.price.toFixed(2)}</td>
                                    <td>
                                        <i onClick={()=>decQty(Cars.id)} class="bi bi-dash"></i>
                                        {Cars.qty}
                                        <i onClick={()=>incrQty(Cars.id)} class="bi bi-plus"></i>
                                    </td>
                                    <td>&#8377;{(Cars.price*Cars.qty).toFixed(2)}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>deleteCars(Cars.id)} > <i class="bi bi-trash3"></i> </button>
                                    </td>

                                </tr>
                            )
                        })
                        }
                        <tr>
                            <td colspan={4}></td>
                            <td>Grand Total</td>
                            <td>&#8377;{calGrandtotal().toFixed(2)}</td>
                        </tr>
                    </tbody>
                    </table> 
            </div>
            </div>

    </div>
    </>
)
}
export default CrudTable;