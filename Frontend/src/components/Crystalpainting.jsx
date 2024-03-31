import React from 'react'
import {  crystalpaint } from './Dataset'
import Card from './card'
import CdCard from './CdCard'
import Footer2 from "./Footer2";
import Footer1 from "./Footer1";
import Navbar from "./Navbar";

function Crystalpainting({ADD}) {
  return (<>
    <Navbar/>
  <div className='bg-slate-100'>
    

    <h2 className="text-4xl text-center pt-10 tracking-wide px-5 font-bold">Buy Crystal Wall Paintings Online In India</h2>
    <h5 className="text-xl px-20 py-10 tracking-wider">   At <b>TheWallDecorEmporium</b>, Explore our carefully picked collection of Crystal Wall Paintings to give your living spaces a dash of glitz and sophistication. Shop today to add a unique and opulent Crystal Wall Painting to your decor from our website.</h5>
    
    <div className="main grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-7 sm:mx-16 mx-6 pr-2 gap-12">
      {
        crystalpaint.map((item) => (

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


    </div><Footer1/>
          <Footer2/>
    </>)
}

export default Crystalpainting
