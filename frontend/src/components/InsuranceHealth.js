import React from "react";
import "./InsuranceHealth.css";
import { Link } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";

export default function InsuranceHealth(){

        return (
          <div>
             <UserHeader/>
            <div class="container800" style={{height:"1600px"}} >
            <img class="img800"></img>
            <h1 >Health Insurance</h1>
            <p>No one plans to fall ill or get hurt, but a serious illness can strike anyone at any time. The cost of treating the illness can cause severe financial strain on the savings you have accumulated over time. This means that you might have to compromise on providing your child the best quality education or defaulting on your home loan payments. Today, the cost of medical treatment is continuously rising.For e.g., Herceptin, a cancer medicine costs approximately  1,10,000 for a vial of 440 mg. Depending on the weight, a patient usually requires 17-19 bottles for treatment over a year . That's  18 - 20 lakh just for the medicine~. Then add hospitalisation costs, doctor consultation fees, chemotherapy costs, etc. and your overall expenses could exceed 25 lakhs. These costs which are already very high are increasing every year.



</p>
<h3>Types of insurance Plans</h3>
<p1 class ="plans100">

1. Mediclaim Plans - $80<br></br><br></br>

Mediclaim or hospitalisation plans are the most basic type of health insurance plans. They cover the cost of treatment when you are admitted to the hospital. <br></br><br></br><br></br>

 2. Critical Illness Plans - $100<br></br><br></br>

 Critical Illness Insurance Plans cover specific life-threatening diseases. These diseases could require prolonged treatment or even change in lifestyle. Unlike hospitalisation plans, the payout is made on Critical Illness cover chosen by the customer and not on actual expenses incurred in the hospital
</p1>

<Link to ="/InsurancePlanApply">
<button class="apply">Apply</button>
</Link>




          </div>
          <UserFooter/>
          </div>
        );
      }
