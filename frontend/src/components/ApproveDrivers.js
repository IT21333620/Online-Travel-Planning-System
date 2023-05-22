import "./ApproveDrivers.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader.js";
import { Link } from "react-router-dom";

export default function VehicleRegister(){

    const [drivers, setDrivers] = useState([]);

    useEffect(() =>{
        function getDrivers(){
            axios.get("http://localhost:8070/vehicleDriver").then((res) =>{
                setDrivers(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getDrivers();
    }, [])

    const deleteDriver = async (id) => {
        try {
          await axios.delete(`http://localhost:8070/vehicleDriver/delete/${id}`);
         // alert('Data deleted successfully');
          window.location.reload(); //data deleted after that page will refresh automatically
        } catch (error) {
          alert('Error deleting data', error);
          console.log(error);
        }
      };

    return(
        
        <div className="app-dri-body">
            <AdminHeader></AdminHeader>
            <div className="app-dri-container">
                <h3 className="app-dri-heading">
                    Approve New Drivers
                </h3>
                <div>
            
            <table  className = "tab-dri" style = {{width: 900}}>
                    <tr>
                        <th>Driver No.</th>
                        <th>Driver Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Years Of Experience</th>
                        <th>NIC</th>
                        <th>Age</th>
                        <th>License Number</th>
                    </tr>
                {
                    drivers.map( i=>{
                        return(
                            <tr>
                                <td>{i._id}</td>
                                <td>{i.driverName}</td>
                                <td>{i.address}</td>
                                <td>{i.emailAddress}</td>
                                <td>{i.phoneNumber}</td>
                                <td>{i.yearsOfExperience}</td>
                                <td>{i.nic}</td>
                                <td>{i.age}</td>
                                <td>{i.licenseNumber}</td>
                            
                                {/* <td>
                                    <button onClick={() =>deleteDriver(i._id)}>Delete</button>
                                </td> */}
                            </tr>
                            
                        );
                    }

                    )
                }
                </table>
        </div>
            </div>
        </div>
    )
}