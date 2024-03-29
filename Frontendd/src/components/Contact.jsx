import React from 'react'

function Contact() {
  return (
    <div className=' border w-full bg-slate-200'>
      
<h1 className='text-4xl text-center py-7  underline underline-offset-4 '>Contact US</h1>
<hr className='border-1 border-zinc-950' />
<form className='flex flex-col w-full items-center  p-7 '>
  <div className='grid grid-cols-2 sm:gap-24 gap-8'>
   <input type="text" placeholder='Enter Name' className='border p-1 px-2'/>
  <input type="email" name="email" id="" placeholder='Enter Email' className='border p-1 px-2'/>
  </div><br />
    <input type="text-area" rows="4" placeholder='Write Comment' className='border p-1 sm:w-2/4 w-full px-2'/><br />
    <button type='submit' className='border-2 border-stone-950 px-2 bg-blue-700 text-white'>Send</button>
</form>

    </div>
  )
}

export default Contact
