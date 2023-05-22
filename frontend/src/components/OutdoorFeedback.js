import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import "./OneOutAct.css";
import "./global.css"
import axios from "axios";
import { useParams } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";
import aga from "../img/mula.png"
import destinationhomepic from "../img/main.jpg"
import logo from "../img/logo.png"


    function OutdoorFeedback(){

        const [feedback, setFeedback] = useState("");
    
    
    
        function sendData(e){
            e.preventDefault();
            
    
            const newOutdoorFeedback ={
                feedback,

            }
    
            console.log(newOutdoorFeedback)
    
            axios.post("http://localhost:8070/OutdoorFeedback/add", newOutdoorFeedback).then(()=>{
                alert("OutdoorFeedback Added");
            }).catch((err)=>{
                alert(err)
            });
        }





    return(
        <div>
            <div className = "destination-package-container-feedback">
<UserHeader/>
            <h4 className = "destination-package-heading1" style={{marginTop: "15px" , color:"#191970"}}>Southern Lanka</h4>
  
            <h3 className = "destination-package-heading2" style={{fontWeight:"500", color:"#191970"}}>Escape with us!</h3>
   
            <br/>
            <h3 className = "adventure-home-heading3" style={{fontWeight:"600" , color:"#191970"}}>GOOD MOVE</h3>
      
            <h3 className = "adventure-home-heading1" style={{fontWeight:"100", color:"#191970"}}>You're one step closer to an unforgettable experience. What happens now? </h3>
            <br/>
            <br/>



                <div className="content11">

                </div>

            <br/>
            <img src={destinationhomepic} id = "adventure-home-img" alt = "pic1"/>
            
            <br/>
            <br/>
            <img src={logo} id = "newlogo" alt = "logo"/><br/>
            <p className="onceYouMove-topic1" style={{width: "705px",marginLeft: "auto",marginRight: "auto" , textAlign:"center" , position:"relative",top:"25px"}}>Thank you very much for getting in touch. A member of our friendly travel team will reply as soon as they can (usually within 24 hours) for a quick initial chat.</p>
            <p className="onceYouMove-topic1" style={{width: "705px",marginLeft: "auto",marginRight: "auto" , textAlign:"center", position:"relative",top:"25px"}}>Once we have a sense of what you're looking for, we will book you in for a more in-depth conversation with the right consultant. With Southern Lanka, planning a holiday is a collaborative process; we believe that getting to know what you want and need from a trip leads to a more enriching experience. Together, we can make your travels truly count.</p>
            <p className="onceYouMove-topic1" style={{width: "705px",marginLeft: "auto",marginRight: "auto" , textAlign:"center", position:"relative",top:"25px"}}>Speak to you soon!</p>

            <br/>
                <div className="content11">
                <hr className="line" style={{color:"#E49B0F"}} />
                </div>
             <br/>
             <form onSubmit={sendData}>
             <div style={{height:"350px",background:"#FFFDE3",marginLeft: "auto",marginRight: "auto",display: "block",width: "80%",padding: "20px"}}>
                <div class="form-floating" style={{width:"100%",height:"100%"}}>
                <label for="floatingTextarea2" style={{position:"revert",height:"auto"}}>Send message Here,</label>
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "60%"}} onChange={(e)=>{
                    setFeedback(e.target.value);}}></textarea>
                <button type="submit" class="btn btn-primary">Send</button>
                </div>
                </div>
             </form>
                




            <div style={{marginTop:"200px"}}>
            <p className="styles.dontJustSee" style={{width: "705px",marginLeft: "auto",marginRight: "auto" , textAlign:"center", position:"relative",top:"20px"}}>Don’t just see Sri Lanka- feel Sri Lanka.</p>
            <img src={aga} id = "adventure-home-img" alt = "pic1"/>
        </div>

            </div>
            <UserFooter/>
            </div>
            
    );
}

export default OutdoorFeedback;