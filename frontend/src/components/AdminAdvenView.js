import "./AdminAdvenView.css"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import UserHeader from "./UserHeader";
import AdminHeader from "./AdminHeader";


export default function AdminAdvenView(){
    const[outdooracts,setOutdoorActs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() =>{
        function getOutdoorActs(){
            axios.get("http://localhost:8070/OutdoorAct/").then((res) =>{
             
            setOutdoorActs(res.data);

                console.log(res.data.name)

                
            }).catch((err) => {
                alert(err.message);
               
            })
        }
        getOutdoorActs();
    }, [])

const filteredAdventure = outdooracts.filter(adventure => {
  return (
      adventure.act_name.toLowerCase().includes(searchQuery.toLowerCase()) 
      //hotel.address.toLowerCase().includes(searchQuery.toLowerCase())
  );
});



const deleteOutdoorActs = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/OutdoorAct/delete/${id}`);
     // alert('Data deleted successfully');
      window.location.reload(); //data deleted after that page will refresh automatically
    } catch (error) {
      alert('Error deleting data', error);
      console.log(error);
    }
  };



return (
    <div className="madata">
      <UserHeader/>
      <AdminHeader/>
      <h1 class="cus1234">ALL OUTDOOR ADVENTURE ACTIVITIES</h1>
      <div class ="tab1234">

      <div className="hotelsearch" id="Ashen">
              <input type="text" className="hotel-search-btn" placeholder="Search for Outdoor Act" onChange={e => setSearchQuery(e.target.value)} />
          </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Ticket Price</th>
            <th scope="col">Description</th>
            <th scope="col">image</th>
          </tr>
        </thead>
        <tbody>


          {filteredAdventure.map((item, index) => (
            <tr key={index}>
              <td>{item.act_name}</td>
              <td>{item.location}</td>
              <td>{item.ticketprice}</td>
              <td>{item.description}</td>             
              <td><img src={`/images/${item.image}`} style={{width:"150px"}}/></td>

              <td>
              <a  clasName="btn btn-warning" href={'/EditOutdoor/'+item._id}> <button class="btn btn-warning"><i className="far fa-edit"></i>&nbsp;Edit</button></a>
              </td>
              <td>
                <button class="btn btn-danger"
                   onClick={() =>deleteOutdoorActs(item._id)}
                ><i className="far fa-trash-alt"></i>&nbsp;
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a  clasName="btn btn-warning" href={'/addoutdoor/'}> <button class="btn btn-warning"><i className="far fa-edit"></i>&nbsp;Add Outdoor Activity</button></a>
      </div>
    </div>
  );
}