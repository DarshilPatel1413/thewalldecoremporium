import React, { useState } from 'react'
import Footer2 from "./Footer2";
import Footer1 from "./Footer1";
import Navbar from "./Navbar";
import axios from 'axios';
import { toast } from 'sonner';
import { Navigate, useNavigate } from 'react-router-dom';

function Contact() {

  const navigate = useNavigate();

  const [values , setValues] = useState({
    name:'',
    email:'',
    comment:''
  })

  const handleChange = (event)=>{
   
  setValues({...values,[event.target.name]:event.target.value})
    
  }

  const handlesubmit = (e) =>{
    e.preventDefault();
    axios.post('https://walldecor-backend.onrender.com//walldecor/contactus' , values)
    // axios.post('http://localhost:5000/walldecor/contactus' , values)
    .then(res =>  console.log("Done" , values ) ,
    toast.success("sending Sucessfully..!!") ,
    navigate('/home')
    
    )
    .catch(err =>  console.log(err) );
  }
  return (<>
    <Navbar/>
    <div className=' border w-full bg-slate-200'>
      
<h1 className='text-4xl text-center py-7  underline underline-offset-4 '>Contact US</h1>
<hr className='border-1 border-zinc-950' />
<form onSubmit={handlesubmit} className='flex flex-col w-full items-center  p-7 '>
  <div className='grid grid-cols-2 sm:gap-24 gap-8'>
   <input type="text" name="name" onChange={handleChange} placeholder='Enter Name' className='border p-1 px-2'/>
  <input type="email" name="email"  onChange={handleChange} id="" placeholder='Enter Email' className='border p-1 px-2'/>
  </div><br />
    <input type="text-area" name="comment"  rows="4" onChange={handleChange} placeholder='Write Comment' className='border p-1 sm:w-2/4 w-full px-2'/><br />
    <button type='submit' name='submit' className='border-2 border-stone-950 px-2 bg-blue-700 text-white'>Send</button>
</form>

    </div>    <Footer1/>
          <Footer2/>
    </>
  )
}

export default Contact
