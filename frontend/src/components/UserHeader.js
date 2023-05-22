import React from "react";
import "./UserHeader.css";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";
import userlogo from "../img/userlogo.png"


export default function UserHeader(){

    return(
        <div>
         <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#191970"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt="Logo" style={{height:"40px",width:"40px"}}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/hotels">Stay in</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/vehicleHomepage" className="nav-link">Vehicle</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/destinationHome" className="nav-link">Destination</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/AllAdventure" className="nav-link">Outdoor</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/insuranceform" className="nav-link">Insurance</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/PaymentForm" className="nav-link">Payment</Link>
                    </li>
                   
                    <li>
                        <Link to="/sidebar" ><img src={userlogo} className="navphoto"/></Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>   
        )
    }