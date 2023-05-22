import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import advertiser from "../img/advertiser.png";
import "./AdvertiserHeader.css";

export default function AdvertiserHeader() {
  const [selectedNavItem, setSelectedNavItem] = useState("");

  const location = useLocation();

  function handleLogout() {
       
    sessionStorage.removeItem('userId');
    window.location.href = '/';
    }

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
                    to="/advertiserProfile"
                    style={{ color: "black", textDecoration:"none" }}
                    className={location.pathname === "/advertiserProfile" ? "selected" : ""}
                  >
                    View profile
                  </Link>
                </li>
                <li className="nav-item2">
                  <Link
                    to="/updateAdvertisers"
                    style={{ color: "black", textDecoration:"none" }}
                    className={location.pathname === "/updateAdvertisers" ? "selected" : ""}
                  >
                    Edit Details
                  </Link>
                </li>
                <li className="nav-item2">
                  <Link
                    to="/advertiserAdvertisements"
                    style={{ color: "black", textDecoration:"none" }}
                    className={location.pathname === "/advertiserAdvertisements" ? "selected" : ""}
                  >
                    View my advertisements
                  </Link>
                </li>
                <li className="nav-item2">
                  <Link
                    to="/select"
                    style={{ color: "black", textDecoration:"none" }}
                    className={location.pathname === "/select" ? "selected" : ""}
                  >
                    Add new advertisements
                  </Link>
                  <br />
                </li>

                <button className="Adnavlogout" onClick={handleLogout}>
                  Logout
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
