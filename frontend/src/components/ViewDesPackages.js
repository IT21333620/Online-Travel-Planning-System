import React, {useEffect, useState} from "react";
import axios from "axios";
import "./ViewReservedDestinations.css"

export default function ViewDesPackages(){
   
    const[destinationCreates,setDestinationCreates] = useState([]);

    function myFunction(x){
        console.log("Hey" + x)
    }

    const destinationCreate= async (id) => {
        try {
          await axios.delete(`http://localhost:8070/destinationCreate/delete/${id}`);
         // alert('Data deleted successfully');
          window.location.reload(); //data deleted after that page will refresh automatically
        } catch (error) {
          alert('Error deleting data', error);
          console.log(error);
        }
    };

    useEffect(() =>{
        function getDestinationCreates(){
            axios.get("http://localhost:8070/destinationCreate/").then((res) =>{
                setDestinationCreates(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getDestinationCreates();
    }, [])

    return(
        
        <div>
        <br/>
            <h4  style={{marginLeft:'550PX'}}> DESTINATION PACKAGES DETAILS</h4>
            <br/>

          <br></br>
          <table className="viewDespackages-table" style={{ backgroundColor: 'white' }}>
                    <tr>
                        
                        <th>Package Type</th>
                        <th>First Location</th>
                        <th>First Location Description</th>
                        {/* <th>First Location Map URL</th> */}
                        <th>Second Location</th>
                        <th>Second Location Description</th>
                        {/* <th>Second Location Map URL</th> */}
                        <th>Third Location</th>
                        <th>Third Location Description</th>
                        {/* <th>Third Location Map</th> */}
                        <th>Fourth Location</th>
                        <th>Fourth Location Description</th>
                        {/* <th>Fourth Location Map URL</th> */}
                        <th>Fifth Location</th>
                        <th>Fifth Location Description</th>
                        {/* <th>Fifth Location Map URL</th> */}
                        
                    </tr>
                {
                    destinationCreates.map( i=>{
                        return(
                            <tr>
                                <td>{i.packageType}</td>
                                <td>{i.location1}</td>
                                <td>{i.locationDescription1}</td>
                                {/* <td>{i.location1map}</td> */}
                                <td>{i.location2}</td>
                                <td>{i.locationDescription2}</td>
                                {/* <td>{i.location2map}</td> */}
                                <td>{i.location3}</td>
                                <td>{i.locationDescription3}</td>
                                {/* <td>{i.location3map}</td> */}
                                <td>{i.location4}</td>
                                <td>{i.locationDescription4}</td>
                                {/* <td>{i.location4map}</td> */}
                                <td>{i.location5}</td>
                                <td>{i.locationDescription5}</td>
                                {/* <td>{i.location5map}</td> */}
                                
                                <td>
                                    <button style={{background:'#ca3838'}}onClick={() =>destinationCreate(i._id)}>Delete</button>
                                    {/* <a href={'/updateDestinationPackage/'+i._id}> <button style={{background:'#41b135'}} clasName="btn-primary11"><i className="far fa-edit"></i>&nbsp;Edit</button></a> */}
                                    
                                   
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