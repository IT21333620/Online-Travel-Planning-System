import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import "./VehicleReserveUpdate.css";



export default function VehicleReserve(){

    
    const{id}=useParams();
    
   const [firstName,setFirstName]=useState("");
   const [lastName,setLastName]=useState("");
   const [mobile,setMobile]=useState("");
   const [email,setEmail]=useState("");
   
   
   useEffect(() =>{

    
        axios.get(`http://localhost:8070/vehicleReserve/get/${id}`).then((response)=> {
           
            const insurance = response.data;
            setFirstName(insurance.firstName);
            setLastName(insurance.lastName);
            setMobile(insurance.mobile);
            setEmail(insurance.email);
            console.log(response.data);
          });
        }, [id]);
  

const handleSubmit = (e) =>{

    e.preventDefault();
    const updateVehReserve = {
        firstName,
        lastName,
        mobile,
        email,
    };
    
        axios
            .put(`http://localhost:8070/vehicleReserve/update/${id}`, updateVehReserve)
            .then((response) => {
            console.log(response.data);
            alert("Successfully updated")
            // show success message or redirect to another page
            })
            .catch((error) => {
            console.log(error);
            // show error message
            });
};


    return(
        
        <div className = "body">
        <form onSubmit={handleSubmit}>
            <div className = "form">
                
                <p id = "veh-reg-text3">First Name:  
                    <input type = "textbox" className = "veh-reg-fname" value={firstName}
                    onChange={(e)=>{
                        setFirstName(e.target.value);
                    }}/>
                </p>

                <p id = "veh-reg-text4">Last Name:  
                    <input type = "textbox" className = "veh-reg-lname" value={lastName}
                    onChange={(e)=>{
                        setLastName(e.target.value);
                    }}/>
                </p>

                <p id = "veh-reg-text5">Mobile:  
                    <input type = "textbox" className = "veh-reg-mobile" value={mobile}
                    onChange={(e)=>{
                        setMobile(e.target.value);
                    }}/>
                </p>

                <p id = "veh-reg-text6">Email:  
                    <input type = "textbox" className = "veh-reg-email" value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}/>
                </p>

                <button className = "btn" id = "btn2">Update</button>
            </div>
        </form>
        </div>
        
        
    )
}