import { Link, useParams } from "react-router-dom";
import { carddetail } from "./Dataset";
import {  useEffect, useState } from "react";
import "./CardDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice"; 
import { toast } from "sonner";

const CardDetails = (props) => {


  
  // let incrementQuantity = props.incrementQuantity;
  // let decrementQuantity = props.decrementQuantity;
  // let quantity = props.quantity;

let names = useSelector((state) => state.cart)
let dispatch = useDispatch()

let ADD = (Data) =>{
  // dispatch(add(Data))
  let addd = names.find((itemm)=> itemm.id === Data.id)
  if(!addd){
    dispatch(add(Data))
  toast.success("Adding In Cart")
  }
}
 

  const [Data, setData] = useState([]);

  // const [loading , setLoading] = useState(false)

  const { id } = useParams();

  // console.log(id);
  const setDetail = (id) => {
    // setLoading(true)
    carddetail.map((item) => {
      // console.log(item.id);
      if (item.id == id) {
        setData(item);
      }
    });
  };

  // console.log(data1)
  console.log(Data);

  useEffect(() => {
    setDetail(id);
  }, []);

  return (
    <>
      <div className="carddetail p-10 bg-slate-200 grid md:grid-cols-2 grid-cols-1">
        <div className="img hover:scale-110 duration-700 p-3 my-2">
          <img
            src={Data.image}
            alt="img"
            className="border-2 border-gray-700 w-5/6 rounded-xl ml-0"
          />
        </div>
        <div className="details">
          <Link to={"/"} className="px-3 outline-none">
            TheWallDecorEmporium
          </Link>

          <p className="text-4xl font-bold mb-3">{Data.name}</p>
          {/* <button className='border-2 border-black rounded px-2 pb-1 bg-gray-700 text-white'>sale</button> */}
          <p className="w-fit text-2xl">
            {" "}
            <span className="line-through pr-4">RS. {Data.price1} </span>{" "}
           RS. {Data.price2}
          </p>
          <p className="text-xs">
            Tax included.{" "}
            <span className="underline underline-offset-8">Shipping</span>{" "}
            calculated at checkout.
          </p>



          <br />

          {/* <p className='rounded-2xl border-2 border-black  pb-1 px-4 h-fit  sm:px-3 my-2 text-xl md:text-3xl hover:cursor-pointer'> <span onClick={decrementQuantity}> -  </span> <span className='px-0 md:px-6 font-semibold hover:cursor-text'>{quantity}</span> <span onClick={incrementQuantity}> + </span></p>     */}
    

          <button className='border-2 border-gray-800 rounded-lg p-2 w-full text-2xl font-normal mb-3 hover:bg-blue-900 hover:text-white' onClick={()=>{ADD(Data)}  } >Add To Cart</button><br />
         
          <button className="border-2 border-gray-800 rounded-lg p-2 w-full text-2xl   hover:bg-black hover:text-white">
            Buy It Now
          </button>
          <br />
          <br />

          <p className="bringdata mt-3 pb-3">
            Bring color and texture to your home decor with this modern crystal
            painting set. Crafted with metal framing for a sophisticated feel,
            this set will make your walls pop with style. Make your home shimmer
            with contemporary elegance.
          </p>
          <br />

          <ol className="list-disc mt-0 ml-4">
            <li>Imported Product & Comes in proper packaging</li>
            <li>Vintage pattern which never goes out of style</li>
            <li>Suits contemporary decor and modern homes</li>
            <li>Ideal for living room, bedroom or study</li>
            <li>Smart design with attractive shine and finish</li>
          </ol>
        </div>
      </div>
    </>
  );
};
export default CardDetails;
