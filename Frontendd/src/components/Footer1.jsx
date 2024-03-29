import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';




function Footer1() {
  const [values , setValues] = useState({
    email:''
  })

  const handleChange = (event)=>{
   
  setValues({...values,[event.target.name]:event.target.value})
    
  }

  const handlesubmit = (e) =>{
    axios.post('http://localhost:5000/walldecor' , values)
    .then(res =>  console.log("Done" , values ) ,
    toast.success("Creating Sucessfully..!!") 
    )
    .catch(err =>  console.log(err) );
  }
  


  return (
      
       
          <div className='extra text-center  bg-slate-300 p-4'>
    <p className='font-bold text-3xl'>Subscribe To Our Email</p>
    <p className='pb-2'>Subscribe to our mailing list for insider news, product launches, and more.</p>
   <form onSubmit={handlesubmit}>  <input type="email" name="email" onChange={handleChange}  placeholder='Enter Your Email Here' className='p-2 outline-none rounded-tl-lg rounded-bl-lg sm:w-72 bg-slate-200'/>
    <button type='submit' name='submit'><i class="fa-solid fa-arrow-right-to-bracket bg-slate-200 py-3 pr-2  rounded-tr-full rounded-br-full"></i></button>
    </form>

<hr className=' w-7' />
<div className="head text-3xl text-center py-2 bg-slate-300 font-semibold">Services</div>
      <div className="icon grid grid-cols-2 sm:flex sm:justify-center w-full md:gap-16 bg-slate-300 py-2 sm:gap-6 gap-1">
<div className='grid grid-cols-1 text-center'><i className="fa-solid fa-truck-fast text-3xl "></i> Free Shipping</div>
<div className='grid grid-cols-1 text-center'><i className="fa-regular fa-clock text-3xl "></i> 5-7 Days Shipping</div>
<div className='grid grid-cols-1 text-center'><i className="fa-regular fa-handshake text-3xl "></i>Easy Return</div>
<div className='grid grid-cols-1 text-center'><i className="fa-solid fa-person-chalkboard text-3xl "></i>Cash On Delivery </div>
<div className='grid grid-cols-1 text-center '><i className="fa-solid fa-lock text-3xl"></i> easy Authentication</div>
</div>
</div>
  )
}

export default Footer1
