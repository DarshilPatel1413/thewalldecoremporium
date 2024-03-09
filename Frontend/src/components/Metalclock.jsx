import React from 'react'
import { classicclock } from './Dataset'
import Card from './card'

function Metalclock({ADD}) {
  return (<div className='bg-slate-100'>
    

    <h2 className="text-4xl text-center pt-10 tracking-wide font-bold">Buy Metal Wall CLock Online In India</h2>
    <h5 className="text-xl px-20 py-10 tracking-wider">   At <b>TheWallDecorEmporium</b>, Embrace timeless elegance. Discover our Matal wall clocks, blending tradition and sophistication. Each tick echoes with the grace of bygone eras, enriching your space with enduring charm and character.</h5>
    
    <div className="main grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-7 sm:mx-16 mx-6 pr-2 gap-12">
      {
        classicclock.map((item) => (

          <Card
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


    </div>)
}

export default Metalclock
