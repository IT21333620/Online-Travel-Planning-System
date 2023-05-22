import React, {useEffect, useState} from "react";
import axios from "axios";
import "./EditHotel.css";
import roomdoor from "../img/roomdoor.jpg";
import HotelOwnerHeader from "./HotelOwnerHeader";
import Swal from "sweetalert2";

export default function EditHotel(){

    const [error, setError]= useState('');
    const id = sessionStorage.getItem('userId');

    const [hotelName, setHotelName] = useState("");
    const [checkingIn, setCheckIn] = useState("");
    const [checkOut, setCheckOutTime] = useState("");
    const [minAge, setMinAge] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [description, setDescription] = useState("");
    const [googleMap, setgoogleMap] = useState("");

      useEffect(() => {
        axios.get(`http://localhost:8070/hotel/view/${id}`).then((response) => {
          const hotel = response.data;
          setHotelName(hotel.hotelName);
          setCheckIn(hotel.checkingIn);
          setCheckOutTime(hotel.checkOut);
          setMinAge(hotel.minAge);
          setPhoneNo(hotel.phoneNo);
          setDescription(hotel.description);
          setgoogleMap(hotel.googleMap);
          console.log(response.data);
        });
      }, [id]);
      

      const handleSubmit = (e) => {
        e.preventDefault();

        if (error) {
          alert('Invalid Details'); 
        } else {
          const updateData = {
            hotelName,
            checkingIn,
            checkOut,
            minAge,
            phoneNo,
            description,
            googleMap,
          };
          axios
            .put(`http://localhost:8070/hotel/updatehotel/${id}`, updateData)
            .then((response) => {
              console.log(response.data);
              Swal.fire({
                icon: 'success',
                title: 'Successfully updated',
                showConfirmButton: true,
                confirmButtonText: 'OK',
            }) 
              // show success message or redirect to another page
            })
            .catch((error) => {
              Swal.fire({
                icon: 'error',
                title: `Error ${error}`,
                showConfirmButton: true,
                confirmButtonText: 'OK',
            })
            });
        }
      };

    return(
        <div style={{backgroundColor:'#e6e6ee', height:'1080px'}}>
          <HotelOwnerHeader/>
            <div className="divimgroom">
                <img src={roomdoor} className="imguproom"/>
                <div className="uproom-cont1-edit">
                    <p>You are loged in as a</p>
                    <b><p>HOTEL OWNER</p></b>
                </div>
                <div className="uproom-cont2-edit">
                    <p>Add rooms to your hotel to</p>
                    <p>Begin earn money</p>
                </div>
            </div>
            <div className="uproom-form">
            <form className="row g-3" style={{padding:'2%'}} onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="updatename" className="form-label">Hotel Name</label>
                    <input type="text" className="form-control" id="updatename" value={hotelName} onChange={(e) => setHotelName(e.target.value)} required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="updatecheckin" className="form-label">Check In Time</label>
                    <input type="text" className="form-control" id="updatecheckin" value={checkingIn} onChange={(e) => setCheckIn(e.target.value)} required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="updatecheckout" className="form-label">Check Out Time </label>
                    <input type="text" className="form-control" id="updatecheckout" value={checkOut} onChange={(e) => setCheckOutTime(e.target.value)} required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="updateminAge" className="form-label" >Minimum Age</label>
                    <input type="number" className="form-control" id="updateminAge" value={minAge} onChange={(e) => setMinAge(e.target.value)} required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="updatephoneNo" className="form-label" >Phone No</label>
                    <input type="text" className="form-control" id="updatephoneNo" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} pattern="[0-9]{10}" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="updateDescription" className="form-label" >Description</label>
                    <textarea className="form-control" id="updateDescription" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                </div>
                <div className="col-12">
                    <label htmlFor="updateURL" className="form-label" >Google Map URL</label>
                    <input type="text" className="form-control" id="updateURL" value={googleMap} style= {{height:"50px"}}required onChange={(e) => {
                      if (e.target.value.includes('"')) {
                                setError("Input cannot contain a double quote (')");
                              } else {
                                setError("");
                                setgoogleMap(e.target.value);
                              }} 
                              }/>
                </div>
                {error && <p className="topic2" style={{color:"red"}}>{error}</p>}
                <div className="col-12">
                    <button type="submit" className="btnupdate-hotel">Update</button>
                </div>
                </form>
            </div>
        </div>
    )
}

