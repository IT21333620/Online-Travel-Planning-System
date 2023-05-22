import "./DestinationManagerHeader.css";
import React from "react";
import { Link } from "react-router-dom";
import dmanager from "../img/dmanager.jpg"

export default function DestinationManagerHeader(){

    function handleLogout() {
        sessionStorage.removeItem('userId');
        window.location.href = '/';
        }

    return(
        <div className="bd-container">
            <div className="left-nav1-destinationheader">

                <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
            
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav-bar">
                        <img src={dmanager} className="DManager-img"/>
    
                    
                    <li className="nav-item-des" >
                        <Link to="/destinationmanagerViewReservedDestination" className="nav-link-destination" style={{textDecoration:"none"}}>Edit Reserved Destination</Link>
                    </li>
                    <li className="nav-item-des">
                        <Link to="/destinationManager/home/:id" className="nav-link-destination" style={{textDecoration:"none"}}>Edit Profile</Link>
                    </li>
                    <li className="nav-item-des" >
                        <Link to="/createdestinationform" className="nav-link-destination" style={{textDecoration:"none"}}>Create New Destination</Link>
                    </li>
                    <li className="nav-item-des" >
                        <Link to="/ViewDestinationPackages" className="nav-link-destination" style={{textDecoration:"none"}}>Edit Packages</Link>
                    </li>
                    <li className="nav-item-des">
                        <Link to="/reservedDestinationReports" className="nav-link-destination" style={{textDecoration:"none"}}>Generate Report</Link>
                    </li>
                    <button className="Adnavlogout" onClick={handleLogout}>
                  Logout
                </button>
                    </ul>
                </div>
            </div>
        </nav>
            </div>
            
        </div>

    )
}