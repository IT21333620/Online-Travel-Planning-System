// import React, { useState, useEffect } from "react"
// import axios from "axios";
// import { Link, useParams } from "react-router-dom"
// import "./ViewAdvertisers.css"
// import "./cusProfile.css"; 
// import UserSideBar from "./UserSideBar"; 

// export default function UserProfile() {
//     const[user,setUser] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     const userId = sessionStorage.getItem('userId');


//     useEffect(() =>{
//         function getUser(){
//             axios.get(`http://localhost:8070/user/view/${userId}`).then((res) =>{
//                 setUser(res.data);
//                 console.log(res.data);  
//             }).catch((err) => {
//                 alert(err.message);
//             })
//         }
//         getUser();
// },[userId])

//   return (

//     <div className="ad-bg" style={{ backgroundColor: "#e6e6ee",position:"absolute" }}>
//       <UserSideBar/>
//     <div className="Adcontainer">
//         <h3 className="titleStyle"><br/>User Profile</h3>

//         <div className="Adfield">
//             <span className="Adlabel">Name</span>
//             <span className="Advalue">{user?.fname??""}</span>
//         </div>
//         <div className="Adfield">
//             <span className="Adlabel">Email:</span>
//             <span className="Advalue">{user?.email??""}</span>
//         </div>
//         <div className="Adfield">
//             <span className="Adlabel">Address:</span>
//             <span className="Advalue">{user?.address??""}</span>
//         </div>
//         <div className="Adfield">
//             <span className="Adlabel">Contact No:</span>
//             <span className="Advalue">{user?.phone??""}</span>
//         </div>
//             <Link to = "/UpdateUserdetails" className="bttnNext" style = {{width:"100px", textDecoration:"none", paddingLeft:"30px",marginTop:"20px",marginRight:"700px"}}>EDIT</Link>

//     </div>
//     </div>
//     )

// }

import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link, useParams } from "react-router-dom"
import "./ViewAdvertisers.css"
import "./AdvertiserProfile.css"; 
import UserSideBar from "./UserSideBar"; 

export default function AdvertiserProfile() {

    const [user, setUser] = useState([]);
    const userId = sessionStorage.getItem('userId');

    useEffect(() => {
        function getUser() {
            axios.get(`http://localhost:8070/user/view/${userId}`).then((res) => {
                setUser(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getUser();

    }, [userId])

  return (

    <div className="ad-bg" style={{ backgroundColor: "#e6e6ee",position:"absolute" }}>
      <UserSideBar/>
    <div className="Adcontainer">
        <h3 className="titleStyle"><br />USER PROFILE</h3>

        <div className="advertiser">
                <div className="Adfield">
                    <span className="Adlabel">Name</span>
                    <span className="Advalue">{user?.fname??""}</span>
                </div>
                <div className="Adfield">
                    <span className="Adlabel">Email:</span>
                    <span className="Advalue">{user?.email??""}</span>
                </div>
                <div className="Adfield">
                    <span className="Adlabel">Address:</span>
                    <span className="Advalue">{user?.address??""}</span>
                </div>
                <div className="Adfield">
                    <span className="Adlabel">Contact No:</span>
                    <span className="Advalue">{user?.phone??""}</span>
                </div> 
            </div>

            <Link to = "/UpdateUserdetails" className="bttnNext" style = {{width:"100px", textDecoration:"none", paddingLeft:"30px",marginTop:"20px",marginRight:"700px"}}>
                    EDIT
        </Link>
        
    </div>
    </div>
    )

}