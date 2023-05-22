import "./AdminAdvenView.css"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import UserHeader from "./UserHeader";
import AdminHeader from "./AdminHeader";


export default function AdminResiveOutView(){
    const[adminresiveOutViews,setAdminResiveOutViews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() =>{
        function getAdminResiveOutViews(){
            axios.get("http://localhost:8070/ResAdvenAct/").then((res) =>{
             
            setAdminResiveOutViews(res.data);

                console.log(res.data.name)

                
            }).catch((err) => {
                alert(err.message);
               
            })
        }
        getAdminResiveOutViews();
 }, [])

const filteredAdventure = adminresiveOutViews.filter(adventure => {
    return (
        adventure.fname.toLowerCase().includes(searchQuery.toLowerCase()) 
        //Outdoor.address.toLowerCase().includes(searchQuery.toLowerCase())
    );
});

return (
    <div className="madata">

      <UserHeader/>
      <AdminHeader/>
      <h1 class="cus1234">ALL OUTDOOR ADVENTURE Re</h1>
      <div class ="tab1234">
      <div className="hotelsearch" id="Ashen">
              <input type="text" className="hotel-search-btn" placeholder="Search for Outdoor Act" onChange={e => setSearchQuery(e.target.value)} />
          </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Total</th>

          </tr>
        </thead>
        <tbody>


          {filteredAdventure.map((item, index) => (
            <tr key={index}>
              <td>{item.fname}</td>
              <td>{item.email}</td>
              <td>{item.from}</td>
              <td>{item.to}</td>
              <td>{item.total}</td>

            </tr>
          ))}
        </tbody>
        <a  clasName="btn btn-warning" href={'/GenOutdoorReport/'}> <button class="btn btn-warning"><i className="far fa-edit"></i>&nbsp;Add Outdoor Activity</button></a>
      </table>
      </div>
 </div>
);
}