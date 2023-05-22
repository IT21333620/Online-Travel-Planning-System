import React,{useState} from "react"
import axios from "axios";
import "./CreateDestination.css";
import { Link} from 'react-router-dom';


export default function CreateDestination(){


    const [packageType, setPackageType] = useState("");
    const [image, setImage] = useState("");
    const [packageDescription, setPackageDescription] = useState("");
    const [location1, setLocation1] = useState("");
    //const [location1Img, setLocation1Img] = useState("");
    const [locationDescription1, setLocationDescription1] = useState("");
    // const [location1PriceLocal, setLocation1PriceLocal] = useState("");
    // const [location1PriceForeign, setLocation1PriceForeign] = useState("");
    const [location1map, setLocation1Map] = useState("");
    const [location2, setLocation2] = useState("");
    //const [location2Img, setLocation2Img] = useState("");
    const [locationDescription2, setLocationDescription2] = useState("");
    // const [location2PriceLocal, setLocation2PriceLocal] = useState("");
    // const [location2PriceForeign, setLocation2PriceForeign] = useState("");
    const [location2map, setLocation2Map] = useState("");
    const [location3, setLocation3] = useState("");
    //const [location3Img, setLocation3Img] = useState("");
    const [locationDescription3, setLocationDescription3] = useState("");
    // const [location3PriceLocal, setLocation3PriceLocal] = useState("");
    // const [location3PriceForeign, setLocation3PriceForeign] = useState("");
    const [location3map, setLocation3Map] = useState("");
    const [location4, setLocation4] = useState("");
    //const [location4Img, setLocation4Img] = useState("");
    const [locationDescription4, setLocationDescription4] = useState("");
    // const [location4PriceLocal, setLocation4PriceLocal] = useState("");
    // const [location4PriceForeign, setLocation4PriceForeign] = useState("");
    const [location4map, setLocation4Map] = useState("");
    const [location5, setLocation5] = useState("");
    //const [location5Img, setLocation5Img] = useState("");
    const [locationDescription5, setLocationDescription5] = useState("");
    // const [location5PriceLocal, setLocation5PriceLocal] = useState("");
    // const [location5PriceForeign, setLocation5PriceForeign] = useState("");
    const [location5map, setLocation5Map] = useState("");
   
   
    function sendData(e){

        e.preventDefault();

        const newDestinationCreate = {
        packageType,
        image,
        packageDescription,
        location1,
        //location1Img,
        locationDescription1,
        // location1PriceLocal,
        // location1PriceForeign,
        location1map,
        location2,
        //location2Img,
        locationDescription2,
        // location2PriceLocal,
        // location2PriceForeign,
        location2map,
        location3,
        //location3Img,
        locationDescription3,
        // location3PriceLocal,
        // location3PriceForeign,
        location3map,
        location4,
        //location4Img,
        locationDescription4,
        // location4PriceLocal,
        // location4PriceForeign,
        location4map,
        location5,
        //location5Img,
        locationDescription5,
        // location5PriceLocal,
        // location5PriceForeign,
        location5map
    
        }

        console.log(newDestinationCreate);
        axios.post("http://localhost:8070/destinationCreate/add",newDestinationCreate, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(() => {
        alert("Destination added");
      }).catch((err) => {
        alert(err);
    });

            /*axios.post("http://localhost:8070/destinationCreate/add",newDestinationCreate).then(()=>{
                alert("New Destination Created");
              }).catch((err)=>{
                alert(err);
              })*/
    }

    return(
        <div className="container">
            <div className="white-box-createdestination">
            <form onSubmit={sendData}>

                <div> 

                <h4 style={{marginLeft:"300px"}}>CREATE NEW DESTINATION PACKAGE</h4>

                    {/* <h1>Create New Destination Packages</h1> */}
                    {/* {image && <img src={`images/${image}`} alt="advertisement" />} */}

                </div>
                

                <br></br>

                <div className= "form-group">
                    <lable for="name">Package Type</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter package type"
                    onChange={(e)=>{

                        setPackageType(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div class="form-group">
                    <label for="image">Attach image</label><br/>
                    <input type="file" class="form-control-file" id="image" name = "image" onChange = {(e) => {
                                setImage(e.target.files[0]);
                            }} required/><br/><br/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Package Description</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter package description"
                    onChange={(e)=>{

                        setPackageDescription(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">First Location</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter first location"
                    onChange={(e)=>{

                        setLocation1(e.target.value);

                    }}/>
                </div>
                <br></br>

                

                <div className= "form-group">
                    <lable for="name">First Location Description</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter first location description "
                    onChange={(e)=>{

                        setLocationDescription1(e.target.value);

                    }}/>
                </div>
                <br></br>

                {/* <div className= "form-group">
                    <lable for="name">Ticket Price of location1 Local</lable>
                    <input type="number" className="form-control" id="name" placeholder="  Enter Ticket Price of location1 Local"
                    onChange={(e)=>{

                        setLocation1PriceLocal(e.target.value);

                    }}/>
                </div>
                <br></br>

<div className= "form-group">
                    <lable for="name">Ticket Price of location1 Foreign</lable>
                    <input type="number" className="form-control" id="name" placeholder="  Enter Ticket Price of location1 Foreign"
                    onChange={(e)=>{

                        setLocation1PriceForeign(e.target.value);

                    }}/>
                </div>
                <br></br> */}

                <div className= "form-group">
                    <lable for="name">First Location Map</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter first location Map URL"
                    onChange={(e)=>{

                        setLocation1Map(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Second Location</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter second location"
                    onChange={(e)=>{

                        setLocation2(e.target.value);

                    }}/>
                </div>
                <br></br>

                

                <div className= "form-group">
                    <lable for="name">Second Location Description</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter second location description"
                    onChange={(e)=>{

                        setLocationDescription2(e.target.value);

                    }}/>
                </div>
                <br></br>
{/* 
                <div className= "form-group">
                    <lable for="name">Ticket Price of location1 Local</lable>
                    <input type="number" className="form-control" id="name" placeholder="  Enter Ticket Price of location1 Local"
                    onChange={(e)=>{

                        setLocation2PriceLocal(e.target.value);

                    }}/>
                </div>
                <br></br>

<div className= "form-group">
                    <lable for="name">Ticket Price of location1 Foreign</lable>
                    <input type="number" className="form-control" id="name" placeholder="  Enter Ticket Price of location1 Foreign"
                    onChange={(e)=>{

                        setLocation2PriceForeign(e.target.value);

                    }}/>
                </div>
                <br></br> */}

                <div className= "form-group">
                    <lable for="name">Second Location Map</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter Second location Map URL"
                    onChange={(e)=>{

                        setLocation2Map(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Third Location</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter third location"
                    onChange={(e)=>{

                        setLocation3(e.target.value);

                    }}/>
                </div>
                <br></br>

                
                <div className= "form-group">
                    <lable for="name">Third Location Description</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter third location description"
                    onChange={(e)=>{

                        setLocationDescription3(e.target.value);

                    }}/>
                </div>
                <br></br>

                {/* <div className= "form-group">
                    <lable for="name">Ticket Price of location1 Local</lable>
                    <input type="number" className="form-control" id="name" placeholder="  Enter Ticket Price of location1 Local"
                    onChange={(e)=>{

                        setLocation3PriceLocal(e.target.value);

                    }}/>
                </div>
                <br></br>

<div className= "form-group">
                    <lable for="name">Ticket Price of location1 Foreign</lable>
                    <input type="number" className="form-control" id="name" placeholder="  Enter Ticket Price of location1 Foreign"
                    onChange={(e)=>{

                        setLocation3PriceForeign(e.target.value);

                    }}/>
                </div>
                <br></br> */}

                <div className= "form-group">
                    <lable for="name">Third Location Map</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter Third location Map URL"
                    onChange={(e)=>{

                        setLocation3Map(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Fourth Location</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter fourth location"
                    onChange={(e)=>{

                        setLocation4(e.target.value);

                    }}/>
                </div>
                <br></br>

                

                <div className= "form-group">
                    <lable for="name">Fourth Location Description</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter fourth location description"
                    onChange={(e)=>{

                        setLocationDescription4(e.target.value);

                    }}/>
                </div>
                <br></br>

                {/* <div className= "form-group">
                    <lable for="name">Ticket Price of location1 Local</lable>
                    <input type="number" className="form-control" id="name" placeholder="  Enter Ticket Price of location1 Local"
                    onChange={(e)=>{

                        setLocation4PriceLocal(e.target.value);

                    }}/>
                </div>
                <br></br>

<div className= "form-group">
                    <lable for="name">Ticket Price of location1 Foreign</lable>
                    <input type="number" className="form-control" id="name" placeholder="  Enter Ticket Price of location1 Foreign"
                    onChange={(e)=>{

                        setLocation4PriceForeign(e.target.value);

                    }}/>
                </div>
                <br></br> */}

                <div className= "form-group">
                    <lable for="name">Fourth Location Map</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter fourth location Map URL"
                    onChange={(e)=>{

                        setLocation4Map(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Fifth Location</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter fifth location"
                    onChange={(e)=>{

                        setLocation5(e.target.value);

                    }}/>
                </div>
                <br></br>

                

                <div className= "form-group">
                    <lable for="name">Fifth Location Description</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter fifth location description"
                    onChange={(e)=>{

                        setLocationDescription5(e.target.value);

                    }}/>
                </div>
                <br></br>

                {/* <div className= "form-group">
                    <lable for="name">Ticket Price of location1 Local</lable>
                    <input type="number" className="form-control" id="name" placeholder="  Enter Ticket Price of location1 Local"
                    onChange={(e)=>{

                        setLocation5PriceLocal(e.target.value);

                    }}/>
                </div>
                <br></br>

<div className= "form-group">
                    <lable for="name">Ticket Price of location1 Foreign</lable>
                    <input type="number" className="form-control" id="name" placeholder="  Enter Ticket Price of location1 Foreign"
                    onChange={(e)=>{

                        setLocation5PriceForeign(e.target.value);

                    }}/>
                </div>
                <br></br> */}

                <div className= "form-group">
                    <lable for="name">Fifth Location Map</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter fifth location Map URL"
                    onChange={(e)=>{

                        setLocation5Map(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div id="button1">
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                <br></br>
            </form>
        </div>
        </div>
    )
}