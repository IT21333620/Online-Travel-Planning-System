import React, { useState } from "react";
import testimg from "../img/testImg.png";
import axios from "axios";
import "./testEditReservation.css";



export default function VehicleReserve(){

   const [from,setFrom]=useState("");
   const [to,setTo]=useState("");
   const [firstName,setFirstName]=useState("");
   const [lastName,setLastName]=useState("");
   const [mobile,setMobile]=useState("");
   const [email,setEmail]=useState("");

    function sendData(e){
        e.preventDefault();
        const newReservation = {
            from,
            to,
            firstName,
            lastName,
            mobile,
            email
        }
        axios.post("http://localhost:8070/vehicleReserve/add",newReservation).then(()=>{
            setFrom("");
            setTo("");
            setFirstName("");
            setLastName("");
            setMobile("");
            setEmail("");
    
    }).catch((err)=>{
      alert(err)
    })
        
    }


    return(
        
        <div className = "body">
            <div>
            <img src={testimg} id = "img" alt="vehicle" />
        </div>

        <form onSubmit={sendData}>
            <div className = "form">
                <p className = "text">From: 
                <input type = "date" className = "box" id = "date" required 
                onChange={(e)=>{
                    setFrom(e.target.value);
                }}/></p>

                <p className = "text"  id = "toBox">To: 
                <input type = "date" className = "box" id = "date" required
                onChange={(e)=>{
                    setTo(e.target.value);
                }}/></p>

                <p id = "text3">First Name:  
                    <input type = "textbox" className = "box"
                    onChange={(e)=>{
                        setFirstName(e.target.value);
                    }}/>
                </p>

                <p id = "text3">Last Name:  
                    <input type = "textbox" className = "box"
                    onChange={(e)=>{
                        setLastName(e.target.value);
                    }}/>
                </p>

                <p id = "text3">Mobile:  
                    <input type = "textbox" className = "box"
                    onChange={(e)=>{
                        setMobile(e.target.value);
                    }}/>
                </p>

                <p id = "text3">Email:  
                    <input type = "textbox" className = "box"
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}/>
                </p>

                <button className = "btn" id = "btn1">Pay</button>
                <button className = "btn" id = "btn2">Cancel</button>
            </div>
        </form>
        </div>
        
        
    )
}