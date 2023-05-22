import "./InsuranceTable.css"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import AdminHeader from "./AdminHeader"


export default function CustomerManagement(){
    const[insurance,setInsurance] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() =>{
        function getInsurance(){
            axios.get("http://localhost:8070/insurance/view").then((res) =>{
             
                setInsurance(res.data);

            

                
            }).catch((err) => {
                alert(err.message);
               
            })
        }
        getInsurance();
},[])


const filteredInsurance = insurance.filter(item => {
  return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) 
      
  );
});


const deleteInsurace = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/insurance/delete/${id}`);
     // alert('Data deleted successfully');
      window.location.reload(); //data deleted after that page will refresh automatically
    } catch (error) {
      alert('Error deleting data', error);
      console.log(error);
    }
  };



return (
    <div >
      <AdminHeader/>
      <div class="customertable123">
      <h1 class="cus1234">Customer Management</h1>
      <div class ="tab1234">

      <div className="search1234">
     
      <i class="bi bi-search" style={{marginLeft:-"190"}}> &nbsp;   <input type="text"  style={{marginLeft:-"80"}} placeholder="Search for Customers" onChange={e => setSearchQuery(e.target.value)} /></i> 
          </div>




      <table class="table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
            <th scope="col">E-mail</th>
            <th scope="col">Gender</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredInsurance.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.age}</td>
              <td>{item.address}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>
              <a  clasName="btn btn-warning" href={'/EditCustomer/'+item._id}> <button class="btn-edit12"><i className="far fa-edit"></i>&nbsp;Edit</button></a>
              </td>
              <td>
                <button class="btn-delete12"
                   onClick={() =>deleteInsurace(item._id)}
                ><i className="far fa-trash-alt"></i>&nbsp;
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
  );
}
