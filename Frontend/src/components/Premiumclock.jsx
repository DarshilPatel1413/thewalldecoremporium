import React from 'react'
import { luxaryclock } from './Dataset'
import Card from './card'
import CdCard from './CdCard'
import Footer2 from "./Footer2";
import Footer1 from "./Footer1";
import Navbar from "./Navbar";

function Premiumclock({ADD}) {
  return (<>
    <Navbar/><div className='bg-slate-100'>
    

    <h2 className="text-4xl text-center pt-10 tracking-wide px-5 font-bold">Buy Premium & Classic Wall CLock Online In India</h2>
    <h5 className="text-xl px-20 py-10 tracking-wider">   At <b>TheWallDecorEmporium</b>, Timeless sophistication, redefined. Explore our exclusive collection of luxury and Classic wall clocks, meticulously crafted to elevate your space with elegance and precision. Experience the epitome of refinement, where every tick resonates with opulence and prestige.</h5>
    
    <div className="main grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-7 sm:mx-16 mx-6 pr-2 gap-12">
      {
        luxaryclock.map((item) => (

            
          <CdCard
          ADD={ADD}
          // key={index} 
          id={item.id}
          image={item.image}
          name={item.name}
          price1={item.price1}
          price2={item.price2}
        />
           

        ))
      }
      
     </div>


    </div> <Footer1/>
          <Footer2/>
    </>)
}

export default Premiumclock
