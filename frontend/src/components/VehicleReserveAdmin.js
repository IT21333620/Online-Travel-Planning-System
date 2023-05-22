import React, {useState, useEffect} from "react";
import axios from "axios";
import "./VehicleReserveAdmin.css";
import AdminHeader from "./AdminHeader.js";
import vehiclehead from "../img/res-head-img.png";
import jsPDF from "jspdf";
import 'jspdf-autotable';


export default function ViewReservedVehicles(){

    
    const [vehicles, setVehicles] = useState([]);

    useEffect(() =>{
        function getVehicles(){
            axios.get("http://localhost:8070/vehicleReserve").then((res) =>{
                setVehicles(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getVehicles();
    }, [])

    const deleteVehicle = async (id) => {
        try {
          await axios.delete(`http://localhost:8070/vehicleReserve/delete/${id}`);
         // alert('Data deleted successfully');
          window.location.reload(); //data deleted after that page will refresh automatically
        } catch (error) {
          alert('Error deleting data', error);
          console.log(error);
        }
      };

      const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "My Report";
        const headers = [["First Name", "Last Name", "Phone", "Email", "Total Price"]];
    
        const data = vehicles.map(elt => [elt.firstName, elt.lastName, elt.mobile, elt.email, elt.totalPrice]);
    
        let content = {
            startY: 50,
            head: headers,
            body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
    }

    return(
        <div className="veh-reser-body">
            <AdminHeader></AdminHeader>
            <h3 className="res-veh-admin-heading">RESERVED VEHICLES</h3>
            <img src={vehiclehead} id = "vehicle-res-head-pic" alt = "pic3" />
            <div className="veh-res-conta">
            <button className='btn btn-primary' onClick={() => exportPDF()}>Export Result</button>
            <table className="veh-res-admin-table" style = {{width: 900}}>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Pick Up</th>
                        <th>Drop Off</th>
                        <th>Payment($)</th>
                    </tr>
                {
                    vehicles.map( i=>{
                        return(
                            <tr>
                                <td>{i.firstName}</td>
                                <td>{i.lastName}</td>
                                <td>{i.email}</td>
                                <td>{i.mobile}</td>
                                <td>{i.from}</td>
                                <td>{i.to}</td>
                                <td>{i.totalPrice}</td>
                                
                                <td>
                                <a className="nav-link" href={'/vehicleReserveUpdate/' +i._id} ><button className="veh-res-ad-bthn1">Update</button></a>
                                    <button className="veh-res-ad-bthn1" onClick={() =>deleteVehicle(i._id)}>Delete</button>
                                </td>
                            </tr>
                            
                        );
                    }

                    )
                }
                </table>
                </div>
        </div>
    )
}