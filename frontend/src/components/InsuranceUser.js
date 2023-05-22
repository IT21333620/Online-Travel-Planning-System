import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./InsuranceTable.css"
import reserve from "../img/Reserved.jpg";
import UserSideBar from "./UserSideBar";

export default function InsuranceUser(){
    const[insurance,setInsurance] = useState([]);
    const userId = sessionStorage.getItem('userId');

    useEffect(() =>{
        function getInsurance(){
            axios.get(`http://localhost:8070/insuranceApply/getuser/${userId}`).then((res) =>{
              console.log(res.data)
                setInsurance(res.data);
            }).catch((err) => {
                alert(err.message);
               
            })
        }
        getInsurance();
    }, [])

const deleteInsurace = async (userId) => {
    try {
      await axios.delete(`http://localhost:8070/insuranceApply/delete/${userId}`);
     // alert('Data deleted successfully');
      window.location.reload(); //data deleted after that page will refresh automatically
    } catch (error) {
      alert('Error deleting data', error);
      console.log(error);
    }
  };



return (
    <div>
             <div className="hotelAppr-bg" style={{ backgroundColor: "#e6e6ee",position:"absolute" }}>
        <UserSideBar/>
        <div className="hotelAppr-cont">
        <div className="divimgresroom">
                <img src={reserve} className="imgupresroom"/>
                <div className="upresroom-cont1">
                    <p style={{marginLeft:"400px",marginBottom:"180px"}}>My Plans</p>
                </div>
               
        </div>
          <table>
            <thead>
              <tr>
                <th className="hotel-app-tabel-th">Plans</th>
                <th className="hotel-app-tabel-th">Delete</th>
              </tr>
            </thead>
            <tbody>
            {insurance.map((user) => (
                <tr key={user._id}>
                  <td>{user.plan}</td>
                
                  <td>
                      <button className="btn-delete-hotel" onClick={() => deleteInsurace (user._id)}>
                        Remove
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
