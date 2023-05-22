import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import AdvertiserHeader from "./AdvertiserHeader";

export default function AdvertiserAdvertisements(){

    const[advertisements,setAdvertisements] = useState([]);
    const[advertiser,setAdvertiser] = useState({});
    const advertiserId  = sessionStorage.getItem('userId');

    useEffect(() =>{
        function getAdvertisements(){
            axios.get(`http://localhost:8070/advertisement/viewAdvertiserAdvertisements/${advertiserId}`).then((res) =>{
                setAdvertisements(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getAdvertisements();
    }, []);

    const deleteAdvertisement = async (advertisementId) => {
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

    return(
        <div className="ad-bg" style={{ backgroundColor: "#e6e6ee",position:"absolute" }}>
      <AdvertiserHeader/>
      <div className="ad-back" style = {{width:"1125px",marginLeft:"350px"}}>
            <h3 className = "titleStyle"><br/>MY ADVERTISEMENTS</h3>
                    
        <table class="table table-striped">
                <thead>
                <tr>
                    <th>Advertisement ID</th>
                    <th>Package</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>File</th>
                </tr>
                </thead>
                <tbody>
            {advertisements.map((advertisement) => {
              const totalFee = calculateTotalFee(advertisement.price, advertisement.time);

              return (
                <tr key={advertisement._id}>
                  <td>{advertisement._id}</td>
                  <td>{advertisement.packageNo}</td>
                  <td>{totalFee}</td>
                  <td>{advertisement.status}</td>
                  <td className="columnImg"><img src={`/images/${advertisement.image}`} /></td>
                  <td>
                    <button onClick={() => deleteAdvertisement(advertisement._id)} className="Adrej">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
                </table>           
                        
          </div>  
          </div>         
    )
    
}