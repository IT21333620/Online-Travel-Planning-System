import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function EditCustomer(){

  
   const{id}=useParams();
   const navigate = useNavigate()
   const [name,setName]=useState("");
   const [phone,setPhone]=useState("");
   const [age,setAge]=useState("");
   const [address,setAddress]=useState("");
   const [email,setEmail]=useState("");
   const [gender,setGender]=useState("");
   
   
   useEffect(() =>{

    
        axios.get(`http://localhost:8070/insurance/get/${id}`).then((response)=> {
           
            const insurance = response.data;
            setName(insurance.name);
            setPhone(insurance.phone);
            setAge(insurance.age);
            setAddress(insurance.address);
            setEmail(insurance.email);
            setGender(insurance.gender);
            console.log(response.data)
  
          });
        }, [id]);
  



const handleSubmit = (e) =>{

    e.preventDefault();
    const updateInsurance = {
        name,
        phone,
        age,
        address,
        email,
        gender,
    };
    
    axios
    .put(`http://localhost:8070/insurance/update/${id}`, updateInsurance)
    .then((response) => {
      console.log(response.data);
      navigate("/InsuranceAdmin-CustomerManagement")
      alert("Successfully updated")
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
         <h1 className="heading">Edit Application</h1>
    <div>
    <div className="form-group119">
      <label htmlFor="name">Name</label>
      <input type="text" className="form-control" id="name" required="true" value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
    
    <div className="form-group119">
      <label htmlFor="phone">Phone Number</label>
      <input type="text" className="form-control" id="phone"  required="true"   defaultValue={phone} onChange={(e) => setPhone(e.target.value)}/>
    </div>

    <div className="form-group119">
      <label htmlFor="age">Age</label>
      <input type="text" className="form-control" id="age"   required="true"   defaultValue={age} onChange={(e) => setAge(e.target.value)}/>
    </div>

    <div className="form-group119">
      <label htmlFor="address">Address</label>
      <input type="text" className="form-control" id="address"  required="true"   defaultValue={address} onChange={(e) => setAddress(e.target.value)}/>
    </div>


    <div className="form-group119">
      <label htmlFor="email">E-mail</label>
      <input type="email" className="form-control" id="email"  required="true"  defaultValue={email}onChange={(e) => setEmail(e.target.value)}/>
    </div>



    <div className="form-group119">
      <label htmlFor="text">Gender</label>
      <input type="text" className="form-control" id="gender"  required="true" readOnly="true" defaultValue={gender}onChange={(e) => setGender(e.target.value)}/>
    </div>

   
    


 


   
    <div id="button2">
    <button type="submit" className="btn-submit1190" onClick={handleSubmit }>Apply</button>
   </div>
   
 
   
   
   
  </div>
  </div>
)
}