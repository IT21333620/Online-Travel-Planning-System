import React, {useState, useEffect} from "react";
import "./VehicleMaintenance.css";
import axios from "axios";
import vehiclerentbgpic from "../img/veh-maintenance-pic.png";
import vehiclepasspic from "../img/veh-pass-img.png";
import vehiclemilpic from "../img/veh-mil-img.png";
import vehiclethashpic from "../img/veh-maint-hash.png";

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

    const handleNotifyClick = (phoneNumber, vehicleId) => {
        axios.post("http://localhost:8070/vehicleSmsService", {
            phoneNumber: phoneNumber,
        }).then((res) => {
            alert(res.data);
            // update the maintenanceStatus value of the vehicle
            axios.put(`http://localhost:8070/vehicle/update/${vehicleId}`, {
                maintenanceStatus: "none",
            }).then((res) => {
                // update the vehicles state to reflect the change
                setVehicles(prevVehicles => prevVehicles.map(v => {
                    if (v._id === vehicleId) {
                        return {
                            ...v,
                            maintenanceStatus: "none",
                        };
                    } else {
                        return v;
                    }
                }));
            }).catch((err) => {
                alert(err.message);
            });
        }).catch((err) => {
            alert(err.message);
        });
    };

    return(
        <div className="veh-rent-body">
            <div className="veh-rent-imgcont">
                <img src={vehiclerentbgpic} className = "vehicle-maint-img" alt = "pic1"/>
            </div>
            {
                vehicles
                .filter((i) => i.maintenanceStatus == "Notify" && i.rentStatus == "false")
                .map((i) => {
                    return(
                        <div className="veh-rent-detail-body" key={i._id}>
                            <div className="veh-rent-detail-cont"> 
                                <div className="veh-res-veh-pic-div">
                                    <img className="veh-res-veh-pic" src={`/images/${i.image}`} />
                                </div>
                                <div className="veh-res-veh-type-div">
                                    {i.type}
                                </div>
                                <img src={vehiclepasspic} className = "vehicle-pass-img" alt = "pic1"/>
                                <div className="veh-res-veh-seats-div">
                                    {i.vehicleOwnerName}
                                </div>
                                <img src={vehiclethashpic} className = "vehicle-hash-img" alt = "pic2"/>
                                <div className="veh-res-veh-hash-div">
                                    {i.licensePlateNumber}
                                </div>
                                <img src={vehiclemilpic} className = "vehicle-mile-maint-img" alt = "pic3"/>
                                <div className="veh-res-veh-maint-mile-div">
                                    {i.currentMilage}
                                </div>
                                
                                <div>
                                    <hr className="vr-maintenance-line-1"></hr>
                                </div> 
                                <button className="veh-maintenance-btn2">View</button>
                                <button className="veh-maintenance-btn1" onClick={() => handleNotifyClick(i.phoneNumber, i._id)}>Notify</button>

                            </div>
                            <div className="veh-rent-spacer"></div>
                        </div>
                    );
                })
            }
        </div>
    )
}
