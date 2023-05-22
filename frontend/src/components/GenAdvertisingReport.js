import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./GenAdvertisingReport.css";
import AdminHeader from "./AdminHeader";
import jsPDF from "jspdf";

export default function GenAdvertisingReport() {
  const currentDate = new Date().toLocaleDateString();
  const [advertisements, setAdvertisements] = useState([]);
  const [advertisers, setAdvertisers] = useState([]);

  useEffect(() => {
    function getAdvertisements() {
      axios
        .get("http://localhost:8070/advertisement/acceptedAdvertisements")
        .then((res) => {
          setAdvertisements(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAdvertisements();
  }, []);

  useEffect(() => {
    function getAdvertisers() {
        axios.get("http://localhost:8070/advertiser/").then((res) => {
            setAdvertisers(res.data);
        }).catch((err) => {
            alert(err.message);
        })
    }
    getAdvertisers();

}, [])

  // const totalRevenue = advertisements.reduce((acc, cur) => {
  //   return acc + Number(cur.totalFee);
  // }, 0);

  const totalRevenue = advertisements.reduce((acc, cur) => {
    return acc + Number(cur.price) + (cur.time === "Yes" ? 10 : 0);
  }, 0);

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
    doc.text(`Total Number of Advertisers: ${advertisers.length}`, 20, 80);
    doc.text(`Total Number of Advertisements: ${advertisements.length}`, 20, 100);
    doc.text(`Total Revenue: ${totalRevenue} $`, 20, 120);
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
    doc.save("advertising_report.pdf");
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
            Total Number of Advertisers: {advertisers.length}</p>
          <p className="genrepCont">
            Total Number of Advertisements: {advertisements.length}
          </p>
          <p className="genrepCont">Total Revenue: {totalRevenue} $</p>
        </div>
        <p style={{ marginTop: "15%" }}>**This is an auto-generated report. No signature required.</p>
        <button onClick={handleDownload} className="genrepBtn">
          Download
        </button>
      </div>
    </div>
  );
}
