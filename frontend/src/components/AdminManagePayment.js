import "./PaymentTable.css"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import AdminHeader from "./AdminHeader"
import jsPDF from "jspdf";
import 'jspdf-autotable';


export default function AdminManagePayment(){
    const[payment,setPayment] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() =>{
        function getPayment(){
            axios.get("http://localhost:8070/payment/view").then((res) =>{
             
                setPayment(res.data);

            

                
            }).catch((err) => {
                alert(err.message);
               
            })
        }
        getPayment();
},[])


const filteredPayment = payment.filter(item => {
  return (
      item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase()) 
  );
});



const deletePayment = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/payment/delete/${id}`);
     // alert('Data deleted successfully');
      window.location.reload(); //data deleted after that page will refresh automatically
    } catch (error) {
      alert('Error deleting data', error);
      console.log(error);
    }
  };

    const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "My Report";
    const headers = [["Name on Card", "Credit card number", "Phone", "Address", "E-mail"]];

    const data = payment.map(elt=>[elt.name, elt.phone, elt.Card, elt.address, elt.email]);

    let content = {
        startY: 50,
        head: headers,
        body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf")
}



return (
    <div >
      <AdminHeader/>
      <div class="customertable123">
      <h1 class="cus1234-pay">Payment Management</h1>
      <div class ="tab1234-pay">

      <div className="search1234">
      <button className='btn-pay' onClick={() => exportPDF()}>Export Result</button>
         <i class="search-pay" style={{marginLeft:-100}}> &nbsp;   <input type="text"  placeholder="Search for Payment" onChange={e => setSearchQuery(e.target.value)} /></i> 
      </div>    
      <table class="table-bordered-pay">
        <thead>
          <tr>
            <th scope="col">Name on Card</th>
            <th scope="col">Credit card number</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">E-mail</th>
            {/* <th scope="col">civ</th> */}
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayment.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.Card}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.email}</td>
              {/* <td>{item.civ}</td> */}
              <td>
              <a  clasName="btn btn-warning" href={'/EditPayment/'+item._id}> <button class="btn-edit12"><i className="far fa-edit"></i>&nbsp;Edit</button></a>
              </td>
              <td>
                <button class="btn-delete12"
                   onClick={() =>deletePayment(item._id)}
                ><i className="far fa-trash-alt"></i>&nbsp;
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
  );
}
