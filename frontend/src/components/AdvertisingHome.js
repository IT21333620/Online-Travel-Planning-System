import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import "./AdvertisingHome.css";
import axios from "axios";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter"

export default function AdvertisingHome(){

        return (
        <div>

            <UserHeader/>

         <div id="AdHome">
          <h1>ADVERTISING</h1>
          <h3><br/><br/><br/><br/><br/><br/><br/><br/>Take your business to the next level...</h3>
          <br/><br/><br/><br/><br/><br/>
          <Link to = "/advertiserProfile" className="AdbttnNext" style = {{width:"220px", textDecoration:"none",marginLeft:"200px",backgroundColor:"lightblue"}}>
                    VIEW PROFILE
            </Link>

          </div>

          <div className = "Adhomebg">
          
          <div>
            <img src="../images/AdHomesub.png" style={{display: "inline", verticalAlign: "middle", width:"800px"}} ></img>
            <h3 style={{display: "inline",color:"#191970"}}>"Making a Revolution in Your Business is our Business"</h3>

            <h3 className="Ad-heading2"><br/><br/>SEE THE RESULTS YOU WANT..</h3>
            <Link to = "/register" className="AdbttnNext" style = {{width:"220px", textDecoration:"none"}}>
                    GET STARTED
            </Link>

        </div>


          </div>
        <UserFooter/>
</div>
          )
}