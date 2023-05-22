import React, {useState, useEffect} from "react";
import "./UserFooter.css";
import flogo  from "../img/logo.jpg";
import { Link } from "react-router-dom";

export default function UpdateAdvertiser(props) {

  

return (
    <div className="container12344">

       

            <div id="rectangle13">
               <p id="p1">About Us</p>
               <p id ="p2">Tour Guide Services</p>
               <p id ="p3">Terms and Conditions</p>
               <p id ="p4">Privacy Policy</p>
               <p id ="p5">Payment Policy </p>
               <Link to="/adHome" id ="p6" style={{textDecoration:"none"}}>Advertising</Link>
             

          
               
               <img  className="imgilogo"src={flogo}></img>
               <p id ="p7">© All right reserved 2023</p>


<div class="ashen">
   <div class="i1">
               <i class="bi bi-facebook"></i>
               </div>
               <div class="i2">
               <i class="bi bi-instagram"></i>
               </div>
               <div class="i3">
               <i class="bi bi-twitter"></i>
               </div>
               <div class="i4">
               <i class="bi bi-linkedin"></i>
               </div>

               </div>


        </div>


</div>
    )
}