import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";




export default function EditFeedback(){

  const [insurance,setInsurance]=useState({});
    const{id}=useParams();
   

    const navigate = useNavigate()
   const [name,setName]=useState("");
   const [email,setEmail]=useState("");
   const [feedback,setFeedback]=useState("");
   const [ratings,setRatings]=useState("");
   
   
   
   useEffect(() =>{

    
        axios.get(`http://localhost:8070/insuranceFeedback/get/${id}`).then((response)=> {
           
            const insurance = response.data;
            setName(insurance.name);
            setEmail(insurance.email);
            setFeedback(insurance.feedback);
            setRatings(insurance.ratings);
            
            console.log(response.data)
  
          });
        }, [id]);
  



const handleSubmit = (e) =>{

    e.preventDefault();
    const updateInsurance = {
        name,
        email,
        feedback,
        ratings,
        
    };
    
    axios
    .put(`http://localhost:8070/insuranceFeedback/update/${id}`, updateInsurance)
    .then((response) => {
      console.log(response.data);
      alert("Successfully updated")
      navigate("/InsuranceCompany-FeedbackManagement")
      // show success message or redirect to another page
    })
    .catch((error) => {
      console.log(error);
      // show error message
    });
};


return(


    <div className="login-form-wrap119">
        <br></br>
         <h1 className="heading">Edit Feedback</h1>
    <div>
    <div className="form-group119">
      <label htmlFor="name">Name</label>
      <input type="text" className="form-control" id="name" required="true" value={name} onChange={(e) => setName(e.target.value)}/>
    </div>


    <div className="form-group119">
      <label htmlFor="email">E-mail</label>
      <input type="text" className="form-control" id="email"   required="true"  defaultValue={email}onChange={(e) => setEmail(e.target.value)}/>
    </div>



    <div className="form-group119">
      <label htmlFor="feedback">Feedback</label>
      <input type="text" className="form-control" id="feedback"   required="true" defaultValue={feedback}onChange={(e) => setFeedback(e.target.value)}/>
    </div>

    

    
    <div className="form-group119">
      <label htmlFor="plan">Plan</label>
      <input type="text" className="form-control" id="plan"  required="true"  defaultValue={ratings}onChange={(e) => setRatings(e.target.value)}/>
    </div>


  
 
  </div>



    
   
  
   
    <div id="button2">
    <button type="submit" className="btn-submit1190" onClick={handleSubmit }>Apply</button>
   </div>
   
 
   
   
   
  </div>

)
}