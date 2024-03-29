import React from "react";
import { classic } from "./Dataset";
import Card from "./card";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";

function Classicdecor({ADD}) {
  return (
    <div className=" bg-slate-100 mb-0">
      <h2 className="text-4xl text-center px-5 pt-10 tracking-wide font-bold">
        Buy Classic Wall Decoratives Online In India   
      </h2>
      <h5 className="text-xl px-20 py-10 tracking-wider">
        At <b>TheWallDecorEmporium</b>, Elevate your home with timeless
        elegance. Discover our curated selection of classic wall decor pieces,
        where sophistication meets charm in every frame, enriching your space
        with enduring beauty and grace. 
      </h5>

      <div className="main grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-7 sm:mx-16 mx-4 pr-3 gap-12">
        {classic.map((item) => (
         <Card
          ADD={ADD}
         // key={index} 
         id={item.id}
         image={item.image}
         name={item.name}
         price1={item.price1}
         price2={item.price2}
       />
        ))}
      </div>
      
      <Footer1 />
        <Footer2 />
    </div>
  );
}

export default Classicdecor;
