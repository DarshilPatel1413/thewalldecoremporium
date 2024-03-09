import React from 'react'

function Footer1() {
  return (
    <div>
        <div className="extra text-center  bg-slate-300 p-4 ">
    <p className='font-bold text-3xl'>Subscribe To Our Email</p>
    <p className='pb-2'>Subscribe to our mailing list for insider news, product launches, and more.</p>
     <input type="email" name="" id=""  placeholder='Enter Your Email Here'  className='p-2 rounded sm:w-72 w-60    bg-slate-200 '/>
</div>
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
