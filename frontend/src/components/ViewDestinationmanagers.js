import React, {useEffect, useState} from "react";
import axios from "axios";
import "./ViewDestinationmanager.css"
import {Link} from 'react-router-dom';
import AdminHeader from "./AdminHeader";


export default function ViewDestinationmanagers(){

    const[destinationmanagers,setDestinationmanagers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


    function myFunction(x){
        console.log("Hey" + x)
    }


    const destinationmanager= async (id) => {
        try {
          await axios.delete(`http://localhost:8070/destinationmanager/delete/${id}`);
         // alert('Data deleted successfully');
          window.location.reload(); //data deleted after that page will refresh automatically
        } catch (error) {
          alert('Error deleting data', error);
          console.log(error);
        }
    };



    useEffect(() =>{
        function getDestinationmanagers(){
            axios.get("http://localhost:8070/destinationmanager/").then((res) =>{
                setDestinationmanagers(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getDestinationmanagers();
    }, [])

    const filteredDestinationmanagers = destinationmanagers.filter(i => {
        return (
            i.fname.toLowerCase().includes(searchQuery.toLowerCase()) 
         
        );
    });



    return(
        
        
        <div className="table-container-viewdestimanager" style={{ marginLeft: '50px' }}>

        <AdminHeader/>

            <br/>
            <h4 className = "destinationmanager-heading1">MANAGE DESTINATION MANAGER DETAILS</h4>
            <br/>
           
            <Link to="/destinationmanagerform" className="btn view-destinationmanager-add">Add</Link>
              <br></br>
            <div className="search-destinationmanager">
              <input type="text" placeholder="Search destination managers" style={{ width: '270px',height:'45pX' }}onChange={e => setSearchQuery(e.target.value)} />
          </div>

            <br></br><br></br>
            <table className="destinationmanagers-table" style={{ backgroundColor: 'white' }}>
                    <tr>
                        <th>Destination Manager ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Contact No</th>
                        <th>Age</th>
                        <th>Password</th>
                    </tr>
                {
                    filteredDestinationmanagers.map( i=>{
                        return(
                            <tr>
                                <td>{i._id}</td>
                                <td>{i.fname}</td>
                                <td>{i.lname}</td>
                                <td>{i.address}</td>
                                <td>{i.email}</td>
                                <td>{i.contactNo}</td>
                                <td>{i.age}</td>
                                <td>{i.password}</td>
                                <td>
                                    <button style={{background:'#DA0202'}}clasName="btn1234" onClick={() =>destinationmanager(i._id)}>Delete</button>
                                    
                                </td>
                            </tr>
                            
                        );
                    }

                    )
                }
                </table>
        </div>
    )
}