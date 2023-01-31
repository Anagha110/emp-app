import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import {Link} from "react-router-dom"
import { Button } from 'semantic-ui-react'
import Navbar from './Navbar';


const ViewEmployeedata = () => {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost:3004/api/employeelist`)
              .then((response) => {
                console.log(response.data)
                  setAPIData(response.data);
                  
              })
         
    }, [])
  return  (
    <div>
      <Navbar/>
        
        <div className="container">
      <div className="card">
        <div className='card-header'>
        <div>
        <h2>Employee details</h2>
      </div>
        </div>
        <div className="card-body">
            
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
               
                <td>Name</td>
                <td>Location</td>
                <td>Position</td>
                <td>Salary</td>
               
                
              </tr>
            </thead>
            <tbody>
            {
            APIData.map((data) => {
   return (
    <tr key={data.id}>

        <td>{data.name}</td>
        <td>{data.location}</td>
        <td>{data.position}</td>
        <td>{data.salary}</td>
        
    </tr>
       )})}

            </tbody>
          </table>
        </div>
      </div>
    </div>
    <footer>
    
  </footer>
    </div>
  )
}
export default ViewEmployeedata