import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/registerAdvertiser.css";
import Swal from "sweetalert2";


export default function UpdateUserDetails() {
  const userId = sessionStorage.getItem('userId');
  const navigate = useNavigate()
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");

  useEffect(() =>{

   
    axios.get(`http://localhost:8070/user/get/${userId}`).then((response)=> {
       
        const user = response.data;
        setfname(user.fname);
        setlname(user.lname);
        setaddress(user.address);
        setphone(user.phone);
        setemail(user.email);
        console.log(response.data)

      });
    }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateUser = {
      fname,
      lname,
      email,
      address,
      phone,
    };

    axios
   .put(`http://localhost:8070/user/update/${userId}`, updateUser )
   .then((response) => {
     console.log(response.data);
     navigate("/UserProfile")
     alert("Successfully updated")
     // show success message or redirect to another page
   })
   .catch((error) => {
     console.log(error);
     // show error message
   });
}


return (
    <div style={{backgroundColor:"#E6E6EE",height:"900px",position:"absolute"}}>
    <div className="container" style={{backgroundColor:"white",width : "1000px",marginLeft: "30%",marginRight: "10%", borderRadius: "10px",height:"600px",marginTop:"30px"}}>
          
        <h3 className="titleStyle" style = {{marginLeft: "10px"}}><br />Customer Details Update</h3>

        <div style = {{paddingLeft:"50px", paddingRight:"50px", marginLeft:"2px", marginRight: "2px"}}>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
                <label htmlFor="email">Name</label>
                <input type="text" className="form-control" style={{width:"870px",height:"40px",borderColor:"lightgray"}} id="fname" value={fname} onChange={(e) => setfname(e.target.value)} /><br/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" style={{width:"870px",height:"40px",borderColor:"lightgray"}} id="email" value={email} onChange={(e) => setemail(e.target.value)} /><br/>
            </div>

            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" style={{width:"870px",height:"40px",borderColor:"lightgray"}} value={address} onChange={(e) => setaddress(e.target.value)} /><br/>
            </div>


            <div className="form-group">
                <label htmlFor="address">Phone</label>
                <input type="text" className="form-control" id="phone" style={{width:"870px",height:"40px",borderColor:"lightgray"}} value={phone} onChange={(e) => setphone(e.target.value)} /><br/>
            </div>
            <br/>
            <a  clasName="btn btn-warning" href={'/UserProfile/'+userId}> <button class="btn-edit12" className="bttnNext" style = {{width:"90px", textDecoration:"none",paddingLeft:"18px",marginTop:"0px",marginRight:"400px"}}>UPDATE</button></a>
            </form>
        </div>
        </div>
        </div>
    )

}