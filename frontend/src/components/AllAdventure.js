import React, {useEffect, useState} from "react";
import axios from "axios";
import "./AllAdventure.css";
import "./global.css"
import { Link } from 'react-router-dom';
import destinationhomepic from "../img/main.jpg"
import madakalla from "../img/mada.jpg"
import aga from "../img/mula.png"
import mula from "../img/OIP.png"
import logo from "../img/logo.png"
import person from "../img/person.png"
import rock from "../img/rock.jpg"
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";






export default function AllAdventure(){

    const[outdooracts, setOutdoorActs] = useState([]);

    useEffect(() =>{
        function getOutdoorActs(){
            axios.get("http://localhost:8070/OutdoorAct/").then((res) =>{
                console.log(res.data);
                setOutdoorActs(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getOutdoorActs();
    }, [])
    return (


      <div className = "adventure-home-container">

        <UserHeader/>

      <h4 className = "adventure-home-heading1" style={{fontWeight:"600", color:"#191970"}}>Southern Lanka</h4>
      <br/>
      <h3 className = "adventure-home-heading2" style={{fontWeight:"500", color:"#191970"}}>Escape with us!</h3>
      <br/>
      <br/>
      <h3 className = "adventure-home-heading3" style={{fontWeight:"600" , color:"#191970"}}>OUTDOORS & ADVENTURE EXPERIENCES IN SRILANKA</h3>
      
      <h3 className = "adventure-home-heading1" style={{fontWeight:"100", color:"#191970"}}>Revealing the fabric of the destination</h3>
      <br/>
      <br/>
      <img src={mula} id = "adventure-home-img" alt = "pic1"/>
      <br/>
      <img src={logo} id = "newlogo" alt = "logo"/>
      <p className="onceYouMove-topic1" style={{width: "705px",marginLeft: "auto",marginRight: "auto" , textAlign:"center" , position:"relative",top:"25px"}}>Get back to nature with adventure travel in Sri Lanka. We've selected our favourite outdoor activities in Sri Lanka, including the best tours and trips that you can experience on your holiday.</p>
      <p className="onceYouMove-topic1" style={{width: "705px",marginLeft: "auto",marginRight: "auto" , textAlign:"center", position:"relative",top:"25px"}}>There are adventure sports in Sri Lanka such as white water rafting, surfing and kite-surfing, though in general the activities that we include in our holidays are relatively gentle and relaxed. We're not an activity holiday specialist; we're more about revealing the fabric of the destination.</p>
      <p className="onceYouMove-topic1" style={{width: "705px",marginLeft: "auto",marginRight: "auto" , textAlign:"center", position:"relative",top:"25px"}}>That said, we're bursting with trip ideas for Sri Lanka, and we'd be delighted to share them with you. It's all about your holiday. Have a look at what's possible and get in touch today.</p>


      <br/>
      <h3 className = "adventure-home-heading4"style={{width: "705px",marginLeft: "auto",marginRight: "auto" , textAlign:"center", position:"relative",top:"25px", marginBottom:"30px"}}>OUTDOORS & ADVENTURE EXPERIENCES IN SRI LANKA</h3>
      
       <br/>
       <div className="dashboardAct">
      {outdooracts.map((destinationCreate)=>
      /*<div className="adventure1" key={destinationCreate.id}>
      <div className="adventure2">
          </div>
      <div className="adventure3">
      {destinationCreate.act_name} <br />
      <br/><br/>
      
      <img src={`/images/${destinationCreate.image}`}/>
      <br />
      
      <Link to={`/OneOutAct/${destinationCreate._id}`} className="btn btn-primary">View</Link>
      
      </div>
      </div>*/

      
        <div className="card" key={destinationCreate.id} style={{width: "18rem",marginBottom: "20px"}}>
            <img className="card-img-top" style={{height: "175px"}} src={`/images/${destinationCreate.image}`}/>
            <div className="card-body">
                <h5 class="card-title">{destinationCreate.act_name}</h5>
                <p class="card-text" style={{height: "100px",display: "flex"}}>{destinationCreate.description}</p>
                <div style={{textAlign:"center"}}>
                    <Link to={`/OneOutAct/${destinationCreate._id}`} class="btn btn-primary"  style={{float:"none"}}>View</Link>
                </div>
            </div>
        </div>

      
     
    )}
    </div>
        
        <div style={{height:"350px",background:"#FFFDE3",marginTop: "50px"}}>
            <img src={logo} id = "divlogo" alt = "logo"/>
            <div><p className="onceYouMove-topic1" style={{width: "705px",marginLeft: "auto",marginRight: "auto" , textAlign:"center", position:"relative",top:"-40px"}}>Every Southern Lanka journey is unique. Tell us your loves, your hates, your holiday ambitions, your hopes and fears, and we’ll share a suitcase so full of inspired holiday ideas you’ll need to sit on it to shut it tight.</p>
            <p className="onceYouMove-topic1" style={{width: "705px",marginLeft: "auto",marginRight: "auto" , textAlign:"center", position:"relative",top:"-20px"}}>Not sure what you’re looking for? Let us inspire you...</p>
            <Link to="/OutdoorFeedback/" className="btn btn-primary2" style={{marginLeft: "630px"}}>GET IN TOUCH</Link>
            <p className="onceYouMove-topic1" style={{width: "705px",marginLeft: "auto",marginRight: "auto" , textAlign:"center", position:"relative",top:"20px",color:"#E49B0F"}}>Call us +94 71 71 76 76</p>
            </div>
        </div>
        <div>
        <p className="styles.dontJustSee" style={{width: "705px",marginLeft: "auto",marginRight: "auto" , textAlign:"center", position:"relative",top:"20px"}}>Don’t just see Sri Lanka- feel Sri Lanka.</p>
        <img src={aga} id = "adventure-home-img" alt = "pic1"/>
        </div>
        <UserFooter/>
      </div>
        
    
    );

  };
        


