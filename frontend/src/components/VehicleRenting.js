import React, {useState, useEffect} from "react";
import "./VehicleRenting.css";
import axios from "axios";
import vehiclerentbgpic from "../img/vehicle-renting-bgpic.png";
import vehiclepasspic from "../img/veh-pass-img.png";
import vehiclemilpic from "../img/veh-mil-img.png";
import vehicletranspic from "../img/veh-trans-img.png";
import vehicletickpic from "../img/veh-rent-tick.png";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";

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
        <div>
            <UserHeader></UserHeader>
        <div className="veh-rent-body">
            <div className="veh-rent-imgcont">
                <img src={vehiclerentbgpic} className = "vehicle-rent-img" alt = "pic1"/>
            </div>
                {

                    vehicles
                    .filter((i) => i.rentStatus !== "true" && i.maintenanceStatus !== "Notify")
                    .map(( i=>{
                        return(
                            <div className="veh-rent-detail-body">
                                <div className="veh-rent-detail-cont"> 
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
                                        {i.expectedMilage}
                                    </div>
                                    <div>
                                    <img src={vehicletickpic} className = "vehicle-tick-img" alt = "pic3"/>
                                    <p className="veh-rent-Safe">Safety Assured</p>
                                        <hr className="hr-line-12"></hr>
                                    </div> 
                                    <div>
                                        <hr className="vr-line-12"></hr>
                                    </div> 
                                    <p className="veh-res-veh-price-div">
                                        ${i.price}
                                    </p>
                                    <p className="veh-res-price-p">
                                        Per Day
                                    </p>
                                    <a className="nav-link" href={'/vehicleReservationForm/' +i._id} ><button className="veh-rent-button">Reserve</button></a>
                                    
                                </div>
                                <div className="veh-rent-spacer">

                                </div>
                            </div>
                        );
                        
                    })

                    )
                }
                

        </div>
        <UserFooter></UserFooter>
        </div>
    )
}