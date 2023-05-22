import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./AdminHotelApprove.css";
import AdminHeader from "./AdminHeader";
import Swal from "sweetalert2";

export default function AdminHotelApprove(){

    const [pendingroom, setPendingRoom] = useState([]);

    useEffect(() => {
      function getPendingRoom() {
        axios
          .get("http://localhost:8070/hotel/viewPendingRoom")
          .then((res) => {
            setPendingRoom(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      }
      getPendingRoom();
    }, []);
  
      const deleteRoom = async (id) => {
        try {
          await axios.delete(`http://localhost:8070/hotel/deletependingRoom/${id}`);
          Swal.fire({
            icon: 'success',
            title: 'Room Deleted',
            showConfirmButton: true,
            confirmButtonText: 'OK',
          }).then(() => {
            window.location.reload(); // Reloads the current page after the alert is closed
          });
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: `Error Deleting data: ${error}`,
            showConfirmButton: true,
            confirmButtonText: 'OK',
          });
          console.log(error);
        }
      };
    
  
    
  
    const[name] = useState("");
    const[numberofRooms] = useState(0);
    const[bookedRooms] = useState(0);
    const[refundable] = useState("");
    const[wheelchair] = useState("");
    const[typeOfBeds] = useState("");
    const[noOfBeds] = useState(0);
    const[sleepers] = useState(0);
    const[view] = useState("");
    const[area] = useState(0);
    const[price] = useState(0);
    const[image] = useState("");
    const[hotelId] = useState("");
  
    const Approve = async (id) => {
      try {
        const res = await axios.get(`http://localhost:8070/hotel/viewpendingRoom/${id}`);
        const fetchroom = res.data;
        console.log(res.data);
    
        const newRoom = {
          name: fetchroom.name,
          numberofRooms: fetchroom.numberofRooms,
          bookedRooms: 0,
          wheelchair: fetchroom.wheelchair,
          refundable: fetchroom.refundable,
          typeOfBeds: fetchroom.typeOfBeds,
          noOfBeds: fetchroom.noOfBeds,
          sleepers: fetchroom.sleepers,
          view: fetchroom.view,
          area: fetchroom.area,
          price: fetchroom.price,
          image: fetchroom.image,
          hotelId: fetchroom.hotelId,
        };
        console.log(newRoom);
    
        await axios.post(`http://localhost:8070/hotel/addroom/${fetchroom.hotelId}`, newRoom);
        await axios.delete(`http://localhost:8070/hotel/deletependingRoom/${id}`);
    
        Swal.fire({
          icon: 'success',
          title: 'Room approved and moved to Hotel Room database',
          showConfirmButton: true,
          confirmButtonText: 'OK',
        }).then(() => {
          window.location.reload(); // refresh the page to reflect the changes
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `Error approving Room${error}`,
          showConfirmButton: true,
          confirmButtonText: 'OK',
        });
      }
    };
    
  
  
  
    return (
      <div className="hotelAppr-bg" style={{ backgroundColor: "#e6e6ee",position:"absolute" }}>
        <AdminHeader/>
        <div className="hotelAppr-cont">
          <p className="hotelAppr-topic">Approve New Hotel Rooms</p>
          <table>
            <thead>
              <tr>
                <th className="hotel-app-tabel-th">Room Name</th>
                <th className="hotel-app-tabel-th">No of Rooms</th>
                <th className="hotel-app-tabel-th"> Price</th>
                <th className="hotel-app-tabel-th">Details</th>
                <th className="hotel-app-tabel-th">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingroom.map((room) => (
                <tr key={room._id}>
                  <td>{room.name}</td>
                  <td>{room.numberofRooms}</td>
                  <td>{room.price}</td>
                  <td>
                    <p>Type of bed {room.typeOfBeds}</p>
                    <p>Phone Number 0{room.noOfBeds}</p>
                    <p>Sleepers {room.sleepers}</p>
                    <p>View {room.view}</p>
                    <p>Room are in sq ft {room.area}</p>
                  </td>
                  <td>
                    <button onClick={() => Approve(room._id)} className="btn-appro-hotel">
                      Approve
                    </button>
                    <button onClick={() => deleteRoom(room._id)} className="btn-delete-hotel">
                      Delete
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

