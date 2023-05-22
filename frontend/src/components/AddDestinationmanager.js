import React,{useState} from "react"
import axios from "axios";
import "./AddDestinationmanager.css";
import Swal from "sweetalert2";

export default function AddDestinationmanager(){

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");

    
        function sendData(e){

            e.preventDefault();

            if (password.length < 8) {
                alert("Password must have at least 8 characters");
                return;
              }

            const newDestinationmanager = {
                fname,
                lname,
                address,
                email,
                contactNo,
                age,
                password
            }
    
            console.log(newDestinationmanager);
            axios.post("http://localhost:8070/destinationmanager/add",newDestinationmanager).then(()=>{
                Swal.fire({
                    icon: 'success',
                    title: 'Destination Manager Added',
                    showConfirmButton: true,
                    confirmButtonText: 'Confirm',
                  }).then(() => {
                    // Redirect to another page
                    window.location.href = "/adminViewDestinationManager";
                  });
              }).catch((err)=>{
                alert(err);
              })
        }
    
    return(
        <div className="container-adddestinationform">
            <form onSubmit={sendData}>

                <div> 
                    <h3 style={{marginLeft:"200px"}}>Destination Manager Registration Form</h3>
                </div>

                <br></br><br></br>

                <div className="form-group-row">
                <div className="form-group">
               <label htmlFor="fname">Destination Manager First Name</label>
               <input type="text" className="form-control" id="fname" placeholder="Enter first name" onChange={(e)=>{setFname(e.target.value);}} />
             </div>
              <div className="form-group">
            <label htmlFor="lname">Destination Manager Last Name</label>
             <input type="text" className="form-control" id="lname" placeholder="Enter last name" onChange={(e)=>{setLname(e.target.value);}} />
              </div>
                   </div>

                <br></br>

                <div className= "form-group">
                    <lable for="name">Destination Manager Eddress</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter address"
                    onChange={(e)=>{

                        setAddress(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Destination Manager Email</lable>
                    <input type="email" className="form-control" id="name" placeholder="  Enter email"
                    onChange={(e)=>{

                        setEmail(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Destination Manager contactNo</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter contactNo"
                    onChange={(e)=>{

                        setContactNo(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Destination Manager Age</lable>
                    <input type="number" className="form-control" id="name" placeholder="  Enter age"
                    onChange={(e)=>{

                        setAge(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Destination Manager Password</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter password"
                    onChange={(e)=>{

                        setPassword(e.target.value);

                    }}/>
                </div>
                <br></br>

                <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div>
    )
}