import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"
import "./ViewAdvertisements.css"
import AdminHeader from "./AdminHeader";

export default function ViewAdvertisements () {

    const [advertisements, setAdvertisements] = useState([]);
    const navigate = useNavigate();

    const handleAccept = (event,advertisement) => {
      if (!advertisement._id) {
        alert('Advertisement ID is missing');
        return;
      }
    
      axios.put(
        `http://localhost:8070/advertisement/update/${advertisement._id}`,
        {
          status: "Accepted",
        }
      ).then(async (res) => {
        alert("Advertisement Accepted Successfully");
    
        // // Navigate to the relevant page based on package number
        // if (advertisement.packageNo === 1) {
        //   navigate(`/home`);
        // } else if (advertisement.packageNo === 2) {
        //   navigate(`/destinationhome`, { state: { image: advertisement.image } });
        // } else if (advertisement.packageNo === 3) {
        //   navigate(`/hotels`, { state: { image: advertisement.image } })
        // } else if (advertisement.packageNo === 4) {
        //   navigate(`/vehicleHomepage`,{ state: { image: advertisement.image } });
        // }
      }).catch((err) => {
        alert(err.message);
      });
    };

    const handleReject = (event,advertisement) => {
      if (!advertisement._id) {
        alert('Advertisement ID is missing');
        return;
      }

      axios.put(
        `http://localhost:8070/advertisement/update/${advertisement._id}`,
        {
          status: "Rejected",
        }
      ).then(async (res) => {
        alert("Advertisement Rejected");
      }).catch((err) => {
        alert(err.message);
      });
  };
    
    useEffect(() => {
        function getAdvertisements() {
            axios.get("http://localhost:8070/advertisement/viewAdvertisements").then((res) => {
                setAdvertisements(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getAdvertisements();

    }, [])

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
            <h3 className = "titleStyle"><br/>NEW ADVERTISEMENTS</h3>
        
        <div className="container" style={{marginLeft:"10px"}}>
        <table class="table table-striped">
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
            <div style={{ display:"flex" }}>
            <button onClick={(event) => handleAccept(event, advertisement)} style={advertisement.status === "Accepted" || advertisement.status === "Rejected" 
                ? { cursor: "not-allowed" } 
                : {}}disabled={advertisement.status === "Accepted" || advertisement.status === "Rejected" } className="Addlt">
              {advertisement.status === "Accepted" ? "Accepted" : "Accept"} 
            </button>

            <button onClick={(event) => handleReject(event, advertisement)} style={advertisement.status === "Accepted" || advertisement.status === "Rejected" 
                ? { cursor: "not-allowed" } 
                : {}}disabled={advertisement.status === "Accepted" || advertisement.status === "Rejected" } className="Adrej">
              {advertisement.status === "Rejected" ? "Rejected" : "Reject"}
            </button>


            </div>
            </td>
            </tr>
          );
          })}
        </tbody>
        </table>

        <Link to = "/viewAcceptedAds" className="bttnNext" style = {{width:"220px", textDecoration:"none"}}>
                    ALL ADVERTISEMENTS
        </Link>

        </div>
       </div>
        </div>

    )
}