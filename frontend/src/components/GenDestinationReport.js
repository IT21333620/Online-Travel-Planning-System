import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import DestinationManagerHeader from "./DestinationManagerHeader";
import jsPDF from "jspdf";

export default function GenDestinationReport(){
  
    const currentDate = new Date().toLocaleDateString();
    const userId = sessionStorage.getItem('userId');
    const[destinationReserves,setDestinationReserves] = useState([]);
    

    useEffect(() =>{
      function getDestinationReserves(){
          axios.get("http://localhost:8070/destinationReserve/").then((res) =>{
              setDestinationReserves(res.data);
          }).catch((err) => {
              alert(err.message);
          })
      }
      getDestinationReserves();
  }, [])

      const total = destinationReserves.reduce((acc, cur) => {
        return acc + Number(cur.totalTicketPrice);
      }, 0);
      

      const handleDownload = () => {
        const doc = new jsPDF();
        doc.setFontSize(20);
        doc.text(`Date: ${currentDate}`, 20, 30);
        doc.setFontSize(30);
        doc.setTextColor("black");
        doc.text("Profit Report", 20, 50);
        doc.setLineWidth(0.5);
        doc.line(20, 55, 190, 55);
        doc.setFontSize(18);
        doc.setTextColor("#000000");
        doc.text(`Total Price: ${total} $`, 20, 100);
        doc.setFontSize(12);
        doc.setTextColor("#000000");
        doc.text("**This is an auto-generated report. No signature required.", 20, 130);
        doc.setFontSize(10);
        doc.setTextColor("#808080");
        doc.save("destination_report.pdf");
      };
    return (
      <div className="hotelAppr-bg" style={{ backgroundColor: "#e6e6ee",position:"absolute", height:"850px" }}>
        <DestinationManagerHeader/>
        <div className="hotelAppr-cont" >
            <p></p>
            <p>Date {currentDate}</p>
            <p  className="genrepTopic">Profit Report</p>
            <div>
                <p className="genrepCont">Total Price : {total} $</p>
            </div>
            <p style={{marginTop:"15%"}}>**This is a auto generated report no signature required</p>
            <button onClick={handleDownload} className="genrepBtn">Download</button>
              </div>
              
          </div>
      )
}