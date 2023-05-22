import React, {useEffect, useState} from "react";
import hotelimg from "../img/hotel.jpg";
import axios from "axios";
import "./ViewHotel.css"

import { Link } from 'react-router-dom';

import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";

export default function ViewHotel(){

    const [hotels, setHotels] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [advertisements, setAdvertisements] = useState([]);
    const [packageNo, setPackageNo] = useState(3);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() =>{
        function getHotels(){
            axios.get("http://localhost:8070/hotel/viewhotelHome").then((res) =>{
                setHotels(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getHotels();
    }, [])

    const filteredHotels = hotels.filter(hotel => {
        return (
            hotel.hotelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            hotel.address.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    useEffect(() => {
      axios
        .get(`http://localhost:8070/advertisement/acceptedAdvertisements`)
        .then((res) => {
          const filteredAdvertisements = res.data.filter(
            (advertisement) => advertisement.packageNo === packageNo
          );
          setAdvertisements(filteredAdvertisements);
        })
        .catch((err) => {
          alert(err.message);
        });
    }, [packageNo]);

    useEffect(() => {
            // Start the slideshow interval when advertisements are available
            if (advertisements.length > 0 && !intervalId) {
              const id = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % advertisements.length);
              }, 5000);
              setIntervalId(id);
            }
        
            // Clean up the interval when advertisements change or component unmounts
            return () => {
              if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(null);
              }
            };
    }, [advertisements]);

    return (
        <div className="bg">
          <UserHeader/>
          <div className="container">
            <img src={hotelimg} className="img1" alt="hotel" />
            <div className="q1">HOTEL</div>
            <div className="hotelsearch">
              <input type="text" className="hotel-search-btn" placeholder="Search for hotels" onChange={e => setSearchQuery(e.target.value)} />
          </div>
            <div className="q2">
              "Book your dream stay with just a few clicks -
              <br />
              make it easy and convenient"
            </div>

          </div>
          
          <div className="newcont">

          {advertisements.length > 0 && (
            <img className="adHotel"
            src={`/images/${advertisements[currentSlide].image}`}
            alt={`Advertisement ${currentSlide + 1}`}
          />
        )}

            <Link to={'/newhotel'} className="btnNew">Add your hotel</Link>
            
          </div>
          <br />
          {filteredHotels.map((hotel) => (
              <div className="cont1" key={hotel._id}>
                <div className="cont2">
                  <img src={hotel.Image1} className="imgh" alt="hotel" />
                </div>
                <div className="cont3">
                  <div className="ref">{hotel.refund}</div>
                  {hotel.hotelName} <br />
                  <i className="bi bi-geo-alt-fill "></i> {hotel.address} <br />
                  <i className="bi bi-currency-dollar"></i>
                  {hotel.price} <br />
                  <div className="icons">
                    {hotel.wifi && (
                      <div>
                        <i className="bi bi-wifi icon"></i> WIFI
                      </div>
                    )}
                    {hotel.pool && (
                      <div>
                        <i className="bi bi-water icon"></i> Pool
                      </div> 
                    )}
                  </div>
                  <Link to={`/hotels/view/${hotel._id}`} className="btnSelectroom">Select Room</Link>
                </div>
              </div>
            ))}
            <UserFooter/>
        </div>
      );
}

