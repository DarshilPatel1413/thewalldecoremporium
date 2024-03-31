import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, remove } from "../store/cartSlice";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import Footer2 from "./Footer2";
import Footer1 from "./Footer1";
import Navbar from "./Navbar";


const Cart = () => {

  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let REMOVE = (itemID) => {
    dispatch(remove(itemID));
    toast.error("Remove From Cart..!");
  };

  let INCR = (itemID) => {
    dispatch(increment(itemID));
  };

  let DECR = (itemID) => {
    dispatch(decrement(itemID));
  };

  let itemsprice = names.reduce(
    (def, items) => def + items.price2 *  parseInt(items.quantity),
    0 
  );

  let itemss = names.reduce(
    (def, items) => def +  parseInt(items.quantity),
    0
  );


  // console.log((item))

  return (<>
    <Navbar/>
    <div>
      <div className="w-auto  text-center justify-items-center items-center  sm:gap-2 gap-0 pb-6 pr-2   m-7 ">
        <div className=" border-2 border-black m-2 pb-5">
          {names.length === 0 ? (
            <div>
              <img
                className="md:pl-40 lg:pl-72"
                src="https://res.cloudinary.com/det2xquez/image/upload/v1709226842/empty-cart-4816550-4004141_lkbucg.png"
                alt="img"
              />
              <h1
                className="font-bold text-3xl p-0 
                "
              >
                Your cart is empty , Do shopping now..!!
              </h1>
            </div>
          ) : (
            " "
          )}

          {names.map((item) => {
            let quantity = parseInt(item.quantity);
            let update = item.price2 * quantity;
            console.log(typeof(quantity));

            return (
              <div className="flex gap-3  sm:gap-20 justify-around h-auto  mb-4 mt-10 bg-slate-200 justify-items-center">
               
               <Link className="flex justify-between gap-2 sm:gap-20"  to={`/carddetails/${item.id}`} >
                <img src={item.image} alt="im" className="h-14 w-14 pt-1" />
                

                <p className="p-1 mt-1 hidden sm:block text-center justify-items-center items-center">
                  {item.name}
                </p>
                </Link>

                <div className="flex">
                  <p className="rounded-2xl border-2 border-black  pb-1 px-1 h-fit flex flex-col sm:flex-row   sm:px-3 my-2 text-xl sm:text-3xl hover:cursor-pointer">
                    <button onClick={() => DECR(item.id)}>-</button>
                    <span className="px-2 sm:px-6 font-semibold hover:cursor-text">
                       {quantity}
                       {console.log(typeof(quantity))}
                      
                    </span>
                    <button onClick={() => INCR(item.id)}>+</button>
                  </p>
                  <i
                    className="fa-solid fa-trash pt-6 pl-5 hover:cursor-pointer"
                    onClick={() => {
                      REMOVE(item.id);
                    }}
                  ></i>
                </div>
                <p className="p-1 mt-3"> RS. {update}</p>
              </div>
            );
          })}
        </div>


          <div className="flex justify-between md:gap-80 gap-5">

          <div className="hidden sm:block " ></div>
        <div className="text-right flex flex-col justify-center p-5 mr-5 sm:mr-10 py-10 border-2 border-slate-800 w-fit ml-5  font-bold">
          <h1>Total Item  : {itemss} </h1>
          <h1 className="underline underline-offset-4">
           
            Payable Amount : {itemsprice}
          </h1><br />
          <Link to="#" className="border-2 border-y-neutral-900 p-2 text-center rounded-3xl text-lg  bg-slate-200 hover:bg-black hover:text-white">Go For Payment</Link>
        </div>
        </div>
      </div>
    </div>
    <Footer1/>
          <Footer2/>
    </>
  );
};

export default Cart;
