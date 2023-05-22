import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link, useParams } from "react-router-dom"
import DestinationManagerHeader from "./DestinationManagerHeader"; 

export default function DestinationManagerProfile(){

    const [destinationmanager, setDestinationmanager] = useState([]);
    const id = sessionStorage.getItem('userId');

    useEffect(() => {
        function getDestinationmanager() {
            axios.get(`http://localhost:8070/destinationmanager/get/${id}`).then((res) => {
                setDestinationmanager(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getDestinationmanager();

    }, [id])

    return (

    <div className="Adbg">
    <DestinationManagerHeader/>
    <div className="Adcontainer" style={{backgroundColor:"white",marginLeft:"450px",borderRadius:"8px"}}>
        <h3 className="titleStyle" style={{color:"black",marginLeft:"50px"}}><br />DESTINATION MANAGER DETAILS</h3>

        <br></br><br></br>

        <div style={{height:"250px",marginLeft:"100px"}}>
                <div className="Adfield">
                    <span className="Adlabel">DManager ID  :</span>
                    <span className="Advalue">{destinationmanager._id}</span>
                </div>
                <div className="Adfield">
                    <span className="Adlabel">Name     :</span>
                    <span className="Advalue">{`${destinationmanager.fname} ${destinationmanager.lname}`}</span>
                </div>
                <div className="Adfield">
                    <span className="Adlabel">Address    :</span>
                    <span className="Advalue">{destinationmanager.address}</span>
                </div>
                <div className="Adfield">
                    <span className="Adlabel">Email     :</span>
                    <span className="Advalue">{destinationmanager.email}</span>
                </div>
                <div className="Adfield">
                    <span className="Adlabel">Age      :</span>
                    <span className="Advalue">{destinationmanager.age}</span>
                </div>
                <div className="Adfield">
                    <span className="Adlabel">Contact No   :</span>
                    <span className="Advalue">{destinationmanager.contactNo}</span>
                </div>
                <div className="Adfield">
                    <span className="Adlabel">Password  :</span>
                    <span className="Advalue">{destinationmanager.password}</span>
                </div>
                
            </div>
        
    </div>
    </div>
    )
}