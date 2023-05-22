import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom"
import "./ViewAdvertisers.css"
import AdminHeader from "./AdminHeader";

export default function ViewAdvertisers() {

    const [advertisers, setAdvertisers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        function getAdvertisers() {
            axios.get("http://localhost:8070/advertiser/").then((res) => {
                setAdvertisers(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getAdvertisers();

    }, [])

    const filteredadvertisers = advertisers.filter(advertiser => {
        return (
            advertiser.fname.toLowerCase().includes(searchQuery.toLowerCase()) ||
            advertiser.company.toLowerCase().includes(searchQuery.toLowerCase())
         
        );
    });


    const deleteAdvertiserProfile = async (advertiserId) => {
        try {
          await axios.delete(`http://localhost:8070/advertiser/delete/${advertiserId}`);
         // alert('Data deleted successfully');
          window.location.reload(); //data deleted after that page will refresh automatically
        } catch (error) {
          alert('Error deleting data', error);
          console.log(error);
        }
    };

    return (

        <div className="ad-bg" style={{ backgroundColor: "#e6e6ee",position:"absolute" }}>
        <AdminHeader/>
        <div className="ad-back">
        
            <h3 className = "titleStyle"><br/>ALL ADVERTISERS</h3>

            <div className="search" style={{ maxWidth: "800px" }}>
            <input type="text"
                placeholder="Search advertisers"
                style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
                width: "40%",
                boxSizing: "border-box",
                marginBottom: "10px",
                marginLeft:"30px"
                }}
                onChange={e => setSearchQuery(e.target.value)}
            />
            </div>
            <br/>
        
        <div class = "container" >
        <table class="table table-striped" style={{marginLeft:"-60px" ,width:"1000px"}}>
        <thead>
        <tr>
            <th>Advertiser ID</th>
            <th style = {{width:"4000px"}}>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Address</th>
            <th>Contact No</th>
        </tr>
        </thead>
        <tbody>
        {filteredadvertisers.map((advertiser) => (
            <tr key={advertiser._id}>
            <td>{advertiser._id}</td>
            <td>{`${advertiser.fname} ${advertiser.lname}`}</td>
            <td>{advertiser.company}</td>
            <td>{advertiser.email}</td>
            <td>{advertiser.address}</td>
            <td>{`${advertiser.contactWork}, ${advertiser.contactMobile}`}</td>
            <td>
               
                <button onClick={() => deleteAdvertiserProfile(advertiser._id)} className="Adrej">Delete</button>
            </td>
            </tr>
        ))}
        </tbody>
        </table>

        <Link to = "/getAdvertisements" className="bttnNext" style = {{width:"220px", textDecoration:"none"}}>
                    NEW ADVERTISEMENTS
        </Link>

        </div>
         </div>
        </div>

    )
}