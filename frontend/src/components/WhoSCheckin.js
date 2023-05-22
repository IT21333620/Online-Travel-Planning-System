import "./HotelOwnerHeader.css";
import React, {useEffect, useState} from "react";
import HotelOwnerHeader from "./HotelOwnerHeader";
import axios from "axios";
import Swal from "sweetalert2";

export default function WhoSCheckIn(){

    const [checkin, setCheckIn] = useState([]);
    const id = sessionStorage.getItem('userId');
  

    useEffect(() => {
        const fetchCheckin = async () =>{
            const res = await axios.get(`http://localhost:8070/hotel/viewCheckIn/${id}`);
            setCheckIn(res.data);
            console.log(res.data)
        };
        fetchCheckin();
      }, [id]);
      
      const [roomNameList, setRoomNameList] = useState([]);

        useEffect(() => {
        const fetchRoomNames = async () => {
            const promises = checkin.map((Checkin) => getRoomName(Checkin.roomId));
            const roomNames = await Promise.all(promises);
            setRoomNameList(roomNames);
            console.log(roomNameList);
        };
        fetchRoomNames();
        
        }, [checkin]);

        useEffect(() => {
          console.log(roomNameList);
        }, [roomNameList]);

        const deleteCheckIn = async (id) => {
          try {
            await axios.delete(`http://localhost:8070/hotel/deleteCheckIn/${id}`);
            Swal.fire({
              icon: 'success',
              title: 'Data deleted successfully',
              showConfirmButton: true,
              confirmButtonText: 'OK',
            }).then(() => {
              window.location.reload(); // Reloads the current page after the alert is closed
            });
          } catch (error) {
            Swal.fire({
              icon: 'error',
              title: `Error ${error}`,
              showConfirmButton: true,
              confirmButtonText: 'OK',
            })
            console.log(error);
          }
        };
       

      const getRoomName = async (roomId) => {
        const res = await axios.get(`http://localhost:8070/hotel/getroomname/${roomId}`);
        return res.data.name;
      };

    return(
        <div>
            <HotelOwnerHeader/>
            <div className="hotelAppr-cont" style={{position:"absolute",marginTop:"3%"}}>
          <p className="hotelAppr-topic" >Who's Check In</p>
          <table>
            <thead>
              <tr>
                <th className="hotel-app-tabel-th">Name</th>
                <th className="hotel-app-tabel-th">Room</th>
                <th className="hotel-app-tabel-th"> Check In</th>
                <th className="hotel-app-tabel-th">Check Out</th>
                <th className="hotel-app-tabel-th">Requset to Cancel</th>
                <th className="hotel-app-tabel-th">Cancel</th>
              </tr>
            </thead>
            <tbody>
            {checkin.map((Checkin, index) => (
                <tr key={checkin._id}>
                  <td>{Checkin.firstName} {Checkin.lastName}</td>
                  <td>{roomNameList[index]}</td>
                  <td>{Checkin.from}</td>
                  <td>{Checkin.to}</td>
                  <td>{Checkin.cancel ? 'Request to cancel' : 'Not requested'}</td>
                  <td>
                    <button onClick={() => deleteCheckIn(Checkin._id)} className="btn-delete-hotel">
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
                      </table>
              </div>
        </div>
    )
}