import "./AdminHeader.css";
import React from "react";
import { Link } from "react-router-dom";

export default function AdminHeader(){

    function handleLogout() {
       
        sessionStorage.removeItem('userId');
        window.location.href = '/';
    }
    return(

       
        <div className="body-container">
            <div className="left-nav">

                <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav-bar">
                    
                    <li className="nav-item1">
                        <Link to="/vehicleReservationForm " className="nav-link" style={{color:'black',transition: 'color 0.3s', ':hover': {color: '#E49B0F'}}}>Edit Profile</Link>
                    </li>
                    <li className="nav-item2">
                        <Link to="/approveHotel" className="nav-link" style={{color:'black',transition: 'color 0.3s', ':hover': {color: '#E49B0F'}}}>Approve Rooms</Link>
                    </li>
                    <li className="nav-item3">
                        <ul class="dropdown-menu">
                             <li><Link to="/vehicleReserveAdmin" className="nav-link" style={{color:'black',transition: 'color 0.3s', ':hover': {color: '#E49B0F'}}}>Booked Vehicles</Link></li>
                            <li><Link to="/AdminOutFeedView" className="dropdown-item" style={{color:'black',transition: 'color 0.3s', ':hover': {color: '#E49B0F'}}}>Outdoor Feedback</Link></li>
                        </ul>
                    
                    </li>
                    <li className="nav-item1">
                        <Link to="/approveDrivers " className="nav-link" style={{color:'black',transition: 'color 0.3s', ':hover': {color: '#E49B0F'}}}>Approve Drivers</Link>
                    </li>
                    <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style={{color:'black',transition: 'color 0.3s', ':hover': {color: '#E49B0F'}}}>Advertising</a>
          <ul class="dropdown-menu">
            <li><Link to="/getAdvertisers" className="dropdown-item" style={{color:'black',transition: 'color 0.3s', ':hover': {color: '#E49B0F'}}}>Advertisers</Link></li>
            <li><Link to="/getAdvertisements" className="dropdown-item" style={{color:'black',transition: 'color 0.3s', ':hover': {color: '#E49B0F'}}}>Advertisements</Link></li>
            <li><Link to="/genAdvertisingReport" className="dropdown-item" style={{color:'black',transition: 'color 0.3s', ':hover': {color: '#E49B0F'}}}>Profit Report</Link></li>
          </ul>
        </li>




                    <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style={{color:'black',transition: 'color 0.3s', ':hover': {color: '#E49B0F'}}}>Outdoor Activity</a>
          <ul class="dropdown-menu">
            <li><Link to="/AdminAdvenView" className="dropdown-item" style={{color:'black',transition: 'color 0.3s', ':hover': {color: '#E49B0F'}}}>Outdoor Activity</Link></li>
            <li><Link to="/AdminOutFeedView" className="dropdown-item" style={{color:'black',transition: 'color 0.3s', ':hover': {color: '#E49B0F'}}}>Outdoor Feedback</Link></li>
          </ul>
        </li>



                    <li className="nav-item5">
                        <Link to="/adminViewDestinationManager" className="nav-link" style={{color:'black'}}>Destinations</Link>
                    </li>
                    <li className="nav-item6">
                        <Link to="/adminHeader" className="nav-link" style={{color:'black'}}>Booked Tour Guides</Link>
                    </li>
                    <li className="nav-item7">

                        <Link to="/InsuranceAdmin-CustomerManagement"style={{color:'black'}} className="nav-link">Insurances</Link>


                    </li>


                    <li className="nav-item8">
                        <Link to="/AdminManagePayment" className="nav-link" style={{color:'black'}}>Payments</Link>
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