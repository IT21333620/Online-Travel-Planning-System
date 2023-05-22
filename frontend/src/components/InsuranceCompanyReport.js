import React, {useEffect, useState} from "react";
import axios from "axios";
import "./AdminHotelApprove.css";
import InsuranceOwnerHeader from "./InsuranceOwnerHeader";
import jsPDF from "jspdf";

export default function InsuranceCompanyReport(){
  
    const currentDate = new Date().toLocaleDateString();
    const[insurance,setInsurance] = useState({});
    const[feedback,setFeedback] = useState({});
    const[plan,setPlan] = useState({});
    const[claim,setClaim] = useState({});

    
  
      useEffect(() =>{
        function getInsurance(){
            axios.get("http://localhost:8070/insurance/view").then((res) =>{
              
                setInsurance(res.data);

            }).catch((err) => {
                alert(err.message);
            })
        }
        getInsurance();
    }, [])


    useEffect(() =>{
      function getFeedback(){
          axios.get("http://localhost:8070/insuranceFeedback/view").then((res) =>{
            console.log(res.data)
              setFeedback(res.data);
          }).catch((err) => {
              alert(err.message);
             
          })
      }
      getFeedback();
    },[])

       useEffect(() =>{
        function getPlan(){
            axios.get("http://localhost:8070/insuranceApply/view").then((res) =>{
                setPlan(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getPlan();
    }, [])

    useEffect(() =>{
      function getClaim(){
          axios.get("http://localhost:8070/insuranceClaim/view").then((res) =>{
              setClaim(res.data);
          }).catch((err) => {
              alert(err.message);
          })
      }
      getClaim();
  }, [])




  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(`Date: ${currentDate}`, 20, 30);
    doc.setFontSize(30);
    doc.setTextColor("#191970");
    doc.text("User Report", 20, 50);
    doc.setLineWidth(0.5);
    doc.line(20, 55, 190, 55);
    doc.setFontSize(18);
    doc.setTextColor("#000000");
    doc.text(`Total Number of Insurance users: ${insurance.length}`, 20, 80);
    doc.text(`Total Number of Plans: ${plan.length}`, 20, 100);
    doc.text(`Total Number of Claims: ${claim.length}`, 20, 120);
    doc.text(`Total Number of Feedback: ${feedback.length}`, 20, 140)
    doc.setFontSize(12);
    doc.setTextColor("#000000");
    doc.text("**This is an auto-generated report. No signature required.", 20, 170);
    doc.setLineWidth(0.5);
    doc.line(20, 155, 190, 155);
    doc.setFontSize(10);
    doc.setTextColor("#808080");
    doc.text("Southern Lanka", 20, 185);
    doc.text("Ratnapura, City", 20, 190);
    doc.text("Sri Lanka, Country", 20, 195);
    doc.text("www.southernlanka.com", 20, 200);
    doc.save("insurance_report.pdf");
  };
    
    return (
      <div className="hotelAppr-bg" style={{ backgroundColor: "#e6e6ee" }}>
        <InsuranceOwnerHeader/>
       
        <div className="hotelAppr-cont">
            <p></p>
            <p style={{fontSize:"30px",fontWeight:"bold"}}>Date {currentDate}</p>
            <p style={{fontSize:"25px",fontWeight:"bold"}}>User Report</p>
            <div>
            <p>Insurance Name : Ceylon Insurance Company</p>
                  <p>Number of Insurance Users : {insurance.length}</p>
                  <p>Number of plans: {plan.length} </p>
                  <p>Number of feedbacks : {feedback.length}</p>
                  <p>Number of claims:  {claim.length} </p>
            </div>
            <p>**This is a auto generated report no signature required**</p>
            <button style={{backgroundColor:"green",borderRadius:"10px"}} onClick={handleDownload}>Download</button>
              </div>
              
          </div>
      )
}