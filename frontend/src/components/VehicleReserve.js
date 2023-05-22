import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./VehicleReserve.css";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';



export default function VehicleReserve(){

    const { id } = useParams();
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [oneDayPrice, setOneDayPrice] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [maintDaysCap, setMaintDaysCap] = useState("");
    const iname = "Vehicle Rentel"
  
    useEffect(() => {
        axios
          .get(`http://localhost:8070/vehicle/get/${id}`)
          .then((response) => {
            const price = response.data.price;
            const maintDaysCap = response.data.maintDaysCap;
            setOneDayPrice(price);
            setMaintDaysCap(maintDaysCap);
            setTotalPrice(price * getReservationDays());
          })
          .catch((error) => {
            console.log(error);
          });
      }, [from, to]);
  
    const getReservationDays = () => {
      const fdateObj = new Date(from);
      const ldateObj = new Date(to);
      const diffTime = Math.abs(ldateObj - fdateObj);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    };
  
    const handleButtonClick = () => {
      updateRentStatus();
      updateMaintDaysCap();
    };
  
    const updateRentStatus = () => {
      const url = `http://localhost:8070/vehicle/update/${id}`;
  
      axios
        .put(url, { rentStatus: "true" })
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
    };
  
    const updateMaintDaysCap = () => {
        const url = `http://localhost:8070/vehicle/update/${id}`;
        const newMaintDaysCap = maintDaysCap + getReservationDays();
      
        axios
          .put(url, { maintDaysCap: newMaintDaysCap })
          .then((response) => {
            if (newMaintDaysCap >= 180) {
              axios.put(url, { maintenanceStatus: "Notify", maintDaysCap: "0" });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newReservation = {
        from,
        to,
        firstName,
        lastName,
        mobile,
        email,
        totalPrice,
      };
  
      axios
        .post("http://localhost:8070/vehicleReserve/add", newReservation)
        .then(() => {
          setFrom("");
          setTo("");
          setFirstName("");
          setLastName("");
          setMobile("");
          setEmail("");
        })
        .catch((err) => {
          alert(err);
        }); Swal.fire({
          icon: 'success',
          title: 'Check In details added',
          showConfirmButton: true,
          confirmButtonText: 'OK',
      }).then((result) => {
          if (result.isConfirmed) {
            // Navigate to the payment form using window.location.href
            window.location.href = `/PaymentForm/${totalPrice}/${iname}`;
          }
      }).catch(err => {
          Swal.fire({
            icon: 'error',
            title: `Error ${err}`,
            showConfirmButton: true,
            confirmButtonText: 'OK',
          });
        });
    };


    return(
        
        <div className = "res-form-body">
          <h3 className="veh-res-p2">Vehicle Reservation</h3>
        <form onSubmit={handleSubmit}>
            <div className = "res-from-form">
                <p className = "veh-res-from-text">From: 
                <input type = "date" min={new Date().toISOString().split('T')[0]} className = "box"  id="from-bx" required 
                onChange={(e)=>{
                    setFrom(e.target.value);
                }}/></p>

                <p className = "veh-res-to-textt">To: 
                <input type = "date" min={new Date().toISOString().split('T')[0]} className = "box" id = "to-bx" required
                onChange={(e)=>{
                    setTo(e.target.value);
                }}/></p>

                <p className="veh-res-fname-textt">First Name:  
                    <input type = "textbox" className = "box" id="fname-bx"
                    onChange={(e)=>{
                        setFirstName(e.target.value);
                    }}/>
                </p>

                <p className="veh-res-lname-textt">Last Name:  
                    <input type = "textbox" className = "box" id="lname-bx"
                    onChange={(e)=>{
                        setLastName(e.target.value);
                    }}/>
                </p>

                <p className="veh-res-mob-textt">Mobile:  
                    <input type = "textbox" className = "box" id="mob-bx"
                    onChange={(e)=>{
                        setMobile(e.target.value);
                        
                    }}/>
                </p>

                <p  className = "veh-res-email-textt">Email:  
                    <input type = "textbox" className = "box" id="email-bx"
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}/>
                </p>

                {isNaN(totalPrice) ? null : (
                    <p className="veh-res-totalprice-p">
                        Total Price: ${totalPrice}.00
                    </p>
                )}
                

                <button className = "btn" id = "veh-res-btn1"  onClick={handleButtonClick}>Pay</button>
                <Link to={`/vehicleRenting`}><button className = "btn" id = "veh-res-btn2">Cancel</button></Link>
            </div>
        </form>
        </div>
        
        
    )
}