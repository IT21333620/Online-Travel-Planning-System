import React, {useState} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import mapimg from "../img/imgmap.png";
import "./AddnewHotel.css";
import UserHeader from "./UserHeader";
import Swal from "sweetalert2";

export default function AddnewHotel(){

    const[firstName,setFname] = useState("");
    const[lastName,setLname] = useState("");
    const[hotelName,sethotel] = useState("");
    const[description,setdescription] = useState("");
    const[checkingIn,setcheckingIn] = useState("");
    const[checkOut,setcheckOut] = useState("");
    const[minAge,setminAge] = useState("");
    const[pets,setPets] = useState("");
    const[policy,setPolicy] = useState("");
    const[googleMap,setMap] = useState("");
    const[address,setAddress] = useState("");
    const[phoneNo,setMnumber] = useState("");
    const[password,setPassword] = useState("");
    const[refund,setRefund] = useState("");
    const[email,setEmail] = useState("");
    const[price,setPrice] = useState("");
    const[wifi,setWifi] = useState(false);
    const[pool,setPool] = useState(false);
    const[laundry,setLaundry] = useState(false);
    const[park,setPark] = useState(false);
    const[ac,setac] = useState(false);
    const[frontDesk,setFrontdesk] = useState(false);
    const[restaurant,setRestaurant] = useState(false);
    const[bar,setBar] = useState(false);
    const[spa,setSpa] = useState(false);
    const [Image1, setImage1] = useState("");
    const [Image2, setImage2] = useState("");
    const [Image3, setImage3] = useState("");
    const [Image4, setImage4] = useState("");
    const [Image5, setImage5] = useState("");
    const [Image6, setImage6] = useState("");
    const [passwordError, setPasswordError] = useState('');

    const [error, setError]= useState('');

    function sendData(e){
        e.preventDefault();
    
        if (error) { 
            Swal.fire({
                icon: 'error',
                title: 'Invalid Details',
                showConfirmButton: true,
                confirmButtonText: 'OK',
            }) 
        } else if (passwordError) {
            Swal.fire({
                icon: 'warning',
                title: 'Miss matching Password',
                showConfirmButton: true,
                confirmButtonText: 'OK',
            }) 
        } else {
            const newhotel ={
                firstName,
                lastName, 
                hotelName, 
                description,
                checkingIn,
                checkOut,
                minAge,
                pets,
                policy,
                googleMap,
                address,
                phoneNo ,
                email, 
                password, 
                refund, 
                price,
                wifi,
                pool,
                laundry,
                park,
                ac,
                frontDesk,
                restaurant,
                bar,
                spa,
                Image1,
                Image2,
                Image3,
                Image4,
                Image5,
                Image6,

            }


            axios.post('http://localhost:8070/hotel/add', newhotel)
                .then(() => {
                    console.log(newhotel);
                    Swal.fire({
                        icon: 'success',
                        title: 'Hotel added',
                        showConfirmButton: true,
                        confirmButtonText: 'OK',
                    }) 
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: `Error ${err}`,
                        showConfirmButton: true,
                        confirmButtonText: 'OK',
                    })
                });
        }
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



const handleImage1Upload = async(e) => {
  const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage1(base64);
};

const handleImage2Upload = async(e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage2(base64);
};

const handleImage3Upload = async(e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage3(base64);
};

const handleImage4Upload = async(e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage4(base64);
};

const handleImage5Upload = async(e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage5(base64);
};

const handleImage6Upload = async(e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage6(base64);
};

    

      const MAX_WORDS = 100;
      const limit = 30;

      function handleDescriptionChange(e) {
        const words = e.target.value.trim().split(' ');
        if (words.length > MAX_WORDS) {
          e.target.value = words.slice(0, MAX_WORDS).join(' ');
        }
        setdescription(e.target.value);
      }

      function handlepolicy(e) {
        const words = e.target.value.trim().split(' ');
        if (words.length > limit) {
          e.target.value = words.slice(0, limit).join(' ');
        }
        setPolicy(e.target.value);
      }
      
      return(
        <div className="bgcont">
            <UserHeader/>
            <div className="fstdev">
                <Link to = "/" className="btnalreday" >Already Signup</Link>
            </div>
            <div className="formcont">
            <form className="formclass" onSubmit={sendData}>
                
                <div className="row mb-3">
                    <label htmlFor="inputFname" className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputFname" required
                    onChange={(e) =>{
                        setFname(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputLname" className="col-sm-2 col-form-label">Last name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputLname" required
                    onChange={(e) =>{
                        setLname(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputHotelName" className="col-sm-2 col-form-label">Hotel name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputHotelName" required
                    onChange={(e) =>{
                        sethotel(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="des" className="form-label">Description about the hotel</label>
                    <textarea className="form-control" id="des" rows="3" required placeholder="Word limit: 100"
                    onChange={handleDescriptionChange}/>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputinTime" className="col-sm-2 col-form-label">Check-In time period</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputinTime" required
                    onChange={(e) =>{
                        setcheckingIn(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputoutTime" className="col-sm-2 col-form-label">Check out before</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputoutTime" required
                    onChange={(e) =>{
                        setcheckOut(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputminAge" className="col-sm-2 col-form-label">Minimum Age to check in</label>
                    <div className="col-sm-10">
                    <input type="number" className="form-control" id="inputminAge" required
                    onChange={(e) =>{
                        setminAge(e.target.value);
                    }}/>
                    </div>
                </div>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Pets are</legend>
                    <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Allowed" checked
                        onChange={(e) =>{
                            setPets(e.target.value);
                        }}/>
                        <label className="form-check-label" htmlFor="gridRadios1">
                        Allowed
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Not Allowed"
                        onChange={(e) =>{
                            setPets(e.target.value);
                        }}/>
                        <label className="form-check-label" htmlFor="gridRadios2">
                        Not Allowed
                        </label>
                    </div>
                    </div>
                </fieldset>
                <div className="mb-3">
                    <label htmlFor="policy" className="form-label">Other policies</label>
                    <textarea className="form-control" id="policy" rows="3" required placeholder="Word limit: 30"
                    onChange={handlepolicy}/>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputcity" className="col-sm-2 col-form-label">Located City</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputcity" required
                    onChange={(e) =>{
                        setAddress(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputphone" className="col-sm-2 col-form-label">Phone No</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputphone" required pattern="[0-9]{10}"
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
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword1" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword1" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,}"
                    onChange={(e) =>{
                        setPassword(e.target.value);
                    }}/>
                    </div>
                <p className="topic3" style={{marginTop:"10px",marginLeft:"3%",color:"#191970"}}>Password must contain at least 8 characters</p>
                <p className="topic3" style={{marginLeft:"3%",color:"#191970"}}>One Capital letter</p>
                <p className="topic3" style={{marginLeft:"3%",color:"#191970"}}>One symbol or number</p>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPasswordr" className="col-sm-2 col-form-label">Re-Enter Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPasswordr"  required onChange= {(e) =>{
                        if (e.target.value !== password) {
                            setPasswordError('Passwords do not match');
                        } else {
                            setPasswordError('');
                        }}
                    }
                        />
                    </div>
                </div>
                <div className="row mb-3" style={{marginBottom:'2%',display: 'flex', flexDirection: 'row'}}>
                    <label htmlFor="inputState" className="col-sm-2 col-form-label" >Refund Policy</label>
                    <select htmlFor="inputState" className="form-select" style={{height:"40px",width:"300px"}} onChange={(e) => { setRefund(e.target.value); }} required>
                        <option defaultValue="Not refunable">Choose...</option>
                        <option value="Fully refundable">Fully refundable</option>
                        <option value={"Refunable"}>refundable</option>
                        <option value={"Not refunable"}>Not refunable</option>
                    </select>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputprice" className="col-sm-2 col-form-label">Price Range</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputprice" required 
                    onChange={(e) =>{
                        setPrice(e.target.value);
                    }}/>
                    </div>
                </div>
                <p className="topic2">Facilities</p>
                <div className="checkbox-column">
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wifi" onChange={(e) => { setWifi(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="wifi">WIFI</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="pool" onChange={(e) => { setPool(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="pool">Pool</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="laundry" onChange={(e) => { setLaundry(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="laundry">Laundry</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="park" onChange={(e) => { setPark(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="park">Parking</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="ac" onChange={(e) => { setac(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="ac">A/C</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="frontdesk" onChange={(e) => { setFrontdesk(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="frontdesk">24 h frontDesk</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"  id="restuarant" onChange={(e) => { setRestaurant(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="restuarant">Restaurant</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="bar" onChange={(e) => { setBar(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="bar">Bar</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="spa" onChange={(e) => { setSpa(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="spa">Spa</label>
                    </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="imageroom" className="form-label">Add Main image of Hotel</label><br/>
                    
                    <input type="file" className="form-control" id="imageroom1" name="imageroom" placeholder="Add image" onChange={(e) => handleImage1Upload(e)

                    }required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="imageroom" className="form-label">Add 2nd image of hotel</label><br/>
                    
                    <input type="file" className="form-control" id="imageroom2" name="imageroom" placeholder="Add image" onChange={(e) => handleImage2Upload(e)

                    }required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="imageroom" className="form-label">Add 3rd image of hotel</label><br/>
                    
                    <input type="file" className="form-control" id="imageroom3" name="imageroom" placeholder="Add image" onChange={(e) => handleImage3Upload(e)

                    }required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="imageroom" className="form-label">Add 4th image of hotel</label><br/>
                    
                    <input type="file" className="form-control" id="imageroom4" name="imageroom" placeholder="Add image" onChange={(e) => handleImage4Upload(e)

                    }required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="imageroom" className="form-label">Add 5th image of hotel</label><br/>
                    
                    <input type="file" className="form-control" id="imageroom5" name="imageroom" placeholder="Add image" onChange={(e) => handleImage5Upload(e)

                    }required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="imageroom" className="form-label">Add 6th image of hotel</label><br/>
                    
                    <input type="file" className="form-control" id="imageroom6" name="imageroom" placeholder="Add image" onChange={(e) => handleImage6Upload(e)
                    }required/>
                </div>
                <br/>
                <div style={{height:'375px'}}>
                    <div className="mapleft">
                    <p className="topic2">Add GoogleMaps</p>
                    <p className="topic3">1. Open Google Maps</p>
                    <p className="topic3">2. Find your location in Google Maps</p>
                    <p className="topic3">3. Click share button</p>
                    <p className="topic3">4. Go to "Embed a map"</p>
                    <p className="topic3">5. Copy only the https://www.....</p>
                    <p className="topic3">6. Do not copy "width=600, height = 450.........."</p>
                    <p className="topic3">7. Paste URL here</p>
                    <div className="row mb-3">
                        <label htmlFor="inputurl" className="col-sm-2 col-form-label">URL</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputurl"
                        onChange={(e) =>{
                            if (e.target.value.includes('"')) {
                                setError("Input cannot contain a double quote (')");
                              } else {
                                setError("");
                                setMap(e.target.value);
                              }
                        }}/>
                        </div>
                    </div>
                    </div>
                    <div className="mapright">
                        <img src={mapimg} style={{height:'370px', width:'370px'}}/>
                    </div>
                    
                </div>
                   
                {error && <p className="topic2" style={{color:"red"}}>{error}</p>}
                {passwordError && <p className="topic2" style={{color:"red"}}>{passwordError}</p>}
                <button type="submit" className="btnsbt">Add hotel</button>
                </form>
            </div>
        </div>
      )
}