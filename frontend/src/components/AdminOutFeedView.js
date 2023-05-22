import "./AdminAdvenView.css"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import UserHeader from "./UserHeader";
import AdminHeader from "./AdminHeader";


export default function AdminOutFeedView(){
    const[adminoutfeedviews,setAdminOutFeedViews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() =>{
        function getAdminOutFeedViews(){
            axios.get("http://localhost:8070/OutdoorFeedback/").then((res) =>{
             
            setAdminOutFeedViews(res.data);

                console.log(res.data.name)

                
            }).catch((err) => {
                alert(err.message);
               
            })
        }
        getAdminOutFeedViews();
    }, [])

const filteredAdventure = adminoutfeedviews.filter(adventure => {
  return (
      adventure.feedback.toLowerCase().includes(searchQuery.toLowerCase()) 
      //Outdoor.address.toLowerCase().includes(searchQuery.toLowerCase())
  );
});



const deleteAdminOutFeedViews = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/OutdoorFeedback/delete/${id}`);
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
      <h1 class="cus1234">ALL OUTDOOR ADVENTURE FEEDBACK</h1>
      <div class ="tab1234">

      <div className="hotelsearch" id="Ashen">
              <input type="text" className="hotel-search-btn" placeholder="Search for Outdoor Act" onChange={e => setSearchQuery(e.target.value)} />
          </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">feedback</th>

          </tr>
        </thead>
        <tbody>


          {filteredAdventure.map((item, index) => (
            <tr key={index}>
              <td>{item.feedback}</td>
              

             
              <td>
                <button class="btn btn-danger"
                   onClick={() =>deleteAdminOutFeedViews(item._id)}
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