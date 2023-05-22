import React, { useState } from "react";
import "./VehicleDriverRegistration.css";
import axios from "axios";

export default function VehicleRegister(){
   const [driverName,setDriverName]=useState("");
   const [address,setAddress]=useState("");
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
   const [phoneNumber,setPhoneNumber]=useState("");
   const [yearsOfExperience,setYearsOfExperience]=useState("");
   const [nic,setNic]=useState("");
   const [age,setAge]=useState("");
   const [licenseNumber,setLicenseNumber]=useState("");

   function sendData(e){
    e.preventDefault();

    const newVehDriverRegistration = {
        driverName,
        address,
        email,
        password,
        phoneNumber,
        yearsOfExperience,
        nic,
        age,
        licenseNumber
    }
    axios.post("http://localhost:8070/vehicleDriver/add", newVehDriverRegistration).then(()=>{
        setDriverName("");
        setAddress("");
        setEmail("");
        setPassword("");
        setPhoneNumber("");
        setYearsOfExperience("");
        setNic("");
        setAge("");
        setLicenseNumber("");

    }).catch((err)=>{
        alert(err)
    })
}
    return(
        <div className="veh-dri-reg-body">
            <h2 className="veh-dri-reg-heading">Vehicle Driver Registration</h2>
            <div className="veh-dri-reg-container">
                <form onSubmit={sendData}>
                    <p className = "veh-dri-reg-driname-p1">Driver Name:
                        <input type="text" className="veh-dri-reg-drivername"
                            onChange={(e)=>{
                                setDriverName(e.target.value);
                            }}
                        />
                    </p>

                    <p className = "veh-dri-reg-add-p2">Address:
                        <input type="text" className="veh-dri-reg-address"
                            onChange={(e)=>{
                                setAddress(e.target.value);
                            }}
                        />
                    </p>

                    <p className = "veh-dri-regemail-p1">Email Address:
                        <input type="text" className="veh-dri-reg-emailaddress"
                            onChange={(e)=>{
                                setEmail(e.target.value);
                            }}
                        />
                    </p>
                    
                    <p className = "veh-dri-regpass-p1">Password:
                        <input type="text" className="veh-dri-reg-password"
                            onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                        />
                    </p>

                    <p className = "veh-dri-reg-pnum-p1">Phone Number:
                        <input type="text" className="veh-dri-reg-pnum"
                            onChange={(e)=>{
                                setPhoneNumber(e.target.value);
                            }}
                        />
                    </p>

                    <p className = "veh-dri-reg-exp-p1">Years Of Experience:
                        <input type="text" className="veh-dri-reg-experience"
                            onChange={(e)=>{
                                setYearsOfExperience(e.target.value);
                            }}
                        />
                    </p>

                    <p className = "veh-dri-reg-nic-p1">NIC:
                        <input type="text" className="veh-dri-reg-nic"
                            onChange={(e)=>{
                                setNic(e.target.value);
                            }}
                        />
                    </p>

                    <p className = "veh-dri-reg-age-p1">Age:
                        <input type="text" className="veh-dri-reg-age"
                            onChange={(e)=>{
                                setAge(e.target.value);
                            }}
                        />
                    </p>

                    <p className = "veh-dri-reg-lic-p1">License Number:
                        <input type="text" className="veh-dri-reg-licensenum"
                            onChange={(e)=>{
                                setLicenseNumber(e.target.value);
                            }}
                        />
                    </p>

                    <button className="veh-reg-sub-btn" type = "submit">Submit</button>
                </form>
            </div>
        </div>
    )

}

