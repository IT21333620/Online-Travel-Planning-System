import React, { useState } from "react";
import axios from "axios";
import "./InsuranceApplicationForm.css";
import { useNavigate } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";

export default function InsuranceApplicationForm(){
  const navigate = useNavigate()
   const [name,setName]=useState("");
   const [phone,setPhone]=useState("");
   const [age,setAge]=useState("");
   const [address,setAddress]=useState("");
   const [email,setEmail]=useState("");
   const [gender,setGender]=useState("");

   function sendData(e){
    e.preventDefault();
    
    const newInsurance={
      name,
      phone,
      age,
      address,
      email,
      gender
    }

   

    axios.post("http://localhost:8070/insurance/add",newInsurance).then(()=>{
      alert("Form Submitted")
      navigate("/InsuranceMain")
     
  
    
    }).catch((err)=>{
      alert(err)
    })
   }
    
      return (
        <div> <UserHeader/>
        <div class="login-form-wrap119">
         
            <br></br>
             <h1 class="heading">Application Form</h1>
        <div>
        <form onSubmit={sendData}>
        <div class="form-group119">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name"  style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '8px',
        fontSize: '16px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s ease-in-out'}} maxLength={20}  placeholder="Enter Name" required="true" onChange={(e)=>{
            setName(e.target.value);
          }}/>
        </div>
        
        <div class="form-group119">
          <label for="phone">Phone Number</label>
          <input type="text" className="form-control" id="phone"  style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '8px',
        fontSize: '16px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s ease-in-out'}} required pattern="[0-9]{10}" placeholder="Enter Phone Number"  onChange={(e)=>{
            setPhone(e.target.value);
          }}/>
        </div>

        <div class="form-group119">
          <label for="age">Age</label>
          <input type="number" className="form-control" id="age"   style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '8px',
        fontSize: '16px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s ease-in-out'}} maxLength={10} required pattern="[0-9]{3}" placeholder="Enter Age" onChange={(e)=>{
            setAge(e.target.value);
          }}/>
        </div>

        <div class="form-group119">
          <label for="address">Address</label>
          <input type="text" className="form-control" id="address"  style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '8px',
        fontSize: '16px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s ease-in-out'}} maxLength={40}  placeholder="Enter Address" required="true" onChange={(e)=>{
            setAddress(e.target.value);
          }}/>
        </div>


        <div class="form-group119">
          <label for="email">E-mail</label>
          <input type="email" className="form-control" id="email"  maxLength={30} placeholder="Enter Email" required="true" onChange={(e)=>{
            setEmail(e.target.value);
          }}/>
        </div>



        
       
        
 

        <div class="form-group119">
  <label>Gender</label>
  <select class="gender" id="gender119"onChange={(e)=>{
            setGender(e.target.value);
          }} >
    <option selected>Choose...</option>

    <option value="male">Male</option >

    <option value="female">Female</option>
  </select>
  </div>
     
  
    <div id="button1">
        <button type="reset" className="btn-reset119"> Reset </button>
        </div>

       
        <div id="button2">
        <button type="submit" className="btn-submit119">Submit</button>
       </div>
       
     
       
        </form>
      </div>
      </div>

      <UserFooter/>
      </div>
      );
    }
      
