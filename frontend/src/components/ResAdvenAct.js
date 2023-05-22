import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ResAdvenAct() {
  const { id } = useParams();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [selectedAdventure, setSelectedAdventure] = useState("");
  const [date, setDate] = useState("");
  const [noOfDays, setNoOfDays] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [Ticketprice, setTicketprice] = useState([]);

  useEffect(() => {
    const fetchTicketprice = async () =>{
      const res = await axios.get(`http://localhost:8070/OutdoorAct/get/${id}`);
      setTicketprice(res.data);
      console.log(res.data)
    };
    fetchTicketprice();
  }, [id]);


  function sendData (e)  {
    e.preventDefault();

    const newResAdvenAct = {
      fname,
      lname,
      address,
      email,
      contactNo,
      selectedAdventure,
      date,
      noOfDays,
      from,
      to,
      total: Math.ceil((new Date(to) - new Date(from)) / (1000 * 3600 * 24))*Ticketprice.ticketprice
    }

    console.log(newResAdvenAct);

    axios
      .post("http://localhost:8070/ResAdvenAct/add", newResAdvenAct)
      .then(() => {
        alert("ResAdvenAct Added");
      })
      .catch((err) => {
        alert(err);
      });
  };

    return(
        
        <div className="container">
            <form onSubmit={sendData}>
            
    <legend>RESERVE YOUR OUTDOORS & ADVENTURE EXPERIENCES</legend>
  <div className="mb-3">


    <label for="fname" className="form-label">First Name</label>
    <input type="text" className="form-control" id="fname" aria-describedby="emailHelp" placeholder="Enter First Name" onChange={(e)=>{
            setFname(e.target.value);
    }}/>
    
  </div>

  <div className="mb-3">
    <label for="lname" className="form-label">lname</label>
    <input type="text" className="form-control" id="lname" placeholder="Enter lname"  onChange={(e)=>{
            setLname(e.target.value);
    }}/>
  </div>

  <div>
                    <p className="topic2">Price</p>
                    <p style={{marginLeft:'4%'}}>  Per Days = {Ticketprice.ticketprice} $</p>
                    <p style={{marginLeft:'4%'}}>  Number of Days = {Math.ceil((new Date(to) - new Date(from)) / (1000 * 3600 * 24))}</p>
                    <p style={{marginLeft:'4%'}}>Total Price = {Math.ceil((new Date(to) - new Date(from)) / (1000 * 3600 * 24))*Ticketprice.ticketprice} $</p>
                    </div>

  <div className="mb-3">
    <label for="address" className="form-label">address</label>
    <input type="text" className="form-control" id="address" placeholder="Enter address"  onChange={(e)=>{
            setAddress(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" placeholder="Enter Ticket Price"  onChange={(e)=>{
            setEmail(e.target.value);
    }}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label for="contactNo" className="form-label">Contact No</label>
    <input type="text" className="form-control" id="contactNo" placeholder="Enter Contact No"  onChange={(e)=>{
            setContactNo(e.target.value);
    }}/>
  </div>


  <div className="mb-3">
    <label for="selectedAdventure" className="form-label">Selected Adventure</label>
    <input type="text" className="form-control" id="selectedAdventure" placeholder="Enter Selected Adventure"  onChange={(e)=>{
            setSelectedAdventure(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="date" className="form-label">Date</label>
    <input type="date" className="form-control" id="date" placeholder="Enter Date"  onChange={(e)=>{
            setDate(e.target.value);
    }}/>
  </div>
  <div className="mb-3">
                    <br/>
                    <label htmlFor="inputfrom" className="form-label">From</label>
                    <div className="col-sm-10">
                    <input type="date" className="form-control" id="inputfrom" min={new Date().toISOString().split("T")[0]}
                    onChange={(e)=>{
                      setFrom(e.target.value);
              }}/>
                    </div>
                </div>


  <div className="mb-3">
    <label for="noOfDays" className="form-label">No Of Days</label>
    <input type="number" className="form-control" id="noOfDays" placeholder="Enter SNo Of Days"  onChange={(e)=>{
            setNoOfDays(e.target.value);
    }}/>
  </div>

                <div className="row mb-3">
                    <label htmlFor="inputto" className="col-sm-2 col-form-label">To</label>
                    <div className="col-sm-10">
                    <input type="Date" className="form-control" id="inputto" min={from}
                    onChange={(e)=>{
                      setTo(e.target.value);
              }}/>
                    </div>
                </div>

  <button type="submit" className="btn btn-primary">Submit</button>


</form>



        </div>



    )

}

export default ResAdvenAct;