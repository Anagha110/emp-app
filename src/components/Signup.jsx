import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import React, {  useState } from "react";
import Navbar from './Navbar';

const Signup = () => {
    const navigate=useNavigate();
const [email,setUsername]=useState('');
const [password,setPassword]=useState('');
const [name,setName]=useState('');



const userAuthentication = ()=>{
  const userData=
  {
    "name":name,
    "email":email,
    "password":password
   

  }
    // e.preventDefault();
axios.post(`http://localhost:3004/api/signup/`,
{name,email,password}
).then(()=>{
navigate("/");
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
            <div className="d-flex justify-content-center pt-3">
            <h1 className="fw-Bolder mb-3 pb-3 headeing" >Sign Up</h1>
            </div>
            <br/><br/>


            <div className="form-outline mb-2">

  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" required/>
 
</div>


<div className="form-outline mb-2">

  <input type="email" value={email} onChange={(e)=>setUsername(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Id" required/>
 
</div>
<br/>
<div className="form-outline mb-2">

  <input type="text"  value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" required/>
</div>
<br/>





<br/>
<div className="d-flex justify-content-center pt-3">

                    <button type="button" className="btn btn-secondary btn-lg">Cancel</button>
                 
                    <button onClick={userAuthentication} type="button" className="btn btn-secondary btn-lg ms-2">Sign Up</button>
                    <a href="/">Back to LogIn</a>

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

export default Signup