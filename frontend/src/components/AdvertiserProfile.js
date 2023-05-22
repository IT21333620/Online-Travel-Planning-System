import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link, useParams } from "react-router-dom"
import "./ViewAdvertisers.css"
import "./AdvertiserProfile.css"; 
import AdvertiserHeader from "./AdvertiserHeader"; 

export default function AdvertiserProfile() {

    const [advertiser, setAdvertiser] = useState([]);
    const advertiserId  = sessionStorage.getItem('userId');

    useEffect(() => {
        function getAdvertiser() {
            axios.get(`http://localhost:8070/advertiser/get/${advertiserId}`).then((res) => {
                setAdvertiser(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getAdvertiser();

    }, [advertiserId])

  return (

    <div className="ad-bg" style={{ backgroundColor: "#e6e6ee",position:"absolute" }}>
      <AdvertiserHeader/>
    <div className="Adcontainer">
        <h3 className="titleStyle"><br />ADVERTISER DETAILS</h3>

        <div className="advertiser">
                <div className="Adfield">
                    <span className="Adlabel">Advertiser ID:</span>
                    <span className="Advalue">{advertiser._id}</span>
                </div>
                <div className="Adfield">
                    <span className="Adlabel">Name:</span>
                    <span className="Advalue">{`${advertiser.fname} ${advertiser.lname}`}</span>
                </div>
                <div className="Adfield">
                    <span className="Adlabel">Company:</span>
                    <span className="Advalue">{advertiser.company}</span>
                </div>
                <div className="Adfield">
                    <span className="Adlabel">Email:</span>
                    <span className="Advalue">{advertiser.email}</span>
                </div>
                <div className="Adfield">
                    <span className="Adlabel">Address:</span>
                    <span className="Advalue">{advertiser.address}</span>
                </div>
                <div className="Adfield">
                    <span className="Adlabel">Contact No:</span>
                    <span className="Advalue">{`${advertiser.contactWork}, ${advertiser.contactMobile}`}</span>
                </div>
                
            </div>

            <Link to = "/updateAdvertisers" className="bttnNext" style = {{width:"100px", textDecoration:"none", paddingLeft:"30px",marginTop:"20px",marginRight:"700px"}}>
                    EDIT
        </Link>
        
    </div>
    </div>
    )

}