import React, { useState } from "react"
import axios from "axios";

import { useNavigate } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";

export default function InsuranceCompany(){


  const navigate = useNavigate()
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  function sendData(e){
   e.preventDefault();
   
   const newInsurance={
     name,
     phone,
     email,
     password,
   
   }

  

   axios.post("http://localhost:8070/insuranceCompany/add",newInsurance).then(()=>{
     alert("Form Submitted")
     navigate("/InsuranceCompany-ClaimManagement")
    
 
   
   }).catch((err)=>{
     alert(err)
   })
  }
        return (
          <div>
          <div class="const" style={{height:"1000px"}}>
            <UserHeader/>
            <div class="container1000" style={{width:"800px"}}>

<h1 style={{marginLeft:"-120px"}}>Company Registration</h1>
<form onSubmit={sendData}>
<div class="form-group1190" >
          <label for="name" style={{marginLeft:"-500px"}}>Name</label>
          <input type="text" className="form-control" id="name" style={{marginLeft:"-500px",width:"700px"}} maxLength={20} placeholder="Enter Company Name" required="true" onChange={(e)=>{
            setName(e.target.value);
          }} />
        

       
          <label for="email" style={{marginLeft:"-500px"}}>E-mail</label>
          <input type="email" className="form-control" id="email"  style={{marginLeft:"-500px",width:"700px"}} maxLength={30}placeholder="Enter E-mail" required="true" onChange={(e)=>{
            setEmail(e.target.value);
          }}/>


          <label for="password" style={{marginLeft:"-500px"}}>Password</label>
          <input type="password" className="form-control" id="password"  style={{marginLeft:"-500px",width:"700px"}} placeholder="Enter Password" required="true" onChange={(e)=>{
            setPassword(e.target.value);
          }}/>
       

       <label for="phone"  style={{marginLeft:"-500px"}}>Phone</label>
          <input type="text" className="form-control" id="phone"  style={{marginLeft:"-500px",width:"700px"}} maxLength={30}placeholder="Enter Phone" required="true" onChange={(e)=>{
            setPhone(e.target.value);
          }}/>

       

  </div>

  <div id="button2">
        <button type="submit" className="btn-submit115">Register</button>
       </div>
       
       </form>     
            </div>
          
          </div>
          <UserFooter/>
          </div>
        );
      }
