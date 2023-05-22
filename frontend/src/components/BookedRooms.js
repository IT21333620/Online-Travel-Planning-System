import React, {useEffect, useState} from "react";
import UserSideBar from "./UserSideBar";
import reserve from "../img/Reserved.jpg";
import axios from "axios";
import "./BookedRooms.css";
import Swal from "sweetalert2";

export default function BookedRooms(){

    const[checkIn,setCheckin] = useState([]);
    const [hotelNames, setHotelNames] = useState({});
    const userId = sessionStorage.getItem('userId');
    const [cancelRequestSent, setCancelRequestSent] = useState({});


    const handleCancel = async (id) => {
        try {
          const res = await axios.put(`http://localhost:8070/hotel/cancel/${id}`, {
            cancel: true,
          });
          setCancelRequestSent({ [id]: true });
          console.log(res.data);
          Swal.fire({
            icon: 'success',
            title: 'Request Send to hotel',
            showConfirmButton: true,
            confirmButtonText: 'OK',
        }) 

        } catch (err) {
          console.log(err); 
          Swal.fire({
            icon: 'error',
            title: `Error ${err}`,
            showConfirmButton: true,
            confirmButtonText: 'OK',
        })
        }
      };
    
    useEffect(() => {
        const fetchCheckin = async () => {
          const res = await axios.get(`http://localhost:8070/hotel/bookedRooms/${userId}`);
          setCheckin(res.data);
          console.log(res.data);
        };
        fetchCheckin();
      
        const fetchHotelNames = async () => {
          const res = await axios.get(`http://localhost:8070/hotel/gethotel`);
          const hotelNamesMap = {};
          res.data.forEach((hotel) => {
            hotelNamesMap[hotel._id] = hotel.hotelName;
          });
          setHotelNames(hotelNamesMap);
        };
        fetchHotelNames();
      }, [userId]);

    return(
        <div>
             <div className="hotelAppr-bg" style={{ backgroundColor: "#e6e6ee",position:"absolute" }}>
        <UserSideBar/>
        <div className="hotelAppr-cont">
        <div className="divimgresroom">
                <img src={reserve} className="imgupresroom"/>
                <div className="upresroom-cont1">
                    <p>Reserved</p>
                </div>
                <div className="upresroom-cont2">
                    <p>Rooms</p>
                </div>
        </div>
          <table>
            <thead>
              <tr>
                <th className="hotel-app-tabel-th">Hotel</th>
                <th className="hotel-app-tabel-th">Check In</th>
                <th className="hotel-app-tabel-th">Check Out</th>
                <th className="hotel-app-tabel-th">Amount</th>
                <th className="hotel-app-tabel-th">Actions</th>
              </tr>
            </thead>
            <tbody>
            {checkIn.map((user) => (
                <tr key={user._id}>
                  <td>{hotelNames[user.hotelId]}</td>
                  <td>{user.from}</td>
                  <td>{user.to}</td>
                  <td>$ {user.total}</td>
                  <td>
                  {cancelRequestSent[user._id] ? (
                      <span>Request Sent</span>
                    ) : (
                      <button className="btn-delete-hotel" onClick={() => handleCancel(user._id)}>
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
            ))}
            </tbody>
                      </table>
              </div>
          </div>
        </div>
    )
        
}