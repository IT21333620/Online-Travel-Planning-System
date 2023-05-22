import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



function EditOutdoor(){

  const[outdooracts,setOutdoorActs] = useState([]);

  const{id}=useParams();

    const [act_name, setAct_name] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [ticketprice, setTicketprice] = useState("");
    const [image, setImage] = useState("");
    const [maplocation, setMaplocation] = useState("");
    const [longdescription, setLongdescription] = useState("");

    useEffect(() =>{

    
      axios.get(`http://localhost:8070/OutdoorAct/get/${id}`).then((res)=> {
         
          const outdooracts = res.data;
          setAct_name(outdooracts.act_name);
          setLocation(outdooracts.location);
          setDescription(outdooracts.description);
          setTicketprice(outdooracts.ticketprice);
          setImage(outdooracts.image);
          setMaplocation(outdooracts.maplocation);
          setLongdescription(outdooracts.longdescription);

          
          
          console.log(res.data)

        });
      }, [id]);

      const handleSubmit = (e) =>{

        e.preventDefault();
        const updateoutdooracts = {
                act_name,
                location,
                description,
                ticketprice,
                image,
                maplocation,
                longdescription
            
        };
        
        axios
        .put(`http://localhost:8070/OutdoorAct/update/${id}`, updateoutdooracts)
        .then((response) => {
          console.log(response.data);
          alert("Successfully updated")
      
        })
        .catch((error) => {
          console.log(error);
          // show error message
        });
    };

    return(
        
        <div className="container">
            <form  enctype="multipart/form-data">
            
    <legend>EDIT OUTDOORS & ADVENTURE EXPERIENCES</legend>
  <div className="mb-3">


    <label for="act_name" className="form-label">Activity Name</label>
    <input type="text" className="form-control" id="act_name" aria-describedby="emailHelp" value={act_name} placeholder="Enter Activity Name" onChange={(e)=>{
            setAct_name(e.target.value);
    }}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label for="location" className="form-label">Location</label>
    <input type="text" className="form-control" id="location" value={location} placeholder="Enter Location"  onChange={(e)=>{
            setLocation(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" value={description} placeholder="Enter Description"  onChange={(e)=>{
            setDescription(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="ticketprice" className="form-label">Ticket Price</label>
    <input type="text" className="form-control" id="ticketprice" value={ticketprice} placeholder="Enter Ticket Price"  onChange={(e)=>{
            setTicketprice(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="image" className="form-label">image</label><br/>
    
    <input type="file" className="form-control" id="image" name="image"  placeholder="Enter image"  onChange={(e)=>{
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


  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>


</form>



        </div>



    )

}

export default EditOutdoor;