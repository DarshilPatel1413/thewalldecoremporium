import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sign = () => {

    let[fname , setFname]=useState("");
    let[lname , setLname]=useState("");
    let[email , setEmail]=useState("");
    let[password , setPassword]=useState("");
    let[error , setError]=useState(false);


    const submit = (e) =>{
        e.preventDefault();

        if(fname.length === 0 || lname.length === 0 || email.length === 0 || password.length === 0){
            setError(true);
        }else{
            setError(false);
            setFname("");
            setLname("");
            setEmail("");
            setPassword("");
        }
    }

  return (
    <div>
      

      <form onSubmit={submit} className=' border sm:w-2/4 sm:ml-40 md:ml-80 sm:my-10 w-full py-7 bg-slate-200 rounded-xl'>
      
      <h1 className='text-4xl text-center pb-10 underline underline-offset-8'>Create New Account</h1>
      <hr className='border-1 border-zinc-950 p-2' />
      <div className='flex flex-col items-center'>
  
      <input type="text" value={fname} onChange={ (e)=> setFname(e.target.value)} name="fname" id="" placeholder='Enter Your First Name' className='border-4 p-2 w-60 sm:w-80' /> 
      
      {error && fname.length < 1 ? <p>Enter Your First Name First...</p> : " "} <br />
  
      
      <input type="text" value={lname}  onChange={ (e)=> setLname(e.target.value)} name="lname" id="" placeholder='Enter Your Last Name' className='border-4 p-2 w-60 sm:w-80' />
      {error && lname.length < 1 ? <p>Enter Your Last Name First...</p> : " "} <br />
  
  
      
      <input type="email" value={email}  onChange={ (e)=> setEmail(e.target.value)} name="email" id="" placeholder='Enter Your Email' className='border-4 p-2 w-60 sm:w-80' /> 
      {error && email.length < 1 ? <p>Enter Email First...</p> : " "} <br />    
  
  
     
      <input type="password" value={password} onChange={ (e)=> setPassword(e.target.value)} name="password" id="" placeholder='Enter Your Password' className='border-4 w-60 sm:w-80 p-2'/>
      {error && password.length < 1 ? <p>Enter Your Password first...</p> : " "}
  
  
      <button  type='submit' className='border border-stone-950 px-2 pb-1 mt-5 mb-2 bg-blue-600 text-white rounded-lg'>Create New</button>
      
  
  
      <Link to={"/login"} className='text-xs ml-20 hover:text-lime-950 hover:font-bold'>Already have a account?</Link>
      </div>
      </form>


    </div>
  )
}

export default Sign

