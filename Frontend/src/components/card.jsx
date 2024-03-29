import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import Footer1 from './Footer1';
import Footer2 from './Footer2';


const Card = (props) => {


 

    const id = props.id
    let ADD = props.ADD;
     

   

 

    // console.log(id)
  return (

    <div className='resBox'>

       <div className=" box rounded-lg w-full  mb-5 ml-3  shadow-xl " >
        <Link  onClick={() => window.scrollTo(200,200)}  to={`/carddetails/${id}`} >
            <div className="img  hover:scale-95 duration-750 ">
              <img src={props.image} alt="img" className="h-96 w-68  " />
            </div>
            
            <div className="name px-5 py-2 hover:underline ">
              <p className="  font-medium">{props.name}</p>
            </div>
            <div className="price pb-2 pl-4">
             RS. <span className="line-through px-1 ">{props.price1}</span>RS.{props.price2}
            </div>
            <div className='flex justify-center mr-8 '>
           {/* <button className=' w-2/4 ml-10 border-2 text-center  my-2' onClick={()=>ADD(props)}>Add To Cart</button> */}
           </div>
        </Link>
          </div>
    </div>
  )
}

export default Card
