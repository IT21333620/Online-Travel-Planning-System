import React, { useState } from "react";
import axios from "axios";
import "./InsuranceClaim.css";
import { useNavigate } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";

export default function InsuranceClaim(){

   const navigate = useNavigate()
   const [name,setName]=useState("");
   const [email,setEmail]=useState("");
   const [phone,setPhone]=useState("");
   const [date,setDate]=useState("");
   const [plan,setPlan]=useState("");
   const [nic,setNIC]=useState("");
   const [insurance,setInsurance]=useState("");
   const [description,setDescription]=useState("");
   
   function sendData(e){
    e.preventDefault();
    
    const newInsurance={
      name,
      email,
      phone,
      date,
      nic,
      plan,
      description

     
    }
    axios.post("http://localhost:8070/insuranceClaim/add",newInsurance).then(()=>{
      alert("Form Submitted")
      navigate("/InsuranceMain")
    
    }).catch((err)=>{
      alert(err)
    })
   }
    
      return (
       <div>
        <UserHeader/>
        <div class="login-form-wrap150" >
            <br></br>
             <h1 class="heading">Claim Application</h1>
        <div>
        <form onSubmit={sendData}>
        <div class="form-group150">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name"   style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '8px',
        fontSize: '16px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s ease-in-out'}} placeholder="Enter Name" required="true"   onChange={(e)=>{
            setName(e.target.value);
          }}/>
        </div>
        
        <div class="form-group150">
          <label for="email">Email</label>
          <input type="email" className="form-control" id="email"  style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '8px',
        fontSize: '16px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s ease-in-out'}}
           maxLength={30} placeholder="Enter E-mail" required="true" onChange={(e)=>{
            setEmail(e.target.value);
          }}/>
        </div>

        <div class="form-group150">
          <label for="phone">Phone Number</label>
          <input type="text" className="form-control" id="phone"  required pattern="[0-9]{10}" style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '8px',
        fontSize: '16px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s ease-in-out'}} maxLength={12} minLength={10} placeholder="Enter Phone Number"  onChange={(e)=>{
            setPhone(e.target.value);
          }}/>
        </div>

        <div class="form-group150">
          <label for="date">Date</label>
          <input type="date" className="form-control" id="date"  placeholder="Enter Date" required="true" onChange={(e)=>{
            setDate(e.target.value);
          }}/>
        </div>


        <div class="form-group150">
          <label for="nic">NIC</label>
          <input type="text" className="form-control" id="nic"  style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '8px',
        fontSize: '16px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s ease-in-out'}} required pattern="[0-9]{12}" placeholder="Enter NIC"  onChange={(e)=>{
            setNIC(e.target.value);
          }}/>
        </div>

               
  <label class="plan1234">Plan</label>
  <select class="plan"   required="true" id="plan" onChange={(e)=>{
            setPlan(e.target.value);
          }}>
    <option selected> </option>

    <option value="Life Insurance - Investment Plan">Life Insurance - Investment Plan</option >
    <option value="Life Insurance - Group Plan">Life Insurance - Group Plan</option >
    <option value="Health Insurance - Investment Plan">Health Insurance - Investment Plan</option >
    <option value="fHealth Insurance - Investment Plan">Health Insurance - Investment Plan</option>
  </select>

        <div class="form-group150">
          <label for="description">Description</label>
          <textarea className="form-control" id="dsecription" placeholder="Enter Description" required="true" onChange={(e)=>{
            setDescription(e.target.value);
          }}></textarea>
        </div>

    
  
    <div id="button1">
        <button type="reset" className="btn-reset150"> Reset </button>
        </div>

       
        <div id="button2">
        <button type="submit" className="btn-submit150">Submit</button>
       </div>
       
     
       
        </form>
      </div>
      </div>
      <UserFooter/>
      </div>
      );
    }
      
