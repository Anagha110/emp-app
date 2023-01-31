import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import {Link} from "react-router-dom"
import { Button } from 'semantic-ui-react'
import logo from "./logo.png"


const Read = () => {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost:3004/api/employeelist`)
              .then((response) => {
                console.log(response.data)
                  setAPIData(response.data);
                  
              })
         
    }, [])

    const setData = (data) => {
        let { id, name, location, position, salary} = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Location', location);
        localStorage.setItem('Position', position);
        localStorage.setItem('Salary', salary);
      
      }
      const onDelete = (_id) => {
        axios.delete(`http://localhost:3004/api/employeelist/${_id}`)
        .then(() => {
            getData();
        })
      }
      const getData = () => {
        axios.get("http://localhost:3004/api/employeelist")
            .then((getData) => {
                 setAPIData(getData.data);
             })
      }





  return (
    <div>

      <div>
    <nav class="navbar navbar-expand-lg  bg-secondary navbar-dark">
    <div class="container-fluid">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
      <img src={logo} className="logoemp" alt="logo-image" height={70}/>
            
        <ul class="navbar-nav  ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <Link class="nav-link" to="/viewemployeedata">
                  ViewEmployeeData
                </Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/">
                  Signin
                </Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</div>


        <div className="container">
      <div className="card">
        <div className="card-body">
        <div className='card-header'>
        <div>
        <h2>Employee details</h2>
      </div>
        </div>
        <br></br>
            <div className='divbtn'>
                <Link to="/Create" className='btn btn-success' >Add NEW</Link>
            </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
               
                <td>Name</td>
                <td>Location</td>
                <td>Position</td>
                <td>Salary</td>
                <td>Update</td>
                <td>Delete</td>
                
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
        <Link to='/Update'>
        <td><Button  className="btn btn-success"onClick={() => setData(data)}>Update</Button></td>
        </Link>
        <td><Button className="btn btn-danger"onClick={() => onDelete(data._id)}>Delete</Button></td>
      
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

export default Read