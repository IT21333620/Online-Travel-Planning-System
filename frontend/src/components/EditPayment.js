import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/registerAdvertiser.css";
import Swal from "sweetalert2";

export default function EditPayment() {
  const{id}=useParams();
  const navigate = useNavigate()
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [address,setAddress]=useState("");
  const [email,setEmail]=useState("");

  
  
  useEffect(() =>{

   
       axios.get(`http://localhost:8070/payment/get/${id}`).then((response)=> {
          
           const payment = response.data;
           setName(payment.name);
           setPhone(payment.phone);
           setAddress(payment.address);
           setEmail(payment.email);
           console.log(response.data)
 
         });
       }, [id]);
 



const handleSubmit = (e) =>{

   e.preventDefault();
   const updatePayment = {
       name,
       phone,
       address,
       email,
   };
   
   axios
   .put(`http://localhost:8070/payment/update/${id}`, updatePayment)
   .then((response) => {
     console.log(response.data);
     navigate("/AdminManagePayment")
     alert("Successfully updated")
     // show success message or redirect to another page
   })
   .catch((error) => {
     console.log(error);
     // show error message
   });
};

return (
  <div style={{backgroundColor:"#E6E6EE",height:"900px",position:"absolute"}}>
  <div className="container" style={{backgroundColor:"white",width : "1000px",marginLeft: "30%",marginRight: "10%", borderRadius: "10px",height:"600px",marginTop:"30px"}}>
        
      <h3 className="titleStyle" style = {{marginLeft: "10px"}}><br />Payment Details Update</h3>

      <div style = {{paddingLeft:"50px", paddingRight:"50px", marginLeft:"2px", marginRight: "2px"}}>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
              <label htmlFor="email">Name</label>
              <input type="text" className="form-control" style={{width:"870px",height:"40px",borderColor:"lightgray"}} id="name" required="true" value={name} onChange={(e) => setName(e.target.value)} /><br/>
          </div>
          <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" style={{width:"870px",height:"40px",borderColor:"lightgray"}} id="email"  required="true"  defaultValue={email}onChange={(e) => setEmail(e.target.value)}/> <br/>
          </div>

          <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" className="form-control"  style={{width:"870px",height:"40px",borderColor:"lightgray"}} id="address"  required="true"   defaultValue={address} onChange={(e) => setAddress(e.target.value)} /><br/>
          </div>

          <div className="form-group">
              <label htmlFor="address">Phone</label>
              <input type="text" className="form-control"  style={{width:"870px",height:"40px",borderColor:"lightgray"}} id="phone"  required="true"   defaultValue={phone} onChange={(e) => setPhone(e.target.value)}/><br/>
          </div>
          <br/>
          <button type="submit" className="btn-submit1190" onClick={handleSubmit }>Update</button>
          </form>
      </div>
      </div>
      </div>
  )

}