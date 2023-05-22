import React, {useState, useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams, Link } from "react-router-dom";
//import styles from '../registerDestinationmanager.css'
//import destinationmanagerHeader from "./DestinationmanagerHeader";

export default function UpdateDestinationmanager() {

    const[destinationmanager,setDestinationmanager] = useState({});
   //const { id } = useParams();
   const id = sessionStorage.getItem('userId');

   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [address, setAddress] = useState("");
   const [email, setEmail] = useState("");
   const [contactNo, setContactNo] = useState("");
   const [age, setAge] = useState("");
   const [password, setPassword] = useState("");

   useEffect(() => {
      axios.get(`http://localhost:8070/destinationmanager/get/${id}`)
        .then((response) => {
          const destinationmanager = response.data;
          setFname(destinationmanager.fname);
          setLname(destinationmanager.lname);
          setAddress(destinationmanager.address);
          setEmail(destinationmanager.email);
          setContactNo(destinationmanager.contactNo);
          setAge(destinationmanager.age);
          setPassword(destinationmanager.password);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updateDestinationmanager = {
        fname,
        lname,
        address,
        email,
        contactNo,
        age,
        password
    }

    axios.put(`http://localhost:8070/destinationmanager/update/${id}`, updateDestinationmanager)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
            icon: 'success',
            title: 'Successfully Updated',
            showConfirmButton: true,
            confirmButtonText: 'Confirm',
          }).then(() => {
            // Redirect to another page
            window.location.href = "/destinationManagerProfile";
          });
            // show success message or redirect to another page
          })
          .catch((error) => {
            console.log(error);
            // show error message
          });
      };


return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card" style={{ width: "900px", padding: "20px", borderRadius: "10px" }}>
        <h3 className="titleStyle"><br />Update Destination Manager Details</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">First Name</label>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" value={fname} onChange={(e) => setFname(e.target.value)} /><br/>

                    </div>
                    <div className="col">
                    <label htmlFor="name">Last Name</label>
                        <input type="text" className="form-control"  value={lname} onChange={(e) => setLname(e.target.value)} /><br/>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} /><br/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
            </div>

            <div className="form-group">
                <label htmlFor="contactno">Contact No</label>
                <input type="text" className="form-control" id="contactno" value={contactNo} onChange={(e) => setContactNo(e.target.value)} /><br/>
            </div>

            <div className="form-group">
                <label htmlFor="contactNo">age</label>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div class="col">
                    <label htmlFor="email">Password</label>
                        <input type="text" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
                    </div>
                    </div>
                    
            </div>

            <div className = "btns">
                <button type="submit" className = "register">Update</button>
                </div>

            </form>
        </div>
        </div>

    )

}