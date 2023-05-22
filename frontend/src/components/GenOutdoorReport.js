import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./GenAdvertisingReport.css";
import AdminHeader from "./AdminHeader";
import jsPDF from "jspdf";
import ResAdvenAct from "./ResAdvenAct";

export default function GenAdvertisingReport() {
  const currentDate = new Date().toLocaleDateString();
  const[adminersiveoutViews,setAdminResiveOutViews] = useState([]);
 
  useEffect(() =>{
    function getAdminResiveOutViews(){
        axios.get("http://localhost:8070/ResAdvenAct/").then((res) =>{
         
        setAdminResiveOutViews(res.data);

            console.log(res.data.name)

            
        }).catch((err) => {
            alert(err.message);
           
        })
    }
    getAdminResiveOutViews();
    }, [])


//   const totalRevenue = advertisements.reduce((acc, cur) => {
//     return acc + Number(cur.price);
//   }, 0);

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(`Date: ${currentDate}`, 20, 30);
    doc.setFontSize(30);
    doc.setTextColor("#191970");
    doc.text("Profit Report", 20, 50);
    doc.setLineWidth(0.5);
    doc.line(20, 55, 190, 55);
    doc.setFontSize(18);
    doc.setTextColor("#000000");
    doc.text(`Total Number of Advertisers: ${adminersiveoutViews.length}`, 20, 80);
    // doc.text(`Total Revenue: ${total} $`, 20, 120);
    doc.setFontSize(12);
    doc.setTextColor("#000000");
    doc.text("**This is an auto-generated report. No signature required.", 20, 150);
    doc.setLineWidth(0.5);
    doc.line(20, 155, 190, 155);
    doc.setFontSize(10);
    doc.setTextColor("#808080");
    doc.text("Souther Lanka", 20, 165);
    doc.text("Ratnapura, City", 20, 170);
    doc.text("Sri Lanka, Country", 20, 175);
    doc.text("www.southernlanka.com", 20, 180);
    doc.save("outdoor_report.pdf");
  };

  return (
    <div className="hotelAppr-bg" style={{ backgroundColor: "#e6e6ee", position: "absolute", height: "850px" }}>
      <AdminHeader />
      <div className="hotelAppr-cont">
        <p></p>
        <p>Date {currentDate}</p>
        <p className="genrepTopic">PROFIT REPORT</p>
        <div>
        <p className="genrepCont" style={{ marginTop: "5%" }}>
            Total Number of customers: {adminersiveoutViews.length}</p>
          {/* <p className="genrepCont">Total Revenue: {total} $</p> */}
        </div>
        <p style={{ marginTop: "15%" }}>**This is an auto-generated report. No signature required.</p>
        <button onClick={handleDownload} className="genrepBtn">
          Download
        </button>
      </div>
    </div>
  );
}