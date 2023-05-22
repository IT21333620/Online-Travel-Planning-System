import "./InsuranceTable.css"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./InsuranceOwnerHeader"
import InsuranceOwnerHeader from "./InsuranceOwnerHeader";


export default function ClaimManagement(){
    const[insurance,setInsurance] = useState([]);

    useEffect(() =>{
        function getInsurance(){
            axios.get("http://localhost:8070/insuranceClaim/view").then((res) =>{
              console.log(res.data)
                setInsurance(res.data);
            }).catch((err) => {
                alert(err.message);
               
            })
        }
        getInsurance();
    }, [])

const deleteInsurace = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/insuranceClaim/delete/${id}`);
     // alert('Data deleted successfully');
      window.location.reload(); //data deleted after that page will refresh automatically
    } catch (error) {
      alert('Error deleting data', error);
      console.log(error);
    }
  };



return (
    <div style={{left:1000}}>
      <InsuranceOwnerHeader/>
      <h1 class="cus1234">Claim Management</h1>
      <div class ="tab1234">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Date</th>
            <th>NIC</th>
            <th>Plan</th>
            <th>description</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {insurance.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.date}</td>
              <td>{item.nic}</td>
              <td>{item.plan}</td>
              <td>{item.description}</td>
              <td>
              <a href={'/EditClaim/'+item._id}> <button class="btn-edit12" ><i className="far fa-edit"></i>&nbsp;Edit</button></a>
              </td>
              <td>
                <button class="btn-delete12"
                   onClick={() =>deleteInsurace(item._id)}
                ><i className="far fa-trash-alt"></i>&nbsp;
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
