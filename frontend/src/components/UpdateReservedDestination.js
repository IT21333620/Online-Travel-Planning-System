import React, {useState, useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams, Link } from "react-router-dom";


export default function UpdateReservedDestination() {

   const[destinationReserve,setDestinationReseve] = useState({});
   const { id } = useParams();

   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [address, setAddress] = useState("");
   const [email, setEmail] = useState("");
   const [contactNo, setContactNo] = useState("");
   const [selectedDestination, setSelectedDestination] = useState("");
   const [date, setDate] = useState("");
   const [noOfDays, setNoOfDays] = useState("");
   const [noOfTravelers, setNoOfTravelers] = useState("");
   const [totalTicketPrice, setTotalTicketPrice] = useState("");

   useEffect(() => {
      axios.get(`http://localhost:8070/destinationReserve/get/${id}`)
        .then((response) => {
          const destinationReserve = response.data;
          setFname(destinationReserve.fname);
          setLname(destinationReserve.lname);
          setAddress(destinationReserve.address);
          setEmail(destinationReserve.email);
          setContactNo(destinationReserve.contactNo);
          setSelectedDestination(destinationReserve.selectedDestination);
          setDate(destinationReserve.date);
          setNoOfDays(destinationReserve.noOfDays);
          setNoOfTravelers(destinationReserve.noOfTravelers);
          setTotalTicketPrice(destinationReserve.totalTicketPrice);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updateDestinationReseve = {
        fname,
        lname,
        address,
        email,
        contactNo,
        selectedDestination,
        date,
        noOfDays,
        noOfTravelers,
        totalTicketPrice

    }

    axios.put(`http://localhost:8070/destinationReserve/update/${id}`, updateDestinationReseve)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
            icon: 'success',
            title: 'Updated Successfully',
            showConfirmButton: true,
            confirmButtonText: 'Confirm',
          }).then(() => {
            // Redirect to another page
            window.location.href = "/destinationmanagerViewReservedDestination";
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
      
        
        <h3 className="titleStyle"><br />Update Reserved Destination Details</h3>
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
                <label htmlFor="">ContactNo</label>
                <input type="text" className="form-control" id="contactno" value={contactNo} onChange={(e) => setContactNo(e.target.value)} /><br/>
            </div>

            <div className="form-group">
                <label htmlFor="contactNo">Selected destination</label>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" value={selectedDestination} onChange={(e) => setSelectedDestination(e.target.value)} />
                    </div>
                    
                    <div class="col">
                        <label htmlFor="contactNo">Date</label>
                        <input type="text" class="form-control" value={date} onChange={(e) => setDate(e.target.value)} /><br/>
                    </div>
                    <div class="col">
                        <label htmlFor="noOfDays">No Of Days</label>
                        <input type="number" class="form-control" value={noOfDays} onChange={(e) => setNoOfDays(e.target.value)} /><br/>
                    </div>
                    </div>

                    <div className="form-group">
                <label htmlFor="">No of Travelers</label>
                <input type="number" className="form-control" value={noOfTravelers} onChange={(e) => setNoOfTravelers(e.target.value)} /><br/>
            </div>

                      <div class="col">
                        <label htmlFor="contactNo">Total Ticket Price</label>
                        <input type="number" class="form-control" value={totalTicketPrice} onChange={(e) => setTotalTicketPrice(e.target.value)} /><br/>
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