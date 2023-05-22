import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import "./DestinationPackages.css";
import axios from "axios";
import { useParams } from "react-router-dom";
// import despackpic from "../img/des-pack-pic.jpg";
//import despackpic1 from "../img/des-pack-pic1.png";
//import despackpic2 from "../img/des-pack-pic2.jpg";
//import despackpic3 from "../img/des-pack-pic3.jpg";
//import despackpic4 from "../img/des-pack-pic4.jpg";
//import despackpic5 from "../img/des-pack-pic5.JPG";

function DestinationPackages(){

    const { id } = useParams();
    const [image, setImage] = useState("");

    const[destination,setDestinationCreates] = useState({});

    useEffect(() => {
        const fetchDestinationCreates = async () =>{
            const res = await axios.get(`http://localhost:8070/destinationCreate/get/${id}`);
            setDestinationCreates(res.data.destinationCreate);
            setImage(res.data.destinationCreate.image);
            console.log(res.data)
        };
        fetchDestinationCreates();
    }, [id])

    return(
        <div className = "destination-package-container">

        <h4 className = "destination-package-heading1">Southern Lanka</h4>
        <br/>
        <h3 className = "destination-package-heading2">Escape with us!</h3>
        <br/><br/><br/><br/><br/><br/>
        
       
          
            <div className="content11">
                <hr className="line1"/>
                <p className="main-topic1">{destination.packageType}</p>
            </div>

            <br/>
            <img src={`/images/${image}`} id = "des-pack-pic" alt = "pic2"/>
            <br/><br/><br/><br/><br/>
            

            <div className="content11">
                <hr className="line3"/>
                <p className="main-description1">{destination.packageDescription}</p>
            </div>
             <br/><br/><br/><br/>
             <h3>5 Best places in SriLanaka</h3>
             <br/><br/><br/><br/>
            <div className="content11">
                <hr className="line4"/>
                <p className="other-topic1">{destination.location1}</p>
            </div>
            <br/><br/><br/><br/>

            <div className="content11">
                <hr className="line6"/>
                <p className="extara-description1">{destination.locationDescription1}</p>
            </div>
            <br/><br/>

            <div className="desmap">
                <iframe
      src={destination.location1map}
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        </div>
        <br/><br/><br/><br/>

            <div className="content11">
                <hr className="line7"/>
                <p className="other-topic1">{destination.location2}</p>
            </div>
            <br/><br/><br/><br/>
            

            <div className="content11">
                <hr className="line9"/>
                <p className="extara-description1">{destination.locationDescription2}</p>
            </div>
            <br/><br/>

            <div className="desmap">
                <iframe
      src={destination.location2map}
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        </div>
        <br/><br/><br/><br/>

            

            <div className="content11">
                <hr className="line10"/>
                <p className="other-topic1">{destination.location3}</p>
            </div>
            <br/><br/><br/><br/>

           

            <div className="content11">
                <hr className="line12"/>
                <p className="extara-description1">{destination.locationDescription3}</p>
            </div>
            <br/><br/>

            <div className="desmap">
                <iframe
      src={destination.location3map}
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        </div>
        <br/><br/><br/><br/>

            <div className="content11">
                <hr className="line13"/>
                <p className="other-topic1">{destination.location4}</p>
            </div>
            <br/><br/><br/><br/>

           

            <div className="content11">
                <hr className="line15"/>
                <p className="extara-description1">{destination.locationDescription4}</p>
            </div>
            <br/><br/>

            <div className="desmap">
                <iframe
      src={destination.location4map}
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        </div>
        <br/><br/><br/><br/>

            <div className="content11">
                <hr className="line16"/>
                <p className="other-topic1">{destination.location5}</p>
            </div>
            <br/><br/><br/><br/>


            <div className="content11">
                <hr className="line18"/>
                <p className="extara-description1">{destination.locationDescription5}</p>
            </div>
            <br/><br/>

            <div className="desmap">
                <iframe
      src={destination.location5map}
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        </div>

            <br/><br/><br/><br/>

        <Link to="/reservedestinationform" className="btn btn-desres-new">Reserve Destination</Link>


        

        </div>
        
    )
}

export default DestinationPackages;