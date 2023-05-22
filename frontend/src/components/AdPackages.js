import React, { useState } from "react"
import styles from '../styles/packages.css'
import { Link } from "react-router-dom";
import AdvertiserHeader from "./AdvertiserHeader"; 

export default function AdPackages() {
        
            const advertiserId  = sessionStorage.getItem('userId');
          return (
            
            <div style = {{backgroundColor:"#E6E6EE"}}>
                 <AdvertiserHeader/>
                <h2 className = "title"><br/>SELECT AN ADVERTISING PACKAGE</h2><br/>
                <h3 className = "sub">Which page do you want to publish your advertisement?</h3>
                <Link to={`/addAd/${advertiserId}/1/100`}>
                <button className="Advertising-btn" id = "ads-package-1" style = {{backgroundImage:"url('./images/home.jpg')"}}>Home<br/>Price : $ 100</button>
                </Link>
                <Link to={`/addAd/${advertiserId}/2/30`}>
                <button className="Advertising-btn" style = {{backgroundImage:"url('./images/destination.jpg')"}}>Destination<br/>Price : $ 30</button>
                </Link>
                <Link to={`/addAd/${advertiserId}/3/50`}>
                <button className="Advertising-btn" id = "ads-package-2" style = {{backgroundImage:"url('./images/hotelAd.jpg')"}} >Hotel Reservation<br/>Price : $ 50</button>
                </Link>
                <Link to={`/addAd/${advertiserId}/4/60`}>
                <button className="Advertising-btn" style = {{backgroundImage:"url('./images/Car-Rental.jpg')"}}>Vehicle Renting<br/>Price : $ 60</button>
                </Link>
            </div>
        )
}