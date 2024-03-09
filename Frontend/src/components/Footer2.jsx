import React from 'react'
import image from '../image/logo.png';
import { Link } from 'react-router-dom';


function Footer2() {

    
  return (
    <div>
    <div className='bg-slate-400 grid grid-cols-2 sm:grid sm:grid-cols-3 p-8 px-16'>
      
    <div className="linkk ">
        <h2 className='text-2xl mb-3 font-medium'>Quick Links</h2>
        <Link to={"/refund"} className='hover:underline mb-1 w-fit'>Refund Policy</Link><br />
        <Link to={"/shipping"} className='hover:underline mb-1 w-fit'>Shipping Policy</Link><br />
        <Link to={"/privacy"} className='hover:underline mb-1 w-fit'>Privacy Policy</Link><br />
        <Link to={"/contact"} className='hover:underline mb-1 w-fit'>Contact Us</Link><br />
        {/* <Link to={"/C art"} className='hover:underline mb-1 w-fit'>Conrt</Link> */}
    </div>

    <div className="product ">
        <p  className='text-2xl mb-3 font-medium'> Decoratives --{'>'}</p>
        <Link to={"/luxdecor"}  className='hover:underline'>Luxary Decor</Link> <br />
            <Link to={"/classicdecor"} className='hover:underline' >Classic Decor</Link><br />
            <Link to={"/premiumclock"} className='hover:underline'>Premium Clock</Link><br />
            <Link to={"/metalclock"} className='hover:underline'>Metal Clock</Link><br />
            <Link to={"/crystal"} className='hover:underline'>Crystal Painting</Link><br />
            <Link to={"/simple"} className='hover:underline'>Simple Painting</Link>
    </div>

    <div className="contact   ">
        <img src={image} alt="img" className='h-20 items-center mb-3' />
        <p>Address  :-  CG Road , Ahmedabad , 382345</p>
        <p> {'<-'}  Customer Support  -{'>'}</p>
        <p > Email :-thewalldecoremporium</p>
        <p> Call  :- +91 98245 87456</p>
    </div>

    </div>
    <hr />

    <div className="detaiks bg-slate-400 p-3">
        <p className='text-sm pl-10'>	&#169; 2024 , TheWallDecorEmporium Operated By Darshil Patel</p>
    </div>

    </div>
  )
}

export default Footer2
