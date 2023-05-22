import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom"
import "./ViewAdvertisements.css"
import AdminHeader from "./AdminHeader";

export default function ViewAcceptedAdvertisements() {

    const [advertisements, setAdvertisements] = useState([]);

    useEffect(() => {
        function getAdvertisements() {
            axios.get("http://localhost:8070/advertisement/acceptedAdvertisements").then((res) => {
                setAdvertisements(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getAdvertisements();

    }, [])

    const deleteAcceptedAdvertisement = async (advertisementId) => {
        try {
          await axios.delete(`http://localhost:8070/advertisement/delete/${advertisementId}`);
         // alert('Data deleted successfully');
          window.location.reload(); //data deleted after that page will refresh automatically
        } catch (error) {
          alert('Error deleting data', error);
          console.log(error);
        }
    };

const calculateTotalFee = (price, time) => {
    let fee = parseInt(price, 10);

    if (time === "Yes") {
    fee += 10;
    }

    return fee;
};

    return (
        
        <div className="ad-bg" style={{ backgroundColor: "#e6e6ee",position:"absolute" }}>
        <AdminHeader/>
        <div className="ad-back" style = {{width:"1125px",marginLeft:"350px"}}>
            <h3 className = "titleStyle"><br/>ALL ADVERTISEMENTS</h3>
        
        <div class = "container" style={{marginLeft:"10px"}}>
        <table class="table table-striped" >
        <thead>
        <tr>
        <th>Advertisement ID</th>
            <th>Package</th>
            <th>Price</th>
            <th>Website</th>
            <th>File</th>
        </tr>
        </thead>
        <tbody>
        {advertisements.map((advertisement) => {
          const totalFee = calculateTotalFee(advertisement.price, advertisement.time);
          return(
            <tr key={advertisement._id}>
            <td>{advertisement._id}</td>
            <td>{advertisement.packageNo}</td>
            <td>{totalFee}</td>
            <td>{advertisement.website}</td>
            <td className="columnImg"><img src={`/images/${advertisement.image}`} /></td>
            <td>
                <button onClick={() => deleteAcceptedAdvertisement(advertisement._id)} className="Adrej">Delete</button>
            </td>
            </tr>
          );
          })}
        </tbody>
        </table>

        <Link to = "/genAdvertisingReport" className="bttnNext" style = {{width:"160px", textDecoration:"none"}}>
                   PROFIT REPORT
        </Link>

        </div>
       </div>
       </div>
        

    )
}