import "./HotelOwnerHeader.css";
import React from "react";
import { Link } from "react-router-dom";
import hotelOwner from "../img/hotelOwner.jpg"


export default function HotelOwnerHeader(){

    function handleLogout() {
       
        sessionStorage.removeItem('userId');
        window.location.href = '/';
    }

    return(
        <div className="bd-container">
            <div className="left-nav">

                <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav-bar">
                        <img src={hotelOwner} className="HOwner-img"/>
                    
                    <li className="nav-item11" style={{marginTop:'100px',color:"black"}}>
                        <Link to="/hotelOwner/home" className="nav-link" style={{color:'black',transition: 'color 0.3s'}}>Edit Details</Link>
                    </li>
                    <li className="nav-item2">
                        <Link to="/hotelOwner/Report" className="nav-link" style={{color:'black',transition: 'color 0.3s'}}>Genrate Report</Link>
                    </li>
                    <li className="nav-item2" >
                        <Link to="/hotelOwner/addRoom" className="nav-link" style={{color:'black',transition: 'color 0.3s'}}>Add New Rooms</Link>
                    </li>
                    <li className="nav-item2" >
                        <Link to="/hotelOwner/checkIn" className="nav-link" style={{color:'black',transition: 'color 0.3s'}}>Who's Check In</Link>
                    </li>
                    
                    <Link to="/logout" className="navlogout" onClick={handleLogout}>Logout</Link>
                    </ul>
                </div>
            </div>
        </nav>
            </div>
            
        </div>

    )
}