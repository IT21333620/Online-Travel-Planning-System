import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import homeImg from "../img/homeImg.jpg";
import homesub from "../img/home2.jpg";
import hotelSign from "../img/hotelSign.jpg";
import adSign from "../img/Advertise.jpg";
import axios from "axios";
import "./Home.css"
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter"

export default function Home(){

    const [advertisements, setAdvertisements] = useState([]);
    const [packageNo, setPackageNo] = useState(1);
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

        <div style={{backgroundColor:"white",height:"2400px"}}>
            <UserHeader/>
            <div className="container" >
            <img src={homeImg} className="home1" alt="travel" />

            {advertisements.length > 0 && (
            <img className="adHome"
            src={`/images/${advertisements[currentSlide].image}`}
            alt={`Advertisement ${currentSlide + 1}`}
          />
        )}

        <img src={homesub} className="home2" alt="travel" />
        <div className="fpara">Make your trip easy </div>
        <div className="sndpara">by selecting a package</div>
        <div className="tpara">
              Packages include all the
              <br />
              facilities you need
            </div>

        <Link to = "/home" className="bttnHome" style = {{width:"178px", textDecoration:"none"}}>
                    View Packages
        </Link>
        <hr/>

        <div style = {{color:"#191970", marginLeft:"700px", fontSize:"28px" }}>or
            <br/>
            <div style = {{marginLeft:"-260px" }}>you can customize your trip on your own</div>
        </div>

        <div className="blk1">
            <img src={hotelSign} className="picH" alt="hotel1" /></div>
            <div style = {{marginLeft:"550px",float:"left",fontSize:"24px",marginTop:"-280px"}}>Looking for an easy and convenient way to book <br/>
            <div style = {{marginLeft:"150px" }}> your next hotel stay?</div> <br/>
            <div style = {{marginLeft:"-160px" }}> Our platform makes it easy to find and book the perfect hotel for your needs.</div> 
            <div style = {{marginLeft:"180px", color:"#191970" }}>So why wait? <br/></div>
            <div style = {{marginLeft:"-150px" }}>Book your next hotel stay today with our online hotel reservation platform!</div> <br/>
            <div style = {{marginLeft:"350px", color:"#191970"}}>Head on to</div>
            <Link to = "/hotels" className="btnH">
                    HOTELS
            </Link>
        </div><br/>

        <div className="blk1">
            <img src={adSign} className="picH" style = {{marginTop:"-70px"}} alt="ad1" /></div>
            <div style = {{marginLeft:"500px",float:"left",fontSize:"24px",marginTop:"-280px"}}>Looking for a place to advertise online to reach customers to <br/>
            <div style = {{marginLeft:"200px" }}>  your business ?</div> <br/>
            <div style = {{marginLeft:"150px", color:"#191970" }}>You are in the right place<br/><br/></div>
            <div style = {{marginLeft:"-70px" }}>Grow your business with us by <br/>
            <div style = {{marginLeft:"30px" }}>placing an ad in a minute</div> <br/>
            </div>
            <Link to = "/adHome" className="btnH" style = {{width :"300px",marginLeft:"420px",marginTop:"20px"}}>
                    PLACE YOUR AD NOW
            </Link>
        </div>
        
         </div>
        <br/>
         <UserFooter/>
        </div>
    )
}