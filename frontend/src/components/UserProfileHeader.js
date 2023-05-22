import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import advertiser from "../img/advertiser.png";
import "./UserProfileHeader.css";

export default function UserProfileHeader() {
  const [selectedNavItem, setSelectedNavItem] = useState("");

  const location = useLocation();

  return (
    <div className="bd-container">
      <div className="left-nav">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav" style={{ marginTop: "1px" }}>
              <ul className="nav-bar">
                <img src={advertiser} className="Advertiser-img" />
                <li className="nav-item11" style={{ marginTop: "10px" }}>
                  <Link
                    to="/UserProfile"
                    style={{ color: "black", textDecoration:"none" }}
                    className={location.pathname === "/UserProfile" ? "selected" : ""}
                  >
                    View profile
                  </Link>
                </li>
                <li className="nav-item2">
                  <Link
                    to="/updateUserdetails"
                    style={{ color: "black", textDecoration:"none" }}
                    className={location.pathname === "/updateUserdetails" ? "selected" : ""}
                  >
                    Edit Details
                  </Link>
                </li>
                <Link to="/" className="Adnavlogout">
                  Logout
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
