import React, {useEffect, useState} from "react";
import "./VehicleEndTripForm.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


export default function VehicleRegister(){
    const{id}=useParams();
   const [specialNotes,setSpecialNotes]=useState("None");
   const [currentMilage,setCurrentMilage]=useState("");
   const [newMilage,setNewMilage]=useState("");
   const totalMilage = parseInt(newMilage) + parseInt(currentMilage);
    console.log("Total mileage:", totalMilage);

    function sendData(e){
        e.preventDefault();
      
        const newCurrentMilage = parseInt(newMilage) + parseInt(currentMilage);
      
        const newVehRegistration = {
          currentMilage: newCurrentMilage,
          specialNotes,
          newMilage,
          rentStatus: false,
        };
      
        axios
  .put(`http://localhost:8070/vehicle/update/${id}`, newVehRegistration)
  .then((response) => {
    console.log(response.data);
    Swal.fire({
        icon: 'success',
        title: 'Trip Ended Successfully',
        showConfirmButton: true,
        confirmButtonText: 'Confirm',
      }).then(() => {
        // Redirect to another page
        window.location.href = "/vehicleEndReserveDriver";
      });
  })
  .catch((error) => {
    console.log(error);
    // show error message
  });

      }

useEffect(() =>{

    
    axios.get(`http://localhost:8070/vehicle/get/${id}`).then((response)=> {
       
        const insurance = response.data;
        setCurrentMilage(insurance.currentMilage);
        console.log("Current mileage:", insurance.currentMilage);
      });
    }, [id]);


    return(
        
            <div className="veh-entrip-whole-body">
                <h2 className="veh-entripp-heading">Trip End Report</h2>
                <div className="veh-reg-body-container">
                    <form onSubmit={sendData}>
                       
                        <p className = "veh-reg-end-cmil-p">Current Milage:
                            <input type="text" className="veh-res-date-veh-cmil"
                                onChange={(e)=>{
                                    setNewMilage(e.target.value);
                                    console.log("New mileage:", e.target.value);
                                }}
                            />
                        </p>
                        
                        <p className = "veh-reg-special-end-p">Special Notes:
                            <input type="text" className="veh-res-date-special-box"
                                onChange={(e)=>{
                                    setSpecialNotes(e.target.value);
                                }}
                            />
                        </p>
                        
                        
                        <button className = "veh-reg-btn" id = "veh-reg-end-btn2">End Trip</button>
                    </form>
                </div>
            </div>
        
    )
}
