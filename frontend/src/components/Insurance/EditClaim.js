import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";




export default function EditClaim(){

  const [InsuranceClaim,setInsuranceClaim]=useState({});
    const{id}=useParams();
   

    const navigate = useNavigate()
   const [name,setName]=useState("");
   const [email,setEmail]=useState("");
   const [phone,setPhone]=useState("");
   const [date,setDate]=useState("");
   const [nic,setNIC]=useState("");
   const [plan,setPlan]=useState("");
   const [description,setDescription]=useState("");
   
   
   
   
   useEffect(() =>{

    
        axios.get(`http://localhost:8070/insuranceClaim/get/${id}`).then((response)=> {
           
            const insurance= response.data;
            setName(insurance.name);
            setEmail(insurance.email);
            setPhone(insurance.phone);
            setDate(insurance.date);
            setNIC(insurance.nic);
            setPlan(insurance.plan);
            setDescription(insurance.description);
            
            
            console.log(response.data)
  
          });
        }, [id]);
  



const handleSubmit = (e) =>{

    e.preventDefault();
    const updateInsurance = {
            name,
            email,
            phone,
            date,
            nic,
            plan,
            description,
        
    };
    
    axios
    .put(`http://localhost:8070/insuranceClaim/update/${id}`, updateInsurance)
    .then((response) => {
      console.log(response.data);
      alert("Successfully updated")
      navigate("/InsuranceCompany-ClaimManagement")
    })
    .catch((error) => {
      console.log(error);
      // show error message
    });
};


return(


    <div className="login-form-wrap119">
        <br></br>
         <h1 className="heading">Edit Claim</h1>
    <div>
    <div className="form-group119">
      <label htmlFor="name">Name</label>
      <input type="text" className="form-control" id="name" required="true"  value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
    

    
    <div className="form-group119">
      <label htmlFor="email">E-mail</label>
      <input type="email" className="form-control" id="email" required="true"   defaultValue={email}onChange={(e) => setEmail(e.target.value)}/>
    </div>
 
    <div className="form-group119">
      <label htmlFor="phone">Phone Number</label>
      <input type="text" className="form-control" id="phone"   required="true"  defaultValue={phone} onChange={(e) => setPhone(e.target.value)}/>
    </div>


    <div className="form-group119">
      <label htmlFor="date">Date</label>
      <input type="text" className="form-control" id="date"  required="true"  defaultValue={date} onChange={(e) => setDate(e.target.value)}/>
    </div>

    <div className="form-group119">
      <label htmlFor="nic">NIC</label>
      <input type="text" className="form-control" id="phone"   required="true" defaultValue={nic} onChange={(e) => setNIC(e.target.value)}/>
    </div>


    <div className="form-group119">
      <label htmlFor="plan">Plan</label>
      <input type="text" className="form-control" id="plan"  required="true"  defaultValue={plan} onChange={(e) => setPlan(e.target.value)}/>
    </div>

    <div className="form-group119">
      <label htmlFor="plan">Description</label>
      <input type="text" className="form-control" id="description" required="true"   defaultValue={description} onChange={(e) => setDescription(e.target.value)}/>
    </div>




  
 
  </div>



    
   
  
   
    <div id="button2">
    <button type="submit" className="btn-submit1190" onClick={handleSubmit }>Apply</button>
   </div>
   
 
   
   
   
  </div>

    )
}