import React, {useState, useEffect} from "react";
import axios from "axios";




function AddOutdoorAct(){

    const [act_name, setAct_name] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [ticketprice, setTicketprice] = useState("");
    const [image, setImage] = useState("");
    const [maplocation, setMaplocation] = useState("");
    const [longdescription, setLongdescription] = useState("");



    function sendData(e){
        e.preventDefault();
        

        const newOutdoorAct ={
            act_name,
            location,
            description,
            ticketprice,
            image,
            maplocation,
            longdescription
        }

        console.log(newOutdoorAct)

        axios.post("http://localhost:8070/OutdoorAct/add", newOutdoorAct, {
          headers:{
            "Content-Type": "multipart/form-data"
          }
        }).then(()=>{
            alert("OutdoorAct Added");
        }).catch((err)=>{
            alert(err)
        });
    }

    return(
        
        <div className="container">
            <form onSubmit={sendData} enctype="multipart/form-data">
            
    <legend>CREATE NEW OUTDOORS & ADVENTURE EXPERIENCES</legend>
  <div className="mb-3">


    <label for="act_name" className="form-label">Activity Name</label>
    <input type="text" className="form-control" id="act_name" aria-describedby="emailHelp" placeholder="Enter Activity Name" onChange={(e)=>{
            setAct_name(e.target.value);
    }}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label for="location" className="form-label">Location</label>
    <input type="text" className="form-control" id="location" placeholder="Enter Location"  onChange={(e)=>{
            setLocation(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" placeholder="Enter Description"  onChange={(e)=>{
            setDescription(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="ticketprice" className="form-label">Ticket Price</label>
    <input type="text" className="form-control" id="ticketprice" placeholder="Enter Ticket Price"  onChange={(e)=>{
            setTicketprice(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="image" className="form-label">image</label><br/>
    
    <input type="file" className="form-control" id="image" name="image" placeholder="Enter image"  onChange={(e)=>{
            setImage(e.target.files[0]);
    }}required/>
  </div>


  <div className="mb-3">
    <label for="maplocation" className="form-label">Map location</label>
    <input type="text" className="form-control" id="maplocation" placeholder="Enter Map location"  onChange={(e)=>{
            setMaplocation(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="longdescription" className="form-label">Long Description</label>
    <input type="text" className="form-control" id="longdescription" placeholder="Enter Long Description"  onChange={(e)=>{
            setLongdescription(e.target.value);
    }}/>
  </div>



  <button type="submit" className="btn btn-primary">Submit</button>


</form>



        </div>



    )

}

export default AddOutdoorAct;