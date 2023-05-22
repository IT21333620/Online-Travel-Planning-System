import React, {useEffect, useState} from "react";
import axios from "axios";
import "./DestinationHome.css";
import destinationhomepic from "../img/destinationhome.jpg";
import {Link} from 'react-router-dom';
import UserHeader from "./UserHeader";
// import despackpic from "../img/des-pack-pic.jpg";
import UserFooter from './UserFooter';

export default function DestinationHome(){

    const[destinationCreates,setDestinationCreates] = useState([]);
    const [advertisements, setAdvertisements] = useState([]);
    const [packageNo, setPackageNo] = useState(2);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() =>{
        function getDestinationCreates(){
            axios.get("http://localhost:8070/destinationCreate/").then((res) =>{
                setDestinationCreates(res.data);
                //setImage(res.data.destinationCreate.image);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getDestinationCreates();
    }, [])

    useEffect(() => {
        axios
          .get(`http://localhost:8070/advertisement/acceptedAdvertisements`)
          .then((res) => {
            const filteredAdvertisements = res.data.filter(
              (advertisement) => advertisement.packageNo === packageNo
            );
            setAdvertisements(filteredAdvertisements);
          })
          .catch((err) => {
            alert(err.message);
          });
      }, [packageNo]);
  
      useEffect(() => {
              // Start the slideshow interval when advertisements are available
              if (advertisements.length > 0 && !intervalId) {
                const id = setInterval(() => {
                  setCurrentSlide((prev) => (prev + 1) % advertisements.length);
                }, 5000);
                setIntervalId(id);
              }
          
              // Clean up the interval when advertisements change or component unmounts
              return () => {
                if (intervalId) {
                  clearInterval(intervalId);
                  setIntervalId(null);
                }
              };
    }, [advertisements]);


    return(
        

        <div className = "destination-home-container">
            <UserHeader/>

        <br></br>
        <h3 className = "destination-home-heading3">DESTINATIONS IN SRILANKA</h3>
        <br/>
        <br/>
        <img src={destinationhomepic} id = "destination-home-img" alt = "pic1"/>
       
        <br/>
        <br/>

        <h3 className = "destination-home-heading3">DESTINATION PACKAGES</h3>

         <br/>
        
        {destinationCreates.map((destinationCreate)=>
        <div className="destihome1"key={destinationCreate.id}>
            <br/>
            
        <div className="room">
        {destinationCreate.packageType} 
        <br /> <br />
        <div/>
        
        <br/>
            <img src={`/images/${destinationCreate.image}`} id = "des-pack-pic" alt = "pic2" className="roomimg"/>
            <br/>
            

        <Link to={`/destinationPackages/${destinationCreate._id}`} className="btn btn-destination">View</Link>

        </div>
        </div>
        
      )}

         <br/> <br/> <br/> <br/> <br/> 

         <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/><br/> <br/> <br/> <br/><br/> <br/> <br/> <br/>

         {advertisements.length > 0 && (
            <img className="adHotel" style = {{marginTop:"130px",marginLeft:"150px"}}
            src={`/images/${advertisements[currentSlide].image}`}
            alt={`Advertisement ${currentSlide + 1}`}
          />
        )}
      <br/><br/><br/><br/><br/><br/>
         <UserFooter/> 
        </div>

       
    );  
}