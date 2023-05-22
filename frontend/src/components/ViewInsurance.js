import React from "react";
import "./ViewInsurance.css";
import { Link } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";

export default function ViewInsurance(){

        return (
          <div> <UserHeader/>
          <div class="login-form-wrap118">
           
            <h2>Did You Fill the Application Form?</h2>
            <img class="ahah"></img>
            
              <p>
              <Link to="/InsuranceMain">
                <button>Yes</button>
                </Link>
              </p>
            
           
 
            
       
            <div id="create-account-wrap118">
              <p>Still not?    <a href="/InsuranceApplicationForm"> Fill the form</a></p>
            </div>
          </div>
          <UserFooter/>
          </div>
         
        );
      }
