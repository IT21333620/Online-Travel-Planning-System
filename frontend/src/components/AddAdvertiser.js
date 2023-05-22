import React, { useState } from "react"
import axios from "axios"
//import { Carousel } from 'react-bootstrap';
import styles from '../styles/registerAdvertiser.css'
import UserHeader from "./UserHeader";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddAdvertiser() {

   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [company, setCompany] = useState("");
   const [email, setEmail] = useState("");
   const [address, setAddress] = useState("");
   const [contactWork, setContactWork] = useState("");
   const [contactMobile, setContactMobile] = useState("");
   const [password, setPassword] = useState("");
   const [reEnteredPassword, setReEnteredPassword] = useState("");

   const [errorMessage, setErrorMessage] = useState("");
   const [contactWorkError, setContactWorkError] = useState("");
   const [contactMobileError, setContactMobileError] = useState("");

   function sendData(e) {
    e.preventDefault();

    const passwordError = validatePassword(password);
    const reEnteredPasswordError = validateReEnteredPassword(password, reEnteredPassword);
    const contactWorkError = validateContact(contactWork);
    const contactMobileError = validateContact(contactMobile);

    if (passwordError || reEnteredPasswordError || contactWorkError || contactMobileError) {
        // Passwords do not meet the criteria, display error message
        setErrorMessage(passwordError || reEnteredPasswordError);
        setContactWorkError(contactWorkError);
        setContactMobileError(contactMobileError);
        return;
    }
    
    const newAdvertiser = {
        fname,
        lname,
        company,
        email,
        address,
        contactWork,
        contactMobile,
        password,
        reEnteredPassword
    }

    axios.post("http://localhost:8070/advertiser/add", newAdvertiser).then(() => {
        
    Swal.fire({
        icon: 'success',
        title: 'Successfully registered!',
        showConfirmButton: true,
        confirmButtonText: 'Confirm',
      }).then(() => {
        // Redirect to another page
        window.location.href = "/";
      });

        
    }).catch((err) => {
        alert(err)
    })

   }
  
    const handlePasswordChange = (e) => {
      const passwordValue = e.target.value;
      setPassword(passwordValue);
      setErrorMessage(validatePassword(passwordValue));
    };

    const validatePassword = (password) => {
        if (password.length < 8) {
          return "Password must be at least 8 characters long.";
        }
    
        return "";
    };

    const validateReEnteredPassword = (password, reEnteredPassword) => {
    if (password !== reEnteredPassword) {
        return "Passwords do not match.";
    }
    return "";
    };

    const validateContact = (contact) => {
        const pattern = /^[0-9-]{10}$/;
        if (!pattern.test(contact)) {
            return "Invalid contact number.";
        }
        return "";
    };

    return (
          <div style={{backgroundColor:"#E6E6EE",height: "980px",width : "1519px" }}>
            <UserHeader/>
          <div className="container" style={{backgroundColor:"white",width : "1000px",marginLeft: "18%",
    arginRight: "8%",height: "850px", borderRadius: "10px", marginTop:"30px"}}>
            <h3 className = "titleStyle"><br/>ADVERTISER REGISTRATION FORM</h3>
            <form onSubmit = {sendData}>
                <div class="form-group">
                    <label for="name">Name</label>
                      <div class="row">
                        <div class="col">
                            <input type="text" style = {{width:"475px",height:"40px",borderColor:"lightgray"}} class="form-control" placeholder="First name" onChange = {(e) => {
                                setFname(e.target.value);
                            }} reqired/><br/>

                        </div>
                        <div class="col">
                            <input type="text" style = {{width:"475px",height:"40px",borderColor:"lightgray"}} class="form-control" placeholder="Last name" onChange = {(e) => {
                                setLname(e.target.value);
                            }} reqired/><br/>
                        </div>
                     </div>
                </div>

                <div class="form-group">
                    <label for="company">Company</label>
                    <input type="text" class="form-control" id="company" placeholder="Company name or individual" style={{width:"975px",height:"40px",borderColor:"lightgray"}} onChange = {(e) => {
                                setCompany(e.target.value);
                            }} reqired/><br/>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" style={{width:"975px",height:"40px",borderColor:"lightgray"}} placeholder="sample@example.com" onChange = {(e) => {
                                setEmail(e.target.value);
                            }} reqired/><br/>
                </div>

                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" style={{width:"975px",height:"40px",borderColor:"lightgray"}} placeholder="Enter address" onChange = {(e) => {
                                setAddress(e.target.value);
                            }} reqired/><br/>
                </div>

                <div class="form-group">
                    <label for="contactNo">Contact No</label>
                      <div class="row">
                        <div class="col">
                            <input type="text" style = {{width:"475px",height:"40px",borderColor:"lightgray"}} class="form-control" placeholder="Work" onChange = {(e) => {
                                setContactWork(e.target.value);
                            }} reqired/>{contactWorkError && <p style= {{color:"red"}} className="error-message">{contactWorkError}</p>}<br/>
                        </div>
                        <div class="col">
                            <input type="text" style = {{width:"475px",height:"40px",borderColor:"lightgray"}} class="form-control" placeholder="Mobile" onChange = {(e) => {
                                setContactMobile(e.target.value);
                            }} reqired/>{contactMobileError && <p style= {{color:"red"}} className="error-message">{contactMobileError}</p>}<br/>
                        </div>
                     </div>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" style={{width:"975px",height:"40px",borderColor:"lightgray"}} placeholder="Enter password" onChange = {(e) => {
                        handlePasswordChange(e);
                        setPassword(e.target.value);
                    }}  reqired/><br/>
                        <p style={{color:"red"}}>{errorMessage}</p>
                </div>

                <div class="form-group">
                    <label for="reEnteredPassword">Re-Enter Password</label>
                    <input type="password" class="form-control" id="reEnteredPassword" style={{width:"975px",height:"40px",borderColor:"lightgray"}} placeholder="Re-enter password" onChange = {(e) => {
                                setReEnteredPassword(e.target.value);
                            }} reqired/><br/>
                </div>

                <div className = "btns">
                    
                <button type="submit" className = "register">Register</button>
                {/* <Link to = "/advertiserProfile/:advertiserId" className = "register">Register</Link> */}
                <h6>Already have an account?
                <Link to = "/" className = "signin">SIGN IN</Link></h6>
                {/* // <button type="submit" className = "signin">SIGN IN</button></h6> */}
                </div>

            </form>
        </div>
        </div>
    )
}