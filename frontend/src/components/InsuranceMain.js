import React, { useState } from "react"
import "./InsuranceMain.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserHeader from "./UserHeader";
import Ilogo from "../img/InsuranceLogo.png"
import UserFooter from "./UserFooter";

export default function InsuranceMain(){


  const navigate = useNavigate()
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [feedback,setFeedback]=useState("");
  const [ratings,setRatings]=useState("");
 

  function sendData(e){
   e.preventDefault();
   
   const newInsurance={
     name,
     email,
     feedback,
     ratings,
    
   }

  

   axios.post("http://localhost:8070/insuranceFeedback/add",newInsurance).then(()=>{
     alert("Form Submitted")
     window.location.reload();
    
 
   
   }).catch((err)=>{
     alert(err)
   })
  }

        return (
        <div>
<UserHeader/>
         <div class="home120" >
          <h1 class="head4321">Ceylon Insurance Company</h1>
          <p>We live with your life and security of your lovered ones...</p>
          <br></br><br></br>
          <img src={Ilogo} className="IOwneress-img"/>
         
            <a class="blue123" href ="/InsuranceContact">Contact</a>
          </div>
          

          <div style={{height:"4300px"}} >
            <h1 class="abouth">About US</h1>
            <p class="aboutp">An insurance company is a type of financial institution that provides insurance policies to individuals and businesses in exchange for premiums. Insurance policies are contracts that provide financial protection against specific risks, such as damage to property, illness, injury, or death. When an individual or business purchases an insurance policy, they pay a premium to the insurance company in exchange for the promise of financial protection against the specified risks. If an insured event occurs, the insurance company pays out a benefit to the policyholder to cover the costs of the losses incurred. Insurance companies typically offer a wide range of insurance products, including health insurance, auto insurance, home insurance, life insurance, and business insurance.</p>
            <img class="img100"></img>
            <Link to ="/InsuranceAboutUs">
            <button class="button100">View More</button>
            </Link>
            </div>

            <div>
            <h1 class="claimh">Our Process</h1>
            <p class="claimp">Our licensed public adjusters are equipped with the latest technology in the industry. From the initial outreach to the settlement, we are leveraging our resources to streamline the process in the most professional and timely manner. We utilize Matterport cameras to create 3-D renditions of the property and its accompanying rooms. After gathering the proper photos and measurements, we input the data into our estimating software to formulate a precise estimate on the value of damage that has occurred. Next, we thoroughly analyze and inspect your insurance policy. After the evidence gathering, estimating, and analyzing processes are complete, we will negotiate the claim on your behalf. All our public adjusters are university educated and certified by the state to adjust your claim to its proper value.</p>
            <img class="img200"></img>
            <Link to ="/InsuranceClaim">
            <button class="button200">File Claim</button>
            </Link>
            </div>



            <div class="container100">
              <h3>Insurance Types</h3>

              
                <h4 class="life">Life Insurance</h4>
              
                <img class="img300"></img>
              
                <Link to="/InsuranceLife">
                <button class="button300">View</button>
                </Link>
               

                
                <h4 class="health">Health Insurance</h4>
                
                <img class ="img400"></img>
                
                <Link to="/InsuranceHealth">
                <button class="button400">View</button>
                </Link>
                </div>
              


              <div class="container200">
              <h3 class="itypes">Never Miss A Feedback</h3>

            <form onSubmit={sendData}>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name" maxLength={20} placeholder="Enter Name" required="true"onChange={(e)=>{
            setName(e.target.value);
          }}/>
        </div>

        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" className="form-control" id="email" maxLength={30} placeholder="Enter E-mail" required="true"onChange={(e)=>{
            setEmail(e.target.value);
          }} />
        </div>

        <div class="form-group">
          <label for="feedback">Feedback</label>
          <input type="text" className="form-control" id="feedback" maxLength={60} placeholder="Enter Feedback" required="true"onChange={(e)=>{
            setFeedback(e.target.value);
          }}/>
        </div>

        <div class="form-group">
      <label>Ratings</label>
  <select class="ratings"  required="true" id="ratings"onChange={(e)=>{
            setRatings(e.target.value);
          }}>
    <option selected value="good">Good</option>

    <option value="bad">Bad</option >

    <option value="excellent">Excellent</option>
  </select>
  </div>

 
        <button type="submit" className="button500">Submit</button>
      
        </form>    

  </div>


            <div class="container300">
              <h3 class="itypes">Our Mission</h3>
              <p class="con3p">To provide reliable, innovative and customer friendly insurance services through state of the art technology</p>
              
            </div>

            <div class="container400">
              <h3 class="itypes">Our Vision</h3>
              <p class="con4p">To be the most technologically advanced, innovative and customer friendly insurance service provider in South Asia.</p>
              <br></br>
              <br></br>
            </div>

            <h3 class="rewards00">Rewards and Recognition</h3>
           
                <img class="reward100"></img>
               
           <img class="reward200"></img>


          
        
           <UserFooter/>
         </div>
         
        );
      }