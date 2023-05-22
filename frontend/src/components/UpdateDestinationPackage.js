import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function UpdateDestinationPackage() {

    // const[destinationCreate,setDestinationCreate] = useState({});
    const {id } = useParams();

   const [packageType, setPackageType] = useState("");
   const [location1, setLocation1] = useState("");
   const [locationDescription1, setLocationDescription1] = useState("");
   const [location1map, setLocation1Map] = useState("");
   const [location2, setLocation2] = useState("");
   const [locationDescription2, setLocationDescription2] = useState("");
   const [location2map, setLocation2Map] = useState("");
   const [location3, setLocation3] = useState("");
   const [locationDescription3, setLocationDescription3] = useState("");
   const [location3map, setLocation3Map] = useState("");
   const [location4, setLocation4] = useState("");
   const [locationDescription4, setLocationDescription4] = useState("");
   const [location4map, setLocation4Map] = useState("");
   const [location5, setLocation5] = useState("");
   const [locationDescription5, setLocationDescription5] = useState("");
   const [location5map, setLocation5Map] = useState("");


   useEffect(() => {
    axios.get(`http://localhost:8070/destinationCreate/get/${id}`)
      .then((response) => {
        const destinationCreate = response.data;
        setPackageType(destinationCreate.packageType);
        setLocation1(destinationCreate.location1);
        setLocationDescription1(destinationCreate.locationDescription1);
        setLocation1Map(destinationCreate.location1map);
        setLocation2(destinationCreate.location2);
        setLocationDescription2(destinationCreate.locationDescription2);
        setLocation2Map(destinationCreate.location2map);
        setLocation3(destinationCreate.location3);
        setLocationDescription3(destinationCreate.locationDescription3);
        setLocation3Map(destinationCreate.location3map);
        setLocation4(destinationCreate.location4);
        setLocationDescription4(destinationCreate.locationDescription4);
        setLocation4Map(destinationCreate.location4map);
        setLocation5(destinationCreate.location5);
        setLocationDescription5(destinationCreate.locationDescription5);
        setLocation5Map(destinationCreate.location5map);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
}, [id]);

const handleSubmit = (e) => {
    e.preventDefault();
    
    const updateDestinationCreate = {
        packageType,
        location1,
        locationDescription1,
        location1map,
        location2,
        locationDescription2,
        location2map,
        location3,
        locationDescription3,
        location3map,
        location4,
        locationDescription4,
        location4map,
        location5,
        locationDescription5,
        location5map
        
    }

    axios.put(`http://localhost:8070/destinationCreate/update/${id}`, updateDestinationCreate)
      .then((response) => {
        console.log(response.data);
        alert("Successfully updated")
            // show success message or redirect to another page
          })
          .catch((error) => {
            console.log(error);
            // show error message
          });
      };

      return (
        <div className="container">
          
            
            <h3 className="titleStyle"><br />Update Destination Packages Details</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                   
                <div className="form-group">
                    <label htmlFor="packageType">packageType</label>
                    <input type="text" className="form-control" id="packageType" value={packageType} onChange={(e) => setPackageType(e.target.value)} /><br/>
                </div>


                    <div className="row">
                        <div className="col">

                        </div>
                    </div>
                </div>
    
                <div className="form-group">
                    <label htmlFor="location1">location1</label>
                    <input type="text" className="form-control" id="location1" value={location1} onChange={(e) => setLocation1(e.target.value)} /><br/>
                </div>
    
                <div className="form-group">
                    <label htmlFor="locationDescription1">locationDescription1</label>
                    <input type="text" className="form-control" id="locationDescription1" value={locationDescription1} onChange={(e) => setLocationDescription1(e.target.value)} /><br/>
                </div>
    
                <div className="form-group">
                    <label htmlFor="">location1map</label>
                    <input type="text" className="form-control" id="location1map" value={location1map} onChange={(e) => setLocation1Map(e.target.value)} /><br/>
                </div>

                <div className="form-group">
                    <label htmlFor="location2">location2</label>
                    <input type="text" className="form-control" id="location2" value={location2} onChange={(e) => setLocation2(e.target.value)} /><br/>
                </div>
    
                <div className="form-group">
                    <label htmlFor="locationDescription2">locationDescription1</label>
                    <input type="text" className="form-control" id="locationDescription2" value={locationDescription2} onChange={(e) => setLocationDescription2(e.target.value)} /><br/>
                </div>
    
                <div className="form-group">
                    <label htmlFor="">location2map</label>
                    <input type="text" className="form-control" id="location2map" value={location2map} onChange={(e) => setLocation2Map(e.target.value)} /><br/>
                </div>

                <div className="form-group">
                    <label htmlFor="location2">location3</label>
                    <input type="text" className="form-control" id="location3" value={location3} onChange={(e) => setLocation3(e.target.value)} /><br/>
                </div>
    
                <div className="form-group">
                    <label htmlFor="locationDescription3">locationDescription3</label>
                    <input type="text" className="form-control" id="locationDescription3" value={locationDescription3} onChange={(e) => setLocationDescription3(e.target.value)} /><br/>
                </div>
    
                <div className="form-group">
                    <label htmlFor="">location3map</label>
                    <input type="text" className="form-control" id="location3map" value={location3map} onChange={(e) => setLocation3Map(e.target.value)} /><br/>
                </div>

                <div className="form-group">
                    <label htmlFor="location4">location4</label>
                    <input type="text" className="form-control" id="location4" value={location4} onChange={(e) => setLocation4(e.target.value)} /><br/>
                </div>
    
                <div className="form-group">
                    <label htmlFor="locationDescription4">locationDescription4</label>
                    <input type="text" className="form-control" id="locationDescription4" value={locationDescription4} onChange={(e) => setLocationDescription4(e.target.value)} /><br/>
                </div>
    
                <div className="form-group">
                    <label htmlFor="">location4map</label>
                    <input type="text" className="form-control" id="location4map" value={location4map} onChange={(e) => setLocation4Map(e.target.value)} /><br/>
                </div>

                <div className="form-group">
                    <label htmlFor="location5">location5</label>
                    <input type="text" className="form-control" id="location5" value={location5} onChange={(e) => setLocation5(e.target.value)} /><br/>
                </div>
    
                <div className="form-group">
                    <label htmlFor="locationDescription5">locationDescription5</label>
                    <input type="text" className="form-control" id="locationDescription5" value={locationDescription5} onChange={(e) => setLocationDescription5(e.target.value)} /><br/>
                </div>
    
                <div className="form-group">
                    <label htmlFor="">location5map</label>
                    <input type="text" className="form-control" id="location5map" value={location5map} onChange={(e) => setLocation5Map(e.target.value)} /><br/>
                </div>
    
                
    
                <div className = "btns">
                    <button type="submit" className = "register">Update</button>
                    </div>
    
                </form>
            </div>
    
        )
 
}