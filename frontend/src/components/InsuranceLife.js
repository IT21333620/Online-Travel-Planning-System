import React from "react";
import "./InsuranceLife.css";
import { Link } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";

export default function InsuranceLife(){

        return (
          <div>
             <UserHeader/>
            <div class="container800" style={{height:"1600px"}} >
            <img class="img900"></img>
            <h1 >Life Insurance</h1>
            <p>What Is Life Insurance?
Life insurance is a contract between a life insurance company and a policy owner. A life insurance policy guarantees the insurer pays a sum of money to one or more named beneficiaries when the insured person dies in exchange for premiums paid by the policyholder during their lifetime.

Key Takeaways
Life insurance is a legally binding contract that pays a death benefit to the policy owner when the insured person dies.
For a life insurance policy to remain in force, the policyholder must pay a single premium upfront or pay regular premiums over time.
When the insured person dies, the policy’s named beneficiaries will receive the policy’s face value, or death benefit.




</p>
<h3>Types of insurance Plans</h3>
<p1 class ="plans100">

1.Investment Plans - $100<br></br><br></br>

Your short-term goals are just as important as those in the long term and it is pivotal that you have the financial backing to achieve them. <br></br><br></br><br></br>

 2. Group Plans - $120<br></br><br></br>

In addition to our individual life insurance plans, we provide group insurance solutions to ensure that you are set to achieve both your corporate goals and your larger dream of building a good life for yourself.
</p1>
<Link to ="/InsurancePlanApply">
<button>Apply</button>
</Link>




          </div>
          <UserFooter/>
          </div>
        );
      }
