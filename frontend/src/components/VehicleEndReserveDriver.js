import React, {useState, useEffect} from "react";
import "./VehicleEndReserveDriver.css";
import axios from "axios";
import vehiclerentbgpic from "../img/veh-end-res-pic.jpg";
import vehiclepasspic from "../img/veh-pass-img.png";
import vehiclemilpic from "../img/veh-mil-img.png";
import vehicletranspic from "../img/veh-trans-img.png";
import { Link } from "react-router-dom";

export default function VehicleReserve(){


    const [vehicles, setVehicles] = useState([]);

    useEffect(() =>{
        function getVehicles(){
            axios.get("http://localhost:8070/vehicle").then((res) =>{
                setVehicles(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getVehicles();
    }, [])


    return(
        <div className="veh-rent-body">
            <div className="veh-rent-imgcont">
                <img src={vehiclerentbgpic} className = "vehicle-endres-img" alt = "pic1"/>
                <p className="veh-res-end-p1">END</p>
                <p className="veh-res-end-p2">TRIP</p>
            </div>
                {

                    vehicles
                    .filter((i) => i.rentStatus !== "false")
                    .map(( i=>{
                        return(
                            <div className="veh-rent-detail-body">
                                <div className="veh-rent-endres-detail-cont"> 
                                    <div className="veh-res-veh-pic-div">
                                        <img className="veh-res-veh-pic" src = {`/images/${i.image}`} />
                                    </div>
                                    <div className="veh-res-veh-type-div">
                                        {i.type}
                                    </div>
                                    <img src={vehiclepasspic} className = "vehicle-pass-img" alt = "pic1"/>
                                    <div className="veh-res-veh-seats-div">
                                        {i.noOfSeats}
                                    </div>
                                    <img src={vehicletranspic} className = "vehicle-trans-img" alt = "pic2"/>
                                    <div className="veh-res-veh-trans-div">
                                        {i.transmission}
                                    </div>
                                    <img src={vehiclemilpic} className = "vehicle-mile-img" alt = "pic3"/>
                                    <div className="veh-res-veh-mile-div">
                                        {i.currentMilage}
                                    </div>
                                    
                                    <div>
                                        <hr className="vr-line-endres-12"></hr>
                                    </div> 
                                    
                                    <a className="nav-link" href={'/vehicleEndTripForm/' +i._id} ><button className="veh-end-res-btn">End Trip</button></a>
                                    
                                </div>
                                <div className="veh-rent-spacer">

                                </div>
                            </div>
                        );
                        
                    })

                    )
                }
                

        </div>
    )
}