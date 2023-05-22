import "./HotelOwnerHeader.css";
import React from "react";
import { Link } from "react-router-dom";
import userlogo from "../img/userlogo.png"

export default function UserSideBar(){

    
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
                        <img src={userlogo} className="sideBar-img" style={{width:"300px",marginLeft:"-16%"}}/>
                    
                    <li className="nav-item11" style={{marginTop:'25px',color:"black"}}>
                        <Link to="/UserProfile" className="nav-link" style={{color:'black',transition: 'color 0.3s'}}>Edit Profile</Link>
                    </li>
                    <li className="nav-item3">
                        <Link to="/ReservedRooms" className="nav-link" style={{color:'black',transition: 'color 0.3s'}}>Reserved Rooms</Link>
                    </li>
                    <li className="nav-item3" >
                        <Link to="/hotelOwner/addRoom" className="nav-link" style={{color:'black',transition: 'color 0.3s'}}>Booked Vechicles</Link>
                    </li>
                    <li className="nav-item3" >
                        <Link to="/hotelOwner/checkIn" className="nav-link" style={{color:'black',transition: 'color 0.3s'}}>Event and Outdoor activity</Link>
                    </li>
                    <li className="nav-item3" >
                        <Link to="/hotelOwner/checkIn" className="nav-link" style={{color:'black',transition: 'color 0.3s'}}>Booked Tour Guids</Link>
                    </li>
                    <li className="nav-item3" >
                        <Link to="/InsuranceUser" className="nav-link" style={{color:'black',transition: 'color 0.3s'}}>Insurance</Link>
                    </li>
                    <li className="nav-item3" >
                        <Link to="/hotelOwner/checkIn" className="nav-link" style={{color:'black',transition: 'color 0.3s'}}>Payment</Link>
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