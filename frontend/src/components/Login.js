import "./login.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('customer');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8070/customer/login', {
            email: email,
            password: password,
            userType: userType
            });
            
            Swal.fire({
                icon: 'success',
                title: 'Login Success',
                showConfirmButton: true,
                confirmButtonText: 'OK',
            }) 
            sessionStorage.setItem('userId', response.data.userId);
            if (userType === 'customer') {
                window.location.href = 'http://localhost:3000/Home';
            } else if (userType === 'hotel_owner') {
                window.location.href = 'http://localhost:3000/hotelOwner/home';
            } else if (userType === 'advertiser') {
                window.location.href = 'http://localhost:3000/adHome';
            } else if (userType === 'destination_manager') {
                window.location.href = 'http://localhost:3000/destinationManagerProfile';
            } else if (userType === 'admin') {
                window.location.href = 'http://localhost:3000/approveHotel';

            }else if (userType === 'driver') {
                window.location.href = 'http://localhost:3000/vehicleEndReserveDriver';

            } else if (userType === 'insurance') {
                window.location.href = 'http://localhost:3000/InsuranceCompany-ClaimManagement';

            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: `Error ${error}`,
                showConfirmButton: true,
                confirmButtonText: 'OK',
            })
            console.error(error);
        }
        }
    
    
    return(
       
  <div className="bodylogin">
    <div className="split-screenlogin">
      <div className="leftlogin">
        <selection className="copylogin">
            <h1>Welcome to Travel plannig System</h1>
        </selection>
    </div>
    <div class="rightlogin">
        <form className="formlogin" onSubmit={handleSubmit}>
            <div className="input-container namelogin">
                <label for="email">Email</label>
                <input type="email" className="form-control" id="inputEmail3" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-container passwordlogin">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="inputPassword3" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                {/* <i class="far fa-eye-slash"></i> */}
            </div>
            <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">Your are a</label>
                <select id="inputState" className="form-select" value={userType} onChange={(e) => setUserType(e.target.value)}>
                <option selected>Customer</option>
                <option value={"hotel_owner"}>Hotel Owner</option>
                <option value={"advertiser"}>Advertiser</option>
                <option value={"destination_manager"}>Destination Manager</option>

                <option value={"insurance"}>Insurance Company</option>
                <option value={"driver"}>Vehicle Driver</option>
                <option value={"admin"}>Admin</option>
                </select>
            </div>
            <br/>
            <button type="submit" className="signup-btnlogin">Login</button>
            <br/>
            <p>Create New Account  <a className="linklogin" href="/User">Click</a></p>
            {/* <section class="copy">
                <div class="login-container">
                </div>
            </section> */}
        </form>
    </div>
</div>
</div>

    )
}