import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner';
import ExtraNavbar from './ExtraNavbar';

const Signup = () => {

  // const history = useHistory()

  const [values , setValues] = useState({
    fname:'',
    lname:'',
    email:'',
    password:''
  })

  const handleChange = (event)=>{
   
  setValues({...values,[event.target.name]:event.target.value})
    
  }

  const navigate = useNavigate();

  const handleSubmit = ((event) =>{
    event.preventDefault()


     if(values.fname === '' ){
      toast.error("First Name require")
  }else if(values.lname === ""){
    toast.error("Last Name require")
  }else if(values.email === ""){
    toast.error("Email require")
  }else if(values.password === ""){
    toast.error("Password require")
  } else{
      // setError(false);
     
      
      
     
    axios.post('http://localhost:5000/walldecor' , values)
    .then(res =>  console.log("Done" , values ) ,
    toast.success("Creating Sucessfully..!!") , navigate('/')
    )
    .catch(err =>  console.log(err) );
  
  }

  })

  // console.log(values.fname)


  return (<>
  <ExtraNavbar/>
    <form  onSubmit={handleSubmit}  className=' border sm:w-2/4 sm:ml-40 md:ml-80 sm:mt-20 md:my-3 mt-10 w-full py-5 bg-slate-200 rounded-xl'>

<h1 className='text-4xl text-center pb-10 underline underline-offset-8'>Create New Account</h1>
      <hr className='border-1 border-zinc-950 p-2' />
      <div className='flex flex-col items-center gap-5 '>


      <input
        type="text"
          name="fname"
          // value={values.fname}
        onChange={handleChange}
        placeholder='Enter Your First Name' className='border-4 p-2 rounded-md w-60 sm:w-80'
      />
       {/* {error && fname.length < 1 ? <p>Enter Your First Name First...</p> : " "} <br /> */}


      <input
        type="text"
        name="lname"
        // value={values.lname}
        onChange={handleChange}
        placeholder='Enter Your Last Name' className='border-4 p-2 rounded-md w-60 sm:w-80'
      /> 
      {/* {error && lname.length < 1 ? <p>Enter Your Last Name First...</p> : " "} <br /> */}


      <input
        type="email"
        name="email"
        // value={values.email}
        onChange={handleChange}
       placeholder='Enter Your Email' className='border-4 p-2 rounded-md w-60 sm:w-80'
      />
       {/* {error && email.length < 1 ? <p>Enter Email First...</p> : " "} <br /> */}


      <input
        type="password"
        name="password"
        // value={values.password}
        onChange={handleChange}
       placeholder='Enter Your Password' className='border-4 rounded-md w-60 sm:w-80 p-2'
      />
       {/* {error && password.length < 1 ? <p>Enter Your Password first...</p> : " "} */}


      {/* Add more form fields */}
      <button type="submit"  className='border border-stone-950 px-2 pb-1 mt-5 mb-2 bg-blue-600 text-white rounded-lg'>Create New</button>
      <Link to={"/"} className='text-xs ml-20 hover:text-lime-950 hover:font-bold'>Already have a account?</Link>
      </div>
    </form>
    </> );
};

export default Signup;
