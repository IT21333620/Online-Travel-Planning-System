import "./VehicleHomepage.css";
import vehiclehomepic from "../img/vehicle-homepage-pic.png";
import vehiclehomerec from "../img/vehicle-homepage-rec.png";
import vehiclehomepagepiccollage from "../img/vehicle-homepage-pic-collage.png";
import vehiclehomepagebgpic from "../img/vehicle-homepage-bg-pic.png";
import React, { useState, useEffect } from "react"
import axios from "axios";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";
import { Link ,useLocation} from "react-router-dom";


export default function VehicleReserve(){

        const [advertisements, setAdvertisements] = useState([]);
        const [packageNo, setPackageNo] = useState(4);
        const [currentSlide, setCurrentSlide] = useState(0);
        const [intervalId, setIntervalId] = useState(null);

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
      <body className="veh-res-body">
        <div className = "vehicle-reserve-container">
            <UserHeader></UserHeader>
            <img src={vehiclehomepic} id = "vehicle-homepage-img" alt = "pic1"/>
            <h3 className = "vehicle-homepage-heading">WORLDS</h3>
            <img src={vehiclehomerec} id = "vehicle-homepage-rec" alt = "pic2"/>
            <h5 className = "vehicle-homepage-heading2">JOIN WITH US</h5>
            <h5 className = "vehicle-homepage-heading3">VEHICLE REGISTRATION</h5>

            <div id = "vehicle-hr-line"/>

            <img src={vehiclehomepagepiccollage} id = "vehicle-homepage-pic-collage" alt = "pic3" />

            <h3 className = "vehicle-homepage-heading4" onClick={() => window.location.href = 'https://www.lawnet.gov.lk/motor-traffic-4/'}>
                Road Rules <br></br>And Regulations
            </h3>

            <h3 className = "vehicle-homepage-heading5" onClick={() => window.location.href = 'https://www.srilankalaw.lk/Volume-V/motor-traffic-act.html'}>
                Further <br></br>Information
            </h3>

            <h3 className = "vehicle-homepage-heading6" onClick={() => window.location.href = 'destinationHome'}>
                Trouble Finding <br></br>A Destination?
            </h3>

            <img src={vehiclehomepagebgpic} id = "vehicle-homepage-bg-pic" alt = "pic4" />

            <h4 className = "vehicle-homepage-heading7">Have an International Driver's Permit?</h4>

            <p id = "veh-first-para">Your International Driver's Permit is a national license counterpart that 
                serves as your special permit so that you can rent and drive a motor 
                vehicle in Sri Lanka. An IDP is significant for a hassle-free road trip 
                across the country. You don't want to stop on possible checkpoints longer 
                when all you want is to devote your time to explore the wonders of Sri Lanka.</p>

            <h4 className = "vehicle-homepage-heading8">Documents Required</h4>

            <p id = "veh-second-para">Sri Lanka has a well-maintained transport system, thus making it an excellent 
                destination to go road tripping. Car rentals are spurs throughout the country, 
                making it very accessible for you to get a car. Sri Lankan car rental agencies 
                usually require you to provide them your home country driving license. If it's 
                not in English, that's when IDP would come in, and a photocopy of it. They will 
                also need your passport with a photocopy on the photo page and your Sri Lankan Visa.</p>
                
          <div className="advehicle-home">
          {advertisements.length > 0 && (
            <img
            src={`/images/${advertisements[currentSlide].image}`}
            alt={`Advertisement ${currentSlide + 1}`}
          />
        )}</div>

            <Link to ="/vehicleRenting"><button className = "veh-home-btn" id = "veh-home-btn-1" >Looking For <br></br>A Vehicle</button></Link>
            <Link to ="/vehicleRegistration"><button className = "veh-home-btn" id = "veh-home-btn-2">Looking For Renting<br></br>A Vehicle</button></Link>

            <Link to ="/vehicleDriverRegistration"><p className="veh-home-lastpara">Not Interested In Either Options? Click Here</p></Link>
            <UserFooter></UserFooter>
        </div>
        </body>
    )
}