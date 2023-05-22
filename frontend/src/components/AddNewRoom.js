import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AdminHotelApprove.css";
import HotelOwnerHeader from "./HotelOwnerHeader";
import Swal from "sweetalert2";


export default function AddNewRoom(){

    const id = sessionStorage.getItem('userId');

    const[name,setName] = useState("");
    const[numberofRooms,setNumberofRooms] = useState(0);
    const[wheelchair,setWheelchair] = useState("");
    const[refundable,setRefundable] = useState("");
    const[typeOfBeds,setTypeofBeds] = useState("");
    const[noOfBeds,setnoOfBeds] = useState(0);
    const[sleepers,setSleepers] = useState(0);
    const[view,setView] = useState("");
    const[area,setArea] = useState(0);
    const[price,setPrice] = useState(0);
    const [image, setImage] = useState("");
    const[hotelId,setHotel] = useState("");

    useEffect(() => {
        setHotel(id);
      }, [id]);
  
    function sendData(e){
        e.preventDefault();

        const newRoom ={
            name,
            numberofRooms,
            wheelchair,
            refundable,
            typeOfBeds,
            noOfBeds,
            sleepers,
            view,
            area,
            price,
            image,
            hotelId

        }

        axios.post(`http://localhost:8070/hotel/pendingroom/${id}`,newRoom).then(()=>{
            Swal.fire({
                icon: 'success',
                title: 'Room added wait for admin to approve',
                showConfirmButton: true,
                confirmButtonText: 'OK',
            }) 
        }).catch((err)=>{
            Swal.fire({
                icon: 'error',
                title: `Error ${err}`,
                showConfirmButton: true,
                confirmButtonText: 'OK',
            })
        })
      }

      function convertToBase64(file) {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            const base64 = fileReader.result.toString(); // convert result to string
            resolve(base64);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      }

      const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setImage(base64);
      };
      

    
    return (
        <div>
      <div className="hotelAppr-bg" style={{ backgroundColor: "#e6e6ee",position:"absolute", height:"850px"}}>
        <HotelOwnerHeader/>
        <div className="hotelAppr-cont" style={{paddingTop:"2%"}}>
        <form className="divform" onSubmit={sendData}>
                <div className="row mb-3">
                    <br/>
                    <label htmlFor="inputRname" className="col-sm-2 col-form-label">Name of the room</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputRname" style={{ width: "100%" ,height:"40px"}} required
                    onChange={(e) =>{
                        setName(e.target.value);}}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNoofRooms" className="col-sm-2 col-form-label">Number of rooms</label>
                    <div className="col-sm-10">
                    <input type="Number" className="form-control" id="inputNoofRooms" required
                     onChange={(e) =>{
                        setNumberofRooms(e.target.value);}}/>
                    </div>
                </div>
                <div className="row mb-3" style={{ display: 'flex', flexDirection: 'row' }}>
                    <label htmlFor="inputWheelChair" className="col-sm-2 col-form-label" style={{ marginRight: '1rem' }}>Wheelchair </label>
                    <select htmlFor="inputWheelChair" className="form-select" style={{height:"40px",width:"300px"}} required
                    onChange={(e) =>{
                        setWheelchair(e.target.value);
                    }}>
                    <option defaultValue="Not Accessible">Choose...</option>
                    <option value="Accessible">Accessible</option>
                    <option value="Not Accessible">Not Accessible</option>
                    </select>
                </div>
                <div className="row mb-3" style={{ display: 'flex', flexDirection: 'row' }}>
                    <label htmlFor="inputRefunable" className="col-sm-2 col-form-label" style={{ marginRight: '1rem' }}>Refund Policy</label>
                    <select htmlFor="inputRefunable" className="form-select" style={{height:"40px",width:"300px"}} required
                    onChange={(e) =>{
                        setRefundable(e.target.value);
                    }}>
                    <option defaultValue="">Choose...</option>
                    <option value="Fully Refunable">Fully Refunable</option>
                    <option value="Not Refunable">Not Refunable</option>
                    </select>
                </div>
                <div className="row mb-3" style={{ display: 'flex', flexDirection: 'row' }}>
                    <label htmlFor="inputtypeOfBed" className="col-sm-2 col-form-label" style={{ marginRight: '1rem' }}>Type of beds</label>
                    <select htmlFor="inputtypeOfBed" className="form-select" style={{height:"40px",width:"300px"}} required
                    onChange={(e) =>{
                        setTypeofBeds(e.target.value);
                    }}>
                    <option defaultValue="">Choose...</option>
                    <option value="Double/Full">Double/Full</option>
                    <option value="Queen">Queen</option>
                    <option value="King">King</option>
                    </select>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNoofBeds" className="col-sm-2 col-form-label">Mobile Number</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputlmNumber " style={{ width: "100%" ,height:"40px",marginTop:"2%"}} required pattern="[0-9]{10}"
                    onChange={(e) =>{
                        setnoOfBeds(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputsleepers" className="col-sm-2 col-form-label">Sleepers</label>
                    <div className="col-sm-10">
                    <input type="Number" className="form-control" id="inputsleepers" required
                    onChange={(e) =>{
                        setSleepers(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3" style={{ display: 'flex', flexDirection: 'row' }}>
                    <label htmlFor="inputview" className="col-sm-2 col-form-label" style={{ marginRight: '1rem' }}>View</label>
                    <select htmlFor="inputview" className="form-select" style={{height:"40px",width:"300px"}} required
                    onChange={(e) =>{
                        setView(e.target.value);
                    }}>
                    <option defaultValue="">Choose...</option>
                    <option value="Bay View">Bay View</option>
                    <option value="City View">City View</option>
                    <option value="Mountain view">Mountain view</option>
                    <option value="Lake View">Lake View</option>
                    <option value="Ocean View">Ocean View</option>
                    </select>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputArea" className="col-sm-2 col-form-label">Room area in sq ft</label>
                    <div className="col-sm-10">
                    <input type="number" className="form-control" id="inputArea" style={{ width: "100%" ,height:"40px",marginTop:"2%"}} required
                    onChange={(e) =>{
                        setArea(e.target.value);
                    }}/>
                    </div>
                </div>
                
                <div className="row mb-3">
                    <label htmlFor="inputPrice" className="col-sm-2 col-form-label">Per night Price</label>
                    <div className="col-sm-10">
                    <input type="number" className="form-control" id="inputPrice" style={{ width: "100%" ,height:"40px"}}  required
                    onChange={(e) =>{
                        setPrice(e.target.value);
                    }}/>
                    </div>

                </div>
                <div className="mb-3">
                    <label htmlFor="imageroom" className="form-label">Add a image of Room</label><br/>
                    
                    <input type="file" className="form-control" id="imageroom" name="imageroom" placeholder="Add image" onChange={(e) => handleFileUpload(e)

                    }required/>
                </div>
                <button type="submit" className="primaryyy" style={{marginTop:'2%',marginBottom:'2%', marginLeft:'90%', background:'linear-gradient(90.72deg, #191970, rgba(25, 25, 112, 0.77))'}}>Add Room</button>
                </form>
        </div>
      </div>
      </div>
      )
}