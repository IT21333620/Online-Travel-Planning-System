import React, {useState, useEffect} from "react";
import "./VehicleAcceptDriver.css";
import axios from "axios";

export default function VehicleAcceptDriver(){


    const [vehicles, setVehicles] = useState([]);

    useEffect(() =>{
        function getDrivers(){
            axios.get("http://localhost:8070/vehicleDriver").then((res) =>{
                setVehicles(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getDrivers();
    }, [])

    const deleteDriver = async (id) => {
        try {
          await axios.delete(`http://localhost:8070/vehicleDriver/delete/${id}`);
          window.location.reload();
        } catch (error) {
          alert('Error deleting data', error);
          console.log(error);
        }
      };

    return(
        <div className="veh-dri-re-body">
            <div className="veh-dri-small-body">
                <table>
                    <tr>
                        <th>Driver Name</th>
                        <th>Phone Number</th>
                        <th>Experience</th>
                        <th>NIC</th>
                        <th>Age Up</th>
                        <th></th>
                        
                    </tr>
                    {
                        vehicles.map(i => {
                            return(
                                <tr>
                                    <td>{i.driverName}</td>
                                    <td>{i.phoneNumber}</td>
                                    <td>{i.yearsOfExperience}</td>
                                    <td>{i.nic}</td>
                                    <td>{i.age}</td>
                                    <td>
                                        <button className="veh-res-ad-bthn1" onClick={() =>deleteDriver(i._id)}>Reject</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </table>
            </div>
        </div>
    )
}