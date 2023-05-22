import React, { useState } from "react";
import axios from "axios";
import "./PaymentForm.css";
import { useNavigate } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";
import { useParams } from "react-router-dom";


export default function PaymentForm(){
  const navigate = useNavigate()
   const [name,setName]=useState("");
   const [phone,setPhone]=useState("");
   const [Card,setCard]=useState("");
   const [address,setAddress]=useState("");
   const [civ,setciv]=useState("");
   const [email,setEmail]=useState("");
   const {item} = useParams();
   const {price} = useParams();
   const {user} = useParams();
   

   function sendData(e){
    e.preventDefault();
    
    const newPayment={
      name,
      phone,
      Card,
      address,
      email,
      civ
    }

   

    axios.post("http://localhost:8070/payment/add",newPayment).then(()=>{
      alert("Form Submitted")
      navigate("/Home")
     
  
    
    }).catch((err)=>{
      alert(err)
    })
   }
    
      return (
        <div> <UserHeader/>
        <div class="Payment-raw" style={{height:"1320px"}}>
            <br></br>
            <h1 class="heading" style={{textAlign: 'center'}}>Payment Form</h1>
        <div>
        <br></br> 
        <form onSubmit={sendData}>
        {/* <p>Item: {item}</p>
        <p>Price: {price}</p> */}
        <div class="form-payment">
          <label for="item">Item</label>
          <input type="item" class="form-control" value={item}  readOnly/>
        </div>
        <div class="form-payment">
          <label for="price">Price</label>
          <input type="price" class="form-control" value={price} readOnly/> 
        </div>
        {/* <h3 class="heading" style={{textAlign: 'center'}}>Enter Card Details</h3> */}
        <div class="form-payment">
          <label for="name">Name on Card</label>
          <input type="text" className="form-control" id="name" maxLength={20}  placeholder="Enter Name" required="true" onChange={(e)=>{
            setName(e.target.value);
          }}/>
        </div>
        <div class="form-payment">
          <label for="age">Credit card number</label>
          <input type="number" className="form-control" id="Card" number="10" placeholder="1111-2222-3333-4444" pattern="[0-9]{10}" required="true" onChange={(e)=>{
            setCard(e.target.value);
          }}/>
        </div>

        <div class="form-payment">
           <label>CVV</label>
          <input type="civ" className="form-control" id="civ"  maxLength={30} name="cvv" placeholder="352" required="true" onChange={(e)=>{
            setciv(e.target.value);
          }}/>
         </div> 

           <br></br>
            <h1 class="heading" style={{textAlign: 'center'}}>Contact Information</h1>

        <div class="form-payment">
          <label for="address">Address</label>
          <input type="text" className="form-control" id="address"  maxLength={40}  placeholder="Enter Address" required="true" onChange={(e)=>{
            setAddress(e.target.value);
          }}/>
        </div>


        <div class="form-group119">
          <label for="email">E-mail</label>
          <input type="email" className="form-control" id="email"  maxLength={30} placeholder="Enter Email" required="true" onChange={(e)=>{
            setEmail(e.target.value);
          }}/>
        </div>

        <div class="form-payment">
          <label for="phone">Phone Number</label>
          <input type="number" className="form-control" id="phone" maxLength={12} minLength={10} placeholder="Enter Phone Number" required="true" onChange={(e)=>{
            setPhone(e.target.value);
          }}/>
          </div>
        
        <div className="icon-container">
        <h4 class="heading" style={{textAlign: 'left'}}>Accept Payment</h4>
            <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
            <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
            <i className="fa fa-cc-mastercard" style={{ color: "red" }}></i>
             <i className="fa fa-cc-discover" style={{ color: "orange" }}></i>
        </div>

    {/* <div id="button1">
        <button type="reset" className="btn-reset119"> Reset </button>
        </div> */}

       
        <div id="button2">
        <button type="submit" className="btn-pay" value="Continue to checkout" >Continue to checkout</button>
       </div>
       
     
       
        </form>
      </div>
      </div>

      <UserFooter/>
      </div>
      );
    }
      