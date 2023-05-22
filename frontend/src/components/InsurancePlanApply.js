import React, { useState } from "react"
import axios from "axios";
import "./InsurancePlanApply.css";
import { useNavigate } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";

export default function InsurancePlanApply(){


  const navigate = useNavigate()
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [price,setPrice]=useState("");
  const [plan,setPlan]=useState("");
  const userId = sessionStorage.getItem('userId');

  function sendData(e){
   e.preventDefault();
   
   const newInsurance={
    userId:userId,
     name,
     phone,
     price,
     plan,
   
   }

  

   axios.post("http://localhost:8070/insuranceApply/add",newInsurance).then(()=>{
     alert("Form Submitted")
    }).then(() => {
      
        // Navigate to the payment form using window.location.href
        window.location.href = `/PaymentForm/${price}/${plan}`;
      
    
 
   
   }).catch((err)=>{
     alert(err)
   })
  }
        return (
          <div>
          <div class="const" style={{height:"1000px"}}>
            <UserHeader/>
            <div class="container1000" >

<h1>Apply Now</h1>
<img></img>
<form onSubmit={sendData}>
<div class="form-group1190" >
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name" maxLength={20} placeholder="Enter Name" required="true" onChange={(e)=>{
            setName(e.target.value);
          }} />
        

       
          <label for="phone">Phone Number</label>
          <input type="number" className="form-control" id="phone" required pattern="[0-9]{10}" placeholder="Enter Phone Number"  onChange={(e)=>{
            setPhone(e.target.value);
          }}/>
      

       
      <label for="price">Price</label>
<div style={{ display: "flex" }}>
  <span style={{fontSize:"20px"}}>$</span>
  <input
    type="number"
    className="form-control"
    id="price"
    maxLength={30}
    placeholder="Enter Price"
    required="true"
    onChange={(e) => {
      setPrice(e.target.value);
    }}
  />
</div>
       


       
  <label>Plan</label>
  <select class="plan"  required="true" id="plan" onChange={(e)=>{
            setPlan(e.target.value);
          }}>
    <option selected> </option>

    <option value="Investment Plan-$100">Investment Plan-$100</option >
    <option value="Group Plan-$120">Group Plan-$120</option >
    <option value="Mediclaim Plans-$80">Mediclaim Plans-$80</option >
    <option value="Critical Illness Plans-$100">Critical Illness Plans-$100</option>
  </select>
 
  </div>

  <div id="button2">
        <button type="submit" className="btn-submit115">Submit</button>
       </div>
       
       </form>     
            </div>
          
          </div>
          <UserFooter/>
          </div>
        );
      }
