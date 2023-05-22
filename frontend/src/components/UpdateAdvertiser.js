import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import styles from '../styles/registerAdvertiser.css'
import AdvertiserHeader from "./AdvertiserHeader";
import Swal from "sweetalert2";


export default function UpdateAdvertiser() {

    const[advertiser,setAdvertiser] = useState({});
    const advertiserId  = sessionStorage.getItem('userId');

   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [company, setCompany] = useState("");
   const [email, setEmail] = useState("");
   const [address, setAddress] = useState("");
   const [contactWork, setContactWork] = useState("");
   const [contactMobile, setContactMobile] = useState("");

   useEffect(() => {
      axios.get(`http://localhost:8070/advertiser/get/${advertiserId}`)
        .then((response) => {
          const advertiser = response.data;
          setFname(advertiser.fname);
          setLname(advertiser.lname);
          setCompany(advertiser.company);
          setEmail(advertiser.email);
          setAddress(advertiser.address);
          setContactWork(advertiser.contactWork);
          setContactMobile(advertiser.contactMobile);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [advertiserId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updateAdvertiser = {
        fname,
        lname,
        company,
        email,
        address,
        contactWork,
        contactMobile
    }

    axios.put(`http://localhost:8070/advertiser/update/${advertiserId}`, updateAdvertiser)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
            icon: 'success',
            title: 'Successfully Updated',
            showConfirmButton: true,
            confirmButtonText: 'Confirm',
          }).then(() => {
            // Redirect to another page
            window.location.href = "/advertiserProfile";
          });
    
          })
          .catch((error) => {
            console.log(error);
            // show error message
          });
      };


return (
    <div style={{backgroundColor:"#E6E6EE",height:"700px",position:"absolute"}}>

           <AdvertiserHeader/>

    <div className="container" style={{backgroundColor:"white",width : "1050px",marginLeft: "36%",marginRight: "8%", borderRadius: "10px",height:"600px",marginTop:"40px"}}>
          
        <h3 className="titleStyle" style = {{marginLeft: "10px"}}><br />UPDATE ADVERTISER DETAILS</h3>

        <div style = {{paddingLeft:"50px", paddingRight:"50px", marginLeft:"2px", marginRight: "2px"}}>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" style={{width:"400px",height:"40px",borderColor:"lightgray"}} value={fname} onChange={(e) => setFname(e.target.value)} /><br/>

                    </div>
                    <div className="col">
                        <input type="text" className="form-control" style={{width:"400px",height:"40px",borderColor:"lightgray"}} value={lname} onChange={(e) => setLname(e.target.value)} /><br/>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" className="form-control" id="company" style={{width:"870px",height:"40px",borderColor:"lightgray"}} value={company} onChange={(e) => setCompany(e.target.value)} /><br/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" style={{width:"870px",height:"40px",borderColor:"lightgray"}} id="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
            </div>

            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" style={{width:"870px",height:"40px",borderColor:"lightgray"}} value={address} onChange={(e) => setAddress(e.target.value)} /><br/>
            </div>

            <div className="form-group">
                <label htmlFor="contactNo">Contact No</label>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" style={{width:"400px",height:"40px",borderColor:"lightgray"}}  value={contactWork} onChange={(e) => setContactWork(e.target.value)} />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" style={{width:"400px",height:"40px",borderColor:"lightgray"}}  value={contactMobile} onChange={(e) => setContactMobile(e.target.value)} /><br/>
                    </div>
                    </div>
            </div>
            <br/>
            <div className = "btns">
            <button className = "register">Update</button>
                </div>

            </form>
        </div>
        </div>
       </div>

    )

}