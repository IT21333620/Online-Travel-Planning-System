import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./EditHotel.css";
import roomdoor from "../img/roomdoor.jpg";
import HotelOwnerHeader from "./HotelOwnerHeader";

export default function ReservedRooms(){
      
    return(
        <div style={{backgroundColor:'#e6e6ee', height:'1080px'}}>
          <HotelOwnerHeader/>
            <div className="divimgroom">
                <img src={roomdoor} className="imguproom"/>
                <div className="uproom-cont1">
                    <p>You are loged in as a</p>
                    <b><p>HOTEL OWNER</p></b>
                </div>
                <div className="uproom-cont2">
                    <p>Add rooms to your hotel to</p>
                    <p>Begin earn money</p>
                </div>
            </div>
            <div className="uproom-form">
            
            </div>
        </div>
    )
      
};

    

