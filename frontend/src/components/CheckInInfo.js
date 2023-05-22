import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./CheckInInfo.css";
import rooms from "../img/room.jpg";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";
import Swal from "sweetalert2";

export default function CheckInInfo(){

    const { id } = useParams();
    const[hotelId,setHotelId] = useState("");
    const[Room,setRoom] = useState([]);
    const[from,setFrom] = useState("");
    const[to,setTo] = useState("");
    const[firstName,setFname] = useState("");
    const[lastName,setLname] = useState("");
    const[phoneNo,setMnumber] = useState("");
    const[email,setEmail] = useState("");
    const[noOfGuest,setGuests] = useState("");
    const userId = sessionStorage.getItem('userId');

    useEffect(() => {
        const fetchRoom = async () =>{
            const res = await axios.get(`http://localhost:8070/hotel/viewRoomDetails/${id}`);
            setRoom(res.data);
            console.log(res.data)
        };
        fetchRoom();
      }, [id]);

     

      function sendData(e){
        e.preventDefault();
        
        
        const newCheckin ={
            hotelId:Room.hotelId,
            userId:userId,
            from,
            to,
            firstName,
            lastName,
            phoneNo,
            email,
            noOfGuest,
            total:Math.ceil((new Date(to) - new Date(from)) / (1000 * 3600 * 24))*Room.price

        }

        console.log(newCheckin);
        axios.post(`http://localhost:8070/hotel/checkIn/${id}`,newCheckin).then(()=>{
            axios.put(`http://localhost:8070/hotel/updatebookedRoom/${id}`, {
                bookedRooms: Room.bookedRooms + 1,
                })
                .then(() => {
                setRoom((prevState) => ({
                    ...prevState,
                    bookedRooms: prevState.bookedRooms + 1,
                }));
                })
                .catch((err) => {
                alert(err);
                });
            Swal.fire({
                icon: 'success',
                title: 'Check In details added',
                showConfirmButton: true,
                confirmButtonText: 'OK',
            }).then((result) => {
                if (result.isConfirmed) {
                  // Navigate to the payment form using window.location.href
                  window.location.href = `/PaymentForm/${Math.ceil((new Date(to) - new Date(from)) / (1000 * 3600 * 24)) * Room.price}/${Room.name}`;
                }
            }).catch(err => {
                Swal.fire({
                  icon: 'error',
                  title: `Error ${err}`,
                  showConfirmButton: true,
                  confirmButtonText: 'OK',
                });
              });
            })
            .catch(err => {
              Swal.fire({
                icon: 'error',
                title: `Error ${err}`,
                showConfirmButton: true,
                confirmButtonText: 'OK',
              });
            });
      }

      
        const handleFromDateChange = (e) => {
            setFrom(e.target.value);
            
        };
      
        const handleToDateChange = (e) => {
            setTo(e.target.value);
            
        };


    return(
        <div className="backg">
            <UserHeader/>
        <div className="boxx">
            <div className="topcontent1">
                <img src={Room.image} className="imgroom"/>
                <p className="topic">{Room.name}</p>
            </div>
            <div className="topcontent2">
                <p className="topic2" style={{marginTop : '4%'}}>Availability</p>
                {Room.numberofRooms > Room.bookedRooms ? (
                    <div className="icon-with-text">
                        <span className="material-symbols-outlined">check_circle</span>
                        <div className="textroom">Available</div>
                    </div>
                    ) : (
                    <div className="icon-with-text">
                        <span className="material-symbols-outlined">dangerous</span>
                        <div className="textroom">Not Available</div>
                    </div>
                )}

                    <div>
                    <p className="topic2">Price</p>
                    <p style={{marginLeft:'4%'}}>  Per Night = {Room.price} $</p>
                    <p style={{marginLeft:'4%'}}>  Number of Nights = {Math.ceil((new Date(to) - new Date(from)) / (1000 * 3600 * 24))}</p>
                    <p style={{marginLeft:'4%'}}>Total Price = {Math.ceil((new Date(to) - new Date(from)) / (1000 * 3600 * 24))*Room.price} $</p>
                    </div>

                
                <p className="topic2">Features</p>
                <div style={{display: 'flex'}}>
                    <div className="icon-with-text">
                        <span className="material-symbols-outlined">crop</span>
                        <div className="textroom">Area {Room.area} sq ft</div>
                    </div>
                    <div className="icon-with-text">
                        <span className="material-symbols-outlined">group</span>
                        <div className="textroom">Sleepers {Room.sleepers}</div>
                    </div>
                </div>
                <div style={{display: 'flex'}}>
                    <div className="icon-with-text">
                        <span className="material-symbols-outlined">bed</span>
                        <div className="textroom">{Room.typeOfBeds}</div>
                    </div>
                    <div className="icon-with-text" style={{marginLeft :'11%'}}>
                        <span className="material-symbols-outlined">balcony</span>
                        <div className="textroom">{Room.view}</div>
                    </div>
                </div>
            </div>
            </div>
            <div className="u=2">
            <div className="contentform">
            <form className="divform" style={{paddingTop:'2%'}} onSubmit={sendData}>
                <div className="row mb-3">
                    <br/>
                    <label htmlFor="inputfrom" className="col-sm-2 col-form-label">From</label>
                    <div className="col-sm-10">
                    <input type="date" className="form-control" id="inputfrom" min={new Date().toISOString().split("T")[0]} required
                    onChange={handleFromDateChange}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputto" className="col-sm-2 col-form-label">To</label>
                    <div className="col-sm-10">
                    <input type="Date" className="form-control" id="inputto" min={from} required
                    onChange={handleToDateChange}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputfName" className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                    <input type="Text" className="form-control" id="inputfName" required
                    onChange={(e) =>{
                        setFname(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputlName" className="col-sm-2 col-form-label">Last Name</label>
                    <div className="col-sm-10">
                    <input type="Text" className="form-control" id="inputlName" required
                    onChange={(e) =>{
                        setLname(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputmNumber" className="col-sm-2 col-form-label">Mobile Number</label>
                    <div className="col-sm-10">
                    <input type="Text" className="form-control" id="inputlmNumber " required pattern="[0-9]{10}"
                    onChange={(e) =>{
                        setMnumber(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail" required
                    onChange={(e) =>{
                        setEmail(e.target.value);
                    }}
                    onBlur={(e) => {
                        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
                        if (!emailRegex.test(e.target.value)) {
                            alert("Please enter a valid email address.");
                            e.target.focus();
                        }
                    }}/>
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">Number of Guests</label>
                    <select htmlFor="inputState" className="form-select" 
                    onChange={(e) =>{
                        setGuests(e.target.value);
                    }}>
                    <option defaultValue={2}>Choose...</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    </select>
                </div>
                <button type="submit"
                    className={`primaryyy ${Room.numberofRooms <= Room.bookedRooms ? 'btn-disabled-checkin' : ''}`}  
                    style={{marginTop:'2%',marginBottom:'2%', marginLeft:'90%', background:'linear-gradient(90.72deg, #191970, rgba(25, 25, 112, 0.77))'}} 
                    disabled={Room.numberofRooms <= Room.bookedRooms}  
                    title={Room.numberofRooms <= Room.bookedRooms ? 'Rooms are not available' : ''}>
                        Pay now 
                </button>
                </form>
            </div>
            </div>
            <UserFooter/>
        </div>
    )
}