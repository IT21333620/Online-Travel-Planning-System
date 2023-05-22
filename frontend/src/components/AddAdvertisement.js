import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useParams, Link } from "react-router-dom";
import './ViewAdvertisers.css';
import AdvertiserHeader from "./AdvertiserHeader";
import Swal from "sweetalert2";

export default function AddAdvertisement() {

   const { advertiserId } = useParams();
   const {price} = useParams();
   //const [packageNo, setPackageNo] = useState("");
   const [category, setCategory] = useState("");
   const [website, setWebsite] = useState("");
   const [time, setTime] = useState("");
   const [image, setImage] = useState("");
   const [note, setNote] = useState("");
   const { packageNo } = useParams();
   const [totalFee, setTotalFee] = useState(price);
   const itemname = "Advertisement"
   
   // Calculate total fee based on package and time selected
   useEffect(() => {
    let fee = price;

    if (time === "Yes") {
       fee = parseInt(price, 10) + 10;
    }

    setTotalFee(fee);
    }, [price, time]);
   
    
   function sendData(e) {
    e.preventDefault();
 
    const newAdvertisement = {
        packageNo,
        category,
        website,
        time,
        image,
        note,
        price,
        advertiserId
    }
     console.log(newAdvertisement)
     axios.post(`http://localhost:8070/advertisement/addAdvertisement/${advertiserId}`, newAdvertisement, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Advertisement Added',
            showConfirmButton: true,
            confirmButtonText: 'Confirm',
          }).then((result) => {
            if (result.isConfirmed) {
                // Navigate to the payment form using window.location.href
                window.location.href = `/PaymentForm/${totalFee}/${itemname}`;
              }
          });

      }).catch((err) => {
        alert(err);
      });
      
   }

    return (

        <div style={{backgroundColor:"#E6E6EE",height:"900px",position:"absolute"}}>

           <AdvertiserHeader/>

            {/* <div className = "slideshow" style = {{marginLeft:"45px"}}>
                <img className = "AdimageStyle" src={images[currentIndex]} alt="Slideshow Image" />
                <button className = "previous" onClick={handlePrev}>&lt;</button>
                <button className = "Adnext" onClick={handleNext}> &gt;</button>
            </div> */}

            <div className="container" style={{backgroundColor:"white",width : "1050px",marginLeft: "36%",marginRight: "8%",height: "780px", borderRadius: "10px", marginTop:"30px"}}>

            <h4 className = "titleStyle" style = {{marginLeft: "10px"}}><br/>ADD ADVERTISEMENT</h4>

            <div style = {{paddingLeft:"50px", paddingRight:"50px", marginLeft:"2px", marginRight: "2px"}}>

            <form onSubmit = {sendData} enctype="multipart/form-data" style = {{margin:"30px"}}>
                <div class="form-group" style={{marginTop:"2px"}}>
                    <label for="package">Package</label>
                    <input type="text" class="form-control" id="package" defaultValue={packageNo} style={{width:"870px",height:"40px",borderColor:"lightgray"}} disabled/><br/>
                </div>

                <div class="form-group" >
                    <label for="category">Category</label>
                    <select class="form-control" id="category" placeholder="Select" style={{width:"870px",height:"40px"}} onChange = {(e) => {
                                setCategory(e.target.value);
                            }}  required><br/>
                        <option defaultValue="Not refunable">Choose...</option>
                        <option value = "Property">Property</option>
                        <option value = "Education">Education</option>
                        <option value = "Electronics">Electronics</option>
                        <option value = "Vehicles">Vehicles</option>
                        <option value = "Services">Services</option>
                        <option value = "Other">Other</option>
                    </select><br/>

                </div>

                <div class="form-group">
                    <label for="website">Website</label>
                    <input type="text" class="form-control" id="website" style={{width:"870px",height:"40px",borderColor:"lightgray"}} placeholder="Enter url" onChange = {(e) => {
                                setWebsite(e.target.value);
                            }}  required/><br/>
                </div>

                <div class="form-group">
                    <label for="image" class="form-label">Attach Advertisement</label>
                    <input type="file" class="form-control" id="image" name = "image" style={{width:"870px"}} onChange = {(e) => {
                                setImage(e.target.files[0]);
                            }} required/><br/><br/>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="time" id="No" value="No" checked={time === "No"}  onChange = {(e) => {
                                setTime(e.target.value);
                            }} />
                    <label class="form-check-label" for="yes">
                         Default Time (25 days)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="time" id="Yes" value="Yes" checked={time === "Yes"} onChange = {(e) => {
                                setTime(e.target.value);
                            }}/>
                    <label class="form-check-label" for="no">
                        Publish 30 days (Additional fees apply)
                    </label>
                </div>

                <div class="form-group">
                    <label for="note"><br/>Notes</label>
                    <textarea class="form-control" id="note" rows="3" style={{width:"870px",height:"40px"}} onChange = {(e) => {
                                setNote(e.target.value);
                            }} ></textarea><br/>
                </div>

                <div class="form-group">
                    <label for="price">Total fee ($)</label>
                    <input type="text" class="form-control" id="price" value={totalFee} style={{width:"870px",height:"40px",borderColor:"lightgray"}} disabled/><br/><br/>
                </div>

                {/* <div className = "btns">
                <button type="submit" className = "bttnNext" style={{float:"inherit",width:"150px"}}>SAVE</button>
                
                </div> */}

                 <button type="submit" className="bttnNext" style = {{width:"150px", textDecoration:"none", paddingRight:"90px", marginRight:"360px", paddingLeft:"50px",marginTop:"-6px"}}>
                    SAVE
                </button>
                
                </form>
                </div>

</div>
        </div>
    )
}