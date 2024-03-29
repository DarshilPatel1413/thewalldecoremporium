import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './Validation'
import axios from 'axios'
import { toast } from 'sonner'
import ExtraNavbar from './ExtraNavbar'

function Login() {

    // let [ email , setEmail]=useState("");
    // let [ password , setPassword]=useState("");
    // let [ error , setError]=useState(false);


    // const submit =(e)=>{
    //     e.preventDefault();
      
    //     if(email.length === 0 || password.length === 0 ){
    //       setError(true)
    //     }else{
    //       setError(false);
    //       setEmail("");
    //       setPassword("");
    //     }
      
    //   } 


    const [values , setValues]= useState({
      email:'',
      password:''
    })

    const [error , setError]=useState({})

    const handleInput =(event)=>{
      setValues({...values , [event.target.name]:[event.target.value]})
    }

    const navigate = useNavigate();
    
    const handleSubmit = (event )=>{
      event.preventDefault();
      setError(Validation(values));
      if(error.email === "" && error.password === ""){
        axios.post('http://localhost:5000/signup' , values)
        .then(res => {
          if(res.data === "Sucess"){
            console.log("donr")
            navigate('/home');
          }else{
            toast.error("No Record Exist... Enter Valid Data..")
          }
      })
        .catch(err => console.log(err));
      }
    }

  return (<> 
  <ExtraNavbar/>
  
     <form onSubmit={handleSubmit}  className=' border sm:w-2/4 sm:ml-44  md:ml-[280px] sm:my-10 w-full py-7 mt-20 sm:mt-28 md:mt-16 bg-slate-200 rounded-xl'>
      
    <h1 className='text-4xl text-center pb-10 underline underline-offset-8'>Log In</h1>
    <hr className='border-1 border-zinc-950 p-2' />


    <div className='flex flex-col items-center'>
    <input type="email" name="email" onChange={handleInput} placeholder='Enter Your Email' className='border-4 p-2 w-80' />
    {error.email && <span> {error.email}</span>}<br />

    <input type="password"  name="password" onChange={handleInput} placeholder='Enter Your Password' className='border-4 w-80 p-2'/>
    {error.password && <span >{error.password}</span>}

    <Link className='text-xs ml-20  hover:text-lime-950 hover:font-bold'>Forgot Your Password?</Link><br />


    <button type='submit' className='border border-stone-950 px-2 pb-1 my-2 bg-blue-600 text-white rounded-lg'>Log in</button>


    {/* <Link to={"/sign"} className='text-xs ml-20  hover:text-lime-950 hover:font-bold'>Create New Account?</Link> */}
    <Link to={"/signup"} className='text-xs ml-20  hover:text-lime-950 hover:font-bold'>Create New Account?</Link>
    </div>
    </form>
    </>
 )
}

export default Login
