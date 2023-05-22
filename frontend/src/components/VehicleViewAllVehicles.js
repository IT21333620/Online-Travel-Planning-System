import React, {useState, useEffect} from "react";
import axios from "axios";
import "./VehicleViewAllVehicles.css";
import AdminHeader from "./AdminHeader.js";
import vehiclehead from "../img/res-head-img.png";


export default function ViewReservedVehicles(){

    
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

    const deleteVehicle = async (id) => {
        try {
          await axios.delete(`http://localhost:8070/vehicle/delete/${id}`);
         // alert('Data deleted successfully');
          window.location.reload(); //data deleted after that page will refresh automatically
        } catch (error) {
          alert('Error deleting data', error);
          console.log(error);
        }
      };

    return(
        <div className="veh-reser-body">
            <AdminHeader></AdminHeader>
            <h3 className="res-veh-admin-heading">AVAILABLE VEHICLES</h3>
            <img src={vehiclehead} id = "vehicle-res-head-pic" alt = "pic3" />
            <div className="veh-res-conta">
            <table className="veh-res-admin-table" style = {{width: 900}}>
                    <tr>
                        <th>Brand</th>
                        <th>Year</th>
                        <th>Owner's Name</th>
                        <th>Mobile</th>
                        <th>Picture</th>
                    </tr>
                {
                    vehicles.map( i=>{
                        return(
                            <tr>
                                <td>{i.vehicleModel}</td>
                                <td>{i.vehicleYearOfManufacture}</td>
                                <td>{i.vehicleOwnerName}</td>
                                <td>{i.phoneNumber}</td>
                                <td><img className="veh-res-veh-admin-pic" src = {`/images/${i.image}`} /></td>
                                
                                
                                <td>
                                    <button className="veh-res-ad-bthn1" onClick={() =>deleteVehicle(i._id)}>Delete</button>
                                </td>
                            </tr>
                            
                        );
                    }

                    )
                }
                </table>

                <button className="veh-res-ad-bthn10" id = "veh-maint-btn">Vehicle Maintenance</button>
                <button className="veh-res-ad-bthn10" id = "veh-maint-over-btn">Maintenance Overview</button>
                <button className="veh-res-ad-bthn10" id = "veh-maint-dri-btn">View<br/> Drivers</button>
                </div>
        </div>
    )
}