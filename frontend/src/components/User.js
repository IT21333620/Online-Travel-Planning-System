import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./User.css";

export default function UserForm() {
  const navigate = useNavigate()
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newUser = {
      fname,
      lname,
      address,
      phone,
      email,
      password,
    };

    axios
      .post("http://localhost:8070/User/add", newUser)
      .then(() => {
        alert("Form Submitted");
        navigate("/")
      })
      .catch((err) => {
        alert(err);
      });
  }
    
    return (
        <div>
      <div className="User-Border" style={{ backgroundColor: "#e6e6ee",position:"absolute", height:"800px"}}>
        <div className="hotelAppr-cont" style={{paddingTop:"2%"}}>
        <form class="row g-3" onSubmit={sendData}>
        <h1 class="heading" style={{textAlign: 'center'}}>Regitration Form</h1>
        <div class="row g-3">
        <div className="row g-3">
                    <br/>
                    <label htmlFor="inputRname" className="cform-control">Enter First Name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="fname"  style={{ width: "100%" ,height:"40px"}} required
                    onChange={(e) =>{
                        setfname(e.target.value);}}/>
                    </div>
        </div>
        <div className="row g-3">
                    <br/>
                    <label htmlFor="inputRname" className="cform-control">Enter last Name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="fname" style={{ width: "100%" ,height:"40px"}} required
                    onChange={(e) =>{
                        setlname(e.target.value);}}/>
                    </div>
        </div>
        <div className="row g-3">
                    <br/>
                    <label htmlFor="inputRname" className="cform-control">Enter Address</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="address" style={{ width: "100%" ,height:"40px"}} required
                    onChange={(e) =>{
                        setaddress(e.target.value);}}/>
                    </div>
        </div>
        <div className="row g-3">
                    <br/>
                    <label htmlFor="inputRname" className="cform-control">Enter Phone</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="phone" style={{ width: "100%" ,height:"40px"}} required pattern="[0-9]{10}"
                    onChange={(e) =>{
                        setphone(e.target.value);}}/>
                    </div>
        </div>
        </div>
        <div className="row g-3">
                    <br/>
                    <label htmlFor="inputRname" className="cform-control">Enter Email</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="fname" style={{ width: "100%" ,height:"40px"}} required
                    onChange={(e) =>{
                        setemail(e.target.value);}}/>
                    </div>
        </div>
        <div className="row g-3">
                    <br/>
                    <label htmlFor="inputRname" className="cform-control">Enter Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="fname" style={{ width: "100%" ,height:"40px"}} required
                    onChange={(e) =>{
                        setpassword(e.target.value);}}/>
                    </div>
        </div>
       <div class="col-12">
         <button type="submit" className="primaryyy" style={{marginTop:'2%',marginBottom:'2%', marginLeft:'40%', background:'linear-gradient(90.72deg, #191970, rgba(25, 25, 112, 0.77))'}}>Registed Account</button>
  </div>
</form>
</div>
</div>
</div>
  )
}