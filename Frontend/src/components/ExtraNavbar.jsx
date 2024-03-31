import React from 'react'

import image from "../image/logo.png";
import { Link, useLocation } from 'react-router-dom';

const ExtraNavbar = () => {
  const location = useLocation();
  return (
    <div className='flex bg-slate-400 p-2 pl-5 gap-5 sm:gap-32 md:gap-72 lg:gap-96 justify-start'>
      <div className="logo">
        <Link to={"/home"}>  <img src={image} className='h-10 ' alt="img" />  </Link>
        
        </div>
        <div>
            <h2 className='text-lg pt-2 sm:pt-0 sm:text-3xl font-medium'>The Wall Decor Emporium</h2>
        </div>
        <div className='border-2 flex text-center pb-2 p-1 h-fit border-slate-700 rounded-2xl hover:bg-slate-700 hover:text-white'>
          {location.pathname === '/' ? <Link to={"/signup"}>Signup</Link> : <Link to={"/"}>Login</Link>}
          
        </div>
    </div>
  )
}

export default ExtraNavbar
