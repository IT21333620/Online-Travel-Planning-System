import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./GenHotelReport.css";
import HotelOwnerHeader from "./HotelOwnerHeader";
import jsPDF from "jspdf";


export default function GenHotelReport(){
  
    const currentDate = new Date().toLocaleDateString();
    const userId = sessionStorage.getItem('userId');
    const[hotel,setHotel] = useState({});
    const[checkin,setCheckin] = useState([]);

    useEffect(() => {
        const fetchHotel = async () =>{
            const res = await axios.get(`http://localhost:8070/hotel/view/${userId}`);
            setHotel(res.data);
            console.log(res.data)
        };
        fetchHotel();
      }, [userId]);

    useEffect(() => {
      const fetchCheckin = async () =>{
          const res = await axios.get(`http://localhost:8070/hotel/viewCheckIn/${userId}`);
          setCheckin(res.data);
          console.log(res.data)
      };
      fetchCheckin();
    }, [userId]);

    const totalSum = checkin.reduce((acc, cur) => acc + cur.total, 0);
    const reduction = totalSum * 0.05;
    const reducedTotal = totalSum - reduction;

    const handleDownload = () => {
        const doc = new jsPDF();
          doc.setFontSize(15);
          doc.text(`Date: ${currentDate}`, 20, 30);
          doc.setFontSize(30);
          doc.setTextColor("#191970");
          doc.text("Profit Report", 20, 50);
          doc.setLineWidth(0.5);
          doc.line(20, 55, 190, 55);
          doc.setFontSize(14);
          doc.setTextColor("#000000");
          doc.text(`Hotel Name: ${hotel.hotelName}`, 20, 80);
          doc.text(`Number of Guests: ${checkin.length}`, 20, 100);
          doc.text(`Earnings from the website: ${totalSum} $`, 20, 120);
          doc.text(`Web site cut percentage: 5%`, 20, 140);
          doc.text(`Profit: ${reducedTotal} $`, 20, 160);
          doc.setFontSize(12);
          doc.setTextColor("#000000");
          doc.text("**This is an auto-generated report. No signature required.", 20, 180);
          doc.setLineWidth(0.5);
          doc.line(20, 185, 190, 185);
          doc.setFontSize(10);
          doc.setTextColor("#808080");
          doc.text(`${hotel.hotelName}`, 20, 195);
          doc.text(`${hotel.address}`, 20, 200);
          doc.text("www.southernlanka.com", 20, 210);
          doc.save("hotel_profit_report.pdf");
      };
    
    return (
      <div className="hotelAppr-bg" style={{ backgroundColor: "#e6e6ee",position:"absolute", height:"850px" }}>
        <HotelOwnerHeader/>
        <div className="hotelAppr-cont" >
            <p></p>
            <p>Date {currentDate}</p>
            <p  className="genrepTopic">Profit Report</p>
            <div>
                <p className="genrepCont" style={{marginTop:"5%"}}>Hotel Name : {hotel.hotelName}</p>
                <p className="genrepCont">Number of Guests : {checkin.length}</p>
                <p className="genrepCont">Earnings from the website : {totalSum} $</p>
                <p className="genrepCont">Web site cut percentage : 5%</p>
                <p className="genrepCont">Profit : {reducedTotal} $</p>
            </div>
            <p style={{marginTop:"15%"}}>**This is a auto generated report no signature required</p>
            <button onClick={handleDownload} className="genrepBtn">Download</button>
              </div>
              
          </div>
      )
}