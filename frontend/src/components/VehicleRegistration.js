import React, { useState } from "react";
import "./VehicleRegistration.css";
import axios from "axios";
import Swal from "sweetalert2";


export default function VehicleRegister(){

   const [vehicleOwnerName,setVehicleOwnerName]=useState("");
   const [address,setAddress]=useState("");
   const [emailAddress,setEmailAddress]=useState("");
   const [phoneNumber,setPhoneNumber]=useState("");
   const [vehicleModel,setVehicleModel]=useState("");
   const [vehicleYearOfManufacture,setVehicleYearOfManufacture]=useState("");
   const [licensePlateNumber,setLicensePlateNumber]=useState("");
   const [color,setColor]=useState("");
   const [vehicleCondition,setVehicleCondition]=useState("");
   const [specialNotes,setSpecialNotes]=useState("");
   const [noOfSeats,setNoOfSeats]=useState("");
   const [type,setType]=useState("");
   const [transmission,setTransmission]=useState("");
   const [currentMilage,setCurrentMilage]=useState("0");
   const [expectedMilage,setExpectedMilage]=useState("");
   const [image,setImage]=useState("");
   const [price,setPrice]=useState("");
   const [rentStatus,setRentStatus]=useState("false");
   const [maintDaysCap,setMaintDaysCap]=useState("0");
   function sendData(e){
    e.preventDefault();

    const newVehRegistration = {
        vehicleOwnerName,
        address,
        emailAddress,
        phoneNumber,
        vehicleModel,
        vehicleYearOfManufacture,
        licensePlateNumber,
        color,
        noOfSeats,
        type,
        transmission,
        currentMilage,
        expectedMilage,
        vehicleCondition,
        specialNotes,
        price,
        rentStatus,
        maintDaysCap,
        image
    }
    axios.post("http://localhost:8070/vehicle/add", newVehRegistration,{
        headers: {
            "Content-Type": "multipart/form-data"
          }
  
    }).then(()=>{
        let timerInterval
        Swal.fire({
        title: 'Vehicle Added',
        icon: 'success',
        timer: 1000,
        showConfirmButton: false,
     willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
    }).catch((err)=>{
        alert(err)
    })
    
}
    return(
        
            <div className="veh-reg-whole-body">
                <h2 className="veh-reg-heading">Vehicle Renting Registration</h2>
                <div className="veh-reg-body-container">
                    <form onSubmit={sendData}>
                        <p className = "veh-reg-p1">Vehicle Owner's Name:
                            <input type="text" className="veh-reg-owner-name"
                                onChange={(e)=>{
                                    setVehicleOwnerName(e.target.value);
                                }}
                            />
                        </p>

                        <p className = "veh-reg-p1">Address:
                            <input type="text" className="veh-res-date-address"
                                onChange={(e)=>{
                                    setAddress(e.target.value);
                                }}
                            />
                        </p>

                        <p className = "veh-reg-p1">Email Address:
                            <input type="email" className="veh-res-date-email-address"
                                onChange={(e)=>{
                                    setEmailAddress(e.target.value);
                                }}
                            />
                        </p>
                        
                        <p className = "veh-reg-p1">Phone Number:
                            <input type="text" className="veh-res-date-phone"
                                onChange={(e)=>{
                                    setPhoneNumber(e.target.value);
                                }}
                            />
                        </p>
                        <p className = "veh-reg-p1">Vehicle Model:
                            <input type="text" className="veh-res-date-veh-model"
                                onChange={(e)=>{
                                    setVehicleModel(e.target.value);
                                }}
                            />
                        </p>
                        <p className = "veh-reg-p1">Vehicle YOM:
                            <input type="text" placeholder = "20XX" className="veh-res-date-yom"
                                onChange={(e)=>{
                                    setVehicleYearOfManufacture(e.target.value);
                                }}
                            />
                        </p>
                        <p className = "veh-reg-p2">License Number:
                            <input type="text" placeholder = "XXX-XXXX" className="veh-res-date-lnum"
                                onChange={(e)=>{
                                    setLicensePlateNumber(e.target.value);
                                }}
                            />
                        </p>
                        <p className = "veh-reg-p2">Color:
                            <input type="text" className="veh-res-date-color"
                                onChange={(e)=>{
                                    setColor(e.target.value);
                                }}
                            />
                        </p>
                        <p className = "veh-reg-p2">Vehicle Condition:
                            <input type="text" pattern="[0-9]" placeholder = "Worst - 0, Best - 10" className="veh-res-date-veh-con"
                                onChange={(e)=>{
                                    setVehicleCondition(e.target.value);
                                }}
                            />
                        </p>
                        <p className = "veh-reg-p2">No of Seats:
                            <select className="drp-down-seats" onChange={(e)=>{
                                    setNoOfSeats(e.target.value);
                                }}>
                                <option value="" disabled selected hidden>Choose...</option>
                                <option value="2 Seater">2 Seater</option>
                                <option value="4 Seater">4 Seater</option>
                                <option value="5 Seater">5 Seater</option>
                                <option value="7 Seater">7 Seater</option>
                            </select>
                        </p>
                        <p className = "veh-reg-type-p">Vehicle Type:
                        <select className="veh-reg-type-box" onChange={(e)=>{
                                    setType(e.target.value);
                                }}>
                                <option value="" disabled selected hidden>Choose...</option>
                                <option value="Coupe">Coupe</option>
                                <option value="SUV's">SUV's</option>
                                <option value="Sedan">Sedan</option>
                                <option value="Hatchback">Hatchback</option>
                                <option value="Other">Other</option>
                            </select>
                        </p>
                        <p className = "veh-res-date-veh-trans">Transmission:
                            <select className="veh-res-date-veh-trans-box" onChange={(e)=>{
                                    setTransmission(e.target.value);
                                }}>
                                <option value="" disabled selected hidden>Choose...</option>
                                <option value="Auto">Auto</option>
                                <option value="Manual">Manual</option>
                                <option value="Tiptronic">Tiptronic</option>
                            </select>
                        </p>
                        <p className = "veh-reg-cmil-p">Current Milage:
                            <input type="text" placeholder = "Km" className="veh-res-date-veh-cmil"
                                onChange={(e)=>{
                                    setCurrentMilage(e.target.value);
                                }}
                            />
                        </p>
                        <p className = "veh-reg-emil-p2">Expected Milage:
                        <select className="veh-res-date-veh-emil-box" onChange={(e)=>{
                                    setExpectedMilage(e.target.value);
                                }}>
                                <option value="" disabled selected hidden>Choose...</option>
                                <option value="Unlimited">Unlimited</option>
                                <option value="Limited">Limited</option>
                            </select>
                        </p>
                        <p className = "veh-reg-special-p">Special Notes:
                            <input type="text" className="veh-res-date-special-box"
                                onChange={(e)=>{
                                    setSpecialNotes(e.target.value);
                                }}
                            />
                        </p>
                        <p className = "veh-reg-price-p">Expected Price:
                            <input type="text" placeholder = "$" className="veh-res-date-price-box"
                                onChange={(e)=>{
                                    setPrice(e.target.value);
                                }}
                            />
                        </p>
                        <p className = "veh-reg-up-img">Upload Images:
                            <input type="file" className="veh-res-date-image" name = "image"
                                onChange={(e)=>{
                                    setImage(e.target.files[0]);
                                }}
                            />
                        </p>
                        <button className = "veh-reg-btn" id = "veh-reg-btn2">Submit</button>
                    </form>
                </div>
            </div>
        
    )
}
