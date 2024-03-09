import React from 'react'
import { launch } from './Dataset'

const Launch = () => {
  return (<>


    <div className=" m-10 ml-20 text-4xl font-semibold">
        <h2 className="">New Launches Soon  :- </h2>
        </div>

        <div className="collect grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pl-14 ">
      {
        launch.map((item)=>(
            <div className="pb-12">
          <img src={item.image} alt="img" className="w-10/12 rounded-lg  hover:scale-95 duration-750" /><br />
          <p className="text-2xl pr-20  hover:underline underline-offset-4 text-center">{item.name} </p>
          </div >
        ))
      }
    </div>
    </>)
}

export default Launch
