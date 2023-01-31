import React, { useEffect, useState } from 'react'
import { Button, Form } from 'semantic-ui-react';
import  axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';





const Update = () => {
  const navigate = useNavigate();

    const [name,setName]=useState("");
    const [location,setLocation]=useState("");
    const [position,setPosition]=useState("");
    const [salary,setSalary]=useState("");
    const [ID,setID]=useState(null);
    const sendDataToAPI=(e)=>{
       e.preventDefault();
axios.post("/api/employeelist",
{name, location, position, salary}
).then(()=>{
  navigate("/Read", { replace: true });
  
})
    }
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setLocation(localStorage.getItem('Location'));
        setPosition(localStorage.getItem('Position'));
        setSalary(localStorage.getItem('Salary'));
        }, []);

const updateAPIData = () => {
            axios.put(`/api/employeelist`, {
                name, location, position, salary
            })
           
        }


  return (
    <div>
 <Navbar/>
  <div> <section className="Background">
  
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-6">
        <div className="card card-form" >
          <div className="row g-0">
        
             
          <form>
            <div className="card-body p-md-5 text-black bg-info">
            <div className="d-flex justify-content-center pt-3 ">
            <h1 className="fw-Bolder mb-3 pb-3 headeing" >Update</h1>
            </div>
            <br/><br/>


            <div className="form-outline mb-2">

  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" required/>
 
</div>


<div className="form-outline mb-2">

  <input name="location" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder='Location'className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
 
</div>
<br/>
<div className="form-outline mb-2">

  <input  name="position" value={position} onChange={(e)=>setPosition(e.target.value)} placeholder='Position'className="form-control form-control-lg" id="exampleInputPassword1" required/>
</div>
<br/>
<div className="form-outline mb-2">

  <input name="salary" value={salary} onChange={(e)=>setSalary(e.target.value)} placeholder='Salary'className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
 
</div>





<br/>
<div className="d-flex justify-content-center pt-3">

                    
                 
                    <button onClick={sendDataToAPI} type="button" className="btn btn-secondary btn-lg ms-2">Update</button>
                    

   </div> 
</div>
</form>
  
          </div>
        </div>
      </div>
    </div>
  </div>

</section>
  </div>
  <footer>
    
    </footer>
    </div>
  )
}

export default Update