import React from 'react'
import { simpledecor } from './Dataset'
import Card from './card'

function Simplepainting({ADD}) {
  return (<div className='bg-slate-100'>
    

    <h2 className="text-4xl text-center pt-10 px-5 tracking-wide font-bold">Buy Simple & Classic Wall Paintings Online In India</h2>
    <h5 className="text-xl px-20 py-10 tracking-wider">   At <b>TheWallDecorEmporium</b>, Simplicity reimagined. Explore our collection of minimalist wall paintings, where each stroke speaks volumes. Elevate your space with understated elegance and let art whisper its beauty into your surroundings.</h5>
    
    <div className="main grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-7 sm:mx-16 mx-6 pr-2 gap-12">
      {
        simpledecor.map((item) => (

            
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

export default Simplepainting
