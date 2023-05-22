import React, {useEffect, useState} from "react";
import axios from "axios";
import "./ViewReservedDestinations.css"
import DestinationManagerHeader from "./DestinationManagerHeader";
import jsPDF from "jspdf";
import 'jspdf-autotable';




export default function ViewReservedDestinations(){

    const[destinationReserves,setDestinationReserves] = useState([]);


    function myFunction(x){
        console.log("Hey" + x)
    }

    const destinationReserve= async (id) => {
        try {
          await axios.delete(`http://localhost:8070/destinationReserve/delete/${id}`);
         // alert('Data deleted successfully');
          window.location.reload(); //data deleted after that page will refresh automatically
        } catch (error) {
          alert('Error deleting data', error);
          console.log(error);
        }
    };

    const exportPDF = () => {
        const unit = "pt";
        const size = "A3"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Reserved Destinations Report";
        const headers = [["First Name", "Last Name", "Address", "Email","Contact No","Selected Destination","Date","No Of Dates","Traveler Type","No Of Travelers"]];
    
        const data = destinationReserves.map(elt => [elt.fname, elt.lname, elt.address, elt.email,elt.contactNo,elt.selectedDestination,elt.date,elt.noOfDays,elt.travelerType,elt.noOfTravelers, ]);
    
        let content = {
            startY: 50,
            head: headers,
            body: data,
            styles: {
                // CSS styles for the table
                fontSize: 12,
                cellPadding: { top: 5, right: 5, bottom: 5, left: 5 },
                head: { // Styles for the table header
                    fillColor: "#f2f2f2", // Change the color here
                },
            },
            columnStyles: {
                // Styles for specific columns
                0: { fontStyle: "bold" }, // First Name column
                // You can add more column styles here
            },
            theme: "grid", // Set the table theme to 'grid'
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
    }




    useEffect(() =>{
        function getDestinationReserves(){
            axios.get("http://localhost:8070/destinationReserve/").then((res) =>{
                setDestinationReserves(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getDestinationReserves();
    }, [])

    

    return(

    
        <div class="view-Reserved-Destination-heading">
            <DestinationManagerHeader/>

        <h3>RESERVED DESTINATION DETAILS</h3>
        <br/>
            {/* <h4 className = "destinationReserve-heading1" >RESERVED DESTINATION DETAILS</h4>
            <br/> */}
            
            
      


          <br></br>
          <table className="reserveddestination-table" style={{ backgroundColor: 'white'}}>
                    <tr>
                        
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Contact No</th>
                        <th>Selected Destination</th>
                        <th>Date</th>
                        <th>No Of Dates</th>
                        <th>Traveler Type</th>
                        <th>No Of Travelers</th>
                        <th>Total Price</th>
                    </tr>
                {
                    destinationReserves.map( i=>{
                        return(
                            <tr>
                                <td>{i.fname}</td>
                                <td>{i.lname}</td>
                                <td>{i.address}</td>
                                <td>{i.email}</td>
                                <td>{i.contactNo}</td>
                                <td>{i.selectedDestination}</td>
                                <td>{i.date}</td>
                                <td>{i.noOfDays}</td>
                                <td>{i.travelerType}</td>
                                <td>{i.noOfTravelers}</td>
                                <td>{i.totalTicketPrice}</td>
                                <td>
                                    <button style={{background:'#ca3838'}}onClick={() =>destinationReserve(i._id)}>Delete</button>
                                    <a href={'/updateReservedDestination/'+i._id}> <button style={{background:'#41b135'}} clasName="btn-primary11"><i className="far fa-edit"></i>&nbsp;Edit</button></a>
                                    
                                   
                                </td>
                            </tr>
                            
                        );
                    }

                    )
                }
                </table>

                <br></br><br></br>
                <button className='btn btn-primary' style={{ float: 'right',width:"170px"}} onClick={() => exportPDF()}>Generate Result</button>

                <br></br>




        </div>
    )
}