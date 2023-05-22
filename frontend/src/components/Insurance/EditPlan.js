import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";




export default function EditPlans(){

  const [insurance,setInsurance]=useState({});
    const{id}=useParams();
   

    const navigate = useNavigate()
   const [name,setName]=useState("");
   const [phone,setPhone]=useState("");
   const [email,setEmail]=useState("");
   const [plan,setPlan]=useState("");
   
   
   
   useEffect(() =>{

    
        axios.get(`http://localhost:8070/insuranceApply/get/${id}`).then((response)=> {
           
            const insuranceplan = response.data;
            setName(insuranceplan.name);
            setPhone(insuranceplan.phone);
            setEmail(insuranceplan.email);
            setPlan(insuranceplan.plan);
            
            console.log(response.data)
  
          });
        }, [id]);
  



const handleSubmit = (e) =>{

    e.preventDefault();
    const updateInsurance = {
        name,
        phone,
        email,
        plan,
        
    };
    
    axios
    .put(`http://localhost:8070/insuranceApply/update/${id}`, updateInsurance)
    .then((response) => {
      console.log(response.data);
      alert("Successfully updated")
      navigate("/InsuranceCompany-PlanManagement")
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
         <h1 className="heading">Edit Plan</h1>
    <div>
    <div className="form-group119">
      <label htmlFor="name">Name</label>
      <input type="text" className="form-control" id="name" required="true" value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
    
    <div className="form-group119">
      <label htmlFor="phone">Phone Number</label>
      <input type="text" className="form-control" id="phone"   required="true"  defaultValue={phone}onChange={(e) => setPhone(e.target.value)}/>
    </div>


    <div className="form-group119">
      <label htmlFor="email">E-mail</label>
      <input type="email" className="form-control" id="email"   required="true" defaultValue={email}onChange={(e) => setEmail(e.target.value)}/>
    </div>

    <div className="form-group119">
      <label htmlFor="plan">Plan</label>
      <input type="text" className="form-control" id="plan"  required="true"  defaultValue={plan}onChange={(e) => setPlan(e.target.value)}/>
    </div>


  
 
  </div>



    
   
  
   
    <div id="button2">
    <button type="submit" className="btn-submit1190" onClick={handleSubmit }>Apply</button>
   </div>
   
 
   
   
   
  </div>

    )
}