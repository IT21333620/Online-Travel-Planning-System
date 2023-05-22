import "./InsuranceOwnerHeader.css";
import React from "react";
import { Link } from "react-router-dom";
import Ilogo from "../img/InsuranceLogo.png"

export default function HotelOwnerHeader(){

    function handleLogout() {
       
        sessionStorage.removeItem('userId');
        window.location.href = '/';
    }
    return(
        <div className="bd-container">
            <div className="left-nav">

                <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav-bar">
                        <img src={Ilogo} className="IOwnere-img"/>
                        <h3 class="head111">Insurance Company</h3>
                    
                    <li className="nav-item11123" style={{marginTop:'100px'}}>
                        <Link to="/InsuranceCompany-PlanManagement" style={{color:"black"}} className="nav-link">Plan Managment</Link>
                    </li>
                    <li className="nav-item2123">
                        <Link to="/InsuranceCompany-ClaimManagement" style={{color:"black"}}  className="nav-link">Claim Management</Link>
                    </li>
                    <li className="nav-item3123" >
                        <Link to="/InsuranceCompany-FeedbackManagement" style={{color:"black"}} className="nav-link">Feedback</Link>
                    </li>
                    <li className="nav-item4123" >
                        <Link to="/InsuranceCompanyReport" className="nav-link" style={{color:"black"}}>Report</Link>
                    </li>
                    
                    <Link to="/logout" onClick={handleLogout} className="navlogout">Logout</Link>
                    </ul>
                </div>
            </div>
        </nav>
            </div>
            
        </div>

    )
}