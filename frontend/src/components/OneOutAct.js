import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import "./OneOutAct.css";
import "./global.css"
import axios from "axios";
import { useParams } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";
import aga from "../img/mula.png"


function OneOutAct(){

    const[outdooracts,setDestinationCreates] = useState({});

    const { id } = useParams();

    const [act_name, setAct_name] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [ticketprice, setTicketprice] = useState("");
    const [image, setImage] = useState("");
    const [maplocation, setMaplocation] = useState("");
    const [longdescription, setLongdescription] = useState("");

    useEffect(() => {
        
            axios.get(`http://localhost:8070/OutdoorAct/get/${id}`).then((res)=> {;
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



    return(
        <div>
        <div className = "destination-package-container">
<UserHeader/>
        <h4 className = "destination-package-heading1" style={{marginTop: "15px"}}>Southern Lanka</h4>
        <br/>
        <h3 className = "destination-package-heading2">Escape with us!</h3>
        <br/>
      <br/>
      <h3 className = "adventure-home-heading3" style={{fontWeight:"600" , color:"#191970"}}>{act_name}</h3>
      
      <h3 className = "adventure-home-heading1" style={{fontWeight:"100", color:"#191970"}}>{location}</h3>
      <br/>
      <br/>

      <div className="content11">
                <hr className="line3"/>

            </div>

            <br/>
            <img src={`/images/${image}`} id = "des-pack-pic" alt = "pic2"/>
            
            <br/>
            

            <div className="content11">
                <hr className="line3"/>

            </div>
             <br/>
           

            <div className="onceYouMoveContainer">
            <p className="main-description1" style={{width: "705px",marginLeft: "auto",marginRight: "auto" , marginTop: "100px"}}>{longdescription}</p>
                <Link to={`/ResAdvenAct/${id}`} className="btn btn-primary2">Reserve Destination</Link>
                <p className="onceYouMove-topic1" style={{width: "705px",marginLeft: "auto",marginRight: "auto"}}>{}</p>
                <div className="loca"><p className="Facilitie" >Location</p><iframe
                    src={maplocation}
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    /></div>
            </div>

            <div style={{marginTop:"741px"}}>
        <p className="styles.dontJustSee" style={{width: "705px",marginLeft: "auto",marginRight: "auto" , textAlign:"center", position:"relative",top:"20px"}}>Don’t just see Sri Lanka- feel Sri Lanka.</p>
        <img src={aga} id = "adventure-home-img" alt = "pic1"/>
        </div>

            </div>
            <UserFooter/>
            </div>
    );
}

export default OneOutAct;