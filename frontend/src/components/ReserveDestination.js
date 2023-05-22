import React,{useState} from "react"
import axios from "axios";
import Swal from "sweetalert2";

export default function ReserveDestination(){

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [packageType, setPackageType] = useState("");
    const [selectedDestination, setSelectedDestination] = useState("");
    const [date, setDate] = useState("");
    const [noOfDays, setNoOfDays] = useState("");
    const [travelerType, setTravelerType] = useState("local");
    const [noOfTravelers, setNoOfTravelers] = useState("");
    const [totalTicketPrice, setTotalTicketPrice] = useState("");
   

    function sendData(e){

        e.preventDefault();


        const newDestinationReserve = {
            fname,
            lname,
            address,
            email,
            contactNo,
            packageType,
            selectedDestination,
            date,
            noOfDays,
            travelerType,
            noOfTravelers,
            totalTicketPrice
          

        }

        console.log(newDestinationReserve);
        axios.post("http://localhost:8070/destinationReserve/add",newDestinationReserve).then(()=>{
          Swal.fire({
            icon: 'success',
            title: 'Destination Reserved',
            showConfirmButton: true,
            confirmButtonText: 'Confirm',
          }).then(() => {
            // Redirect to another page
            window.location.href = "/Home";
          });
    
          
              }).catch((err)=>{
                alert(err);
              })
    }

    function handlesetPackageTypeChange(e) {
        const destination = e.target.value;
        setPackageType(destination);
      
        let ticketPrice = "";
      
        if (destination === "Religious Places") {
          ticketPrice = "100";
        } else if (destination === "Beaches") {
          ticketPrice = "500";
        } else if (destination === "Historical Places") {
          ticketPrice = "200";
        } else if (destination === "Nature") {
          ticketPrice = "500";
        } else if (destination === "National Parks") {
          ticketPrice = "1000";
        }
      
        let totalPrice = parseInt(ticketPrice);
        if (parseInt(noOfDays) > 3) {
          totalPrice *= 2;
        }
    
        setTotalTicketPrice(totalPrice.toString());
      }
      

    return(
      <div className="container" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "10px", height:"1150px" ,width:"1100px"}}>
       
            <form onSubmit={sendData}>

                <div> 
                    <h3 style={{marginLeft:"300px"}}>Reserve Destination</h3>
                </div>

                <br></br>

                <div className= "form-group">
                    <lable for="name">Customer First Nname</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter first name"
                    onChange={(e)=>{

                        setFname(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Customer Last Name</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter last name"
                    onChange={(e)=>{

                        setLname(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Customer Eddress</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter address"
                    onChange={(e)=>{

                        setAddress(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Customer Email</lable>
                    <input type="email" className="form-control" id="name" placeholder="  Enter email"
                    onChange={(e)=>{

                        setEmail(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Customer ContactNo</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter contactNo"
                    onChange={(e)=>{

                        setContactNo(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className="form-group">
          <label htmlFor="name">Package Type</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter package type"
            value={packageType}
            onChange={handlesetPackageTypeChange}
          />
        </div> 
        <br />

        <div className="form-group">
          <label htmlFor="name">Total Price</label>
          <input
            type="number"
            className="form-control"
            id="name"
            placeholder="Total Price"
            value={totalTicketPrice}
            onChange={(e) => setTotalTicketPrice(e.target.value)}
          />
        </div>
        <br />


        

        <div className= "form-group">
                    <lable for="name">Selected Destination</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter Selected destination"
                    onChange={(e)=>{

                        setSelectedDestination(e.target.value);

                    }}/>
                </div>
                <br></br>

           
    
                <div className= "form-group">
                    <lable for="name">Date</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter Date"
                    onChange={(e)=>{

                        setDate(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Number Of Days</lable>
                    <input type="number" className="form-control" id="name" placeholder="  Enter no of days"
                    onChange={(e)=>{

                        setNoOfDays(e.target.value);

                    }}/>
                </div>
                <br></br>

                
                {/* Add a dropdown list for traveler type */}
        <div className="form-group">
          <label htmlFor="travelerType">Traveler Type</label>
          <select
            className="form-control"
            id="travelerType"
            value={travelerType}
            onChange={(e) => setTravelerType(e.target.value)}
          >
            <option value="local">Local</option>
            <option value="foreign">Foreign</option>
          </select>
        </div>
        <br></br>

                <div className= "form-group">
                    <lable for="name">Number Of Travelers</lable>
                    <input type="number" className="form-control" id="name" placeholder="  Enter no of travelers"
                    onChange={(e)=>{

                        setNoOfTravelers(e.target.value);

                    }}/>
                </div>
                <br></br>

                




                <button type="submit" class="btn btn-primary">Save</button>
                <br></br>
                
            </form>
            </div>
     
    )
}