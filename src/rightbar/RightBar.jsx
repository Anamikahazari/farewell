import './rightbar.css'
import React, {useState} from 'react';

export default function Rightbar(props) {
    let [count,setCount] =  useState(0);
    const setdatacount=(e)=>{
        setCount(prevCount=>prevCount+1)
    }
    return (
        <div className="  rightBar">
             Memories
            <div className=" relative">
                 {props.messagedata.map((message) => (
                <div className="text-lg bg-red-200 w-full text-blue-500 pb-5 border-2"  onChange={setdatacount}>
                    {message}
                    <div className="absolute top-0 right-0">{props.timeto[count]}</div>
                    {/* <div>{props.name}</div> */}
                </div>
                 ))}
                 {/* {props.timeto.map((time)=>(
                 <div className="absolute top-0 right-0">{time}</div>
                 ))} */}
            </div>
        
          
        </div>
    )
}
