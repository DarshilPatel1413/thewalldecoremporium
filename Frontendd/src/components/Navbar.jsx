import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import image from "../image/logo.png";
import {  useSelector } from "react-redux";

function Navbar({notificationCount }) {

  const open = () =>{
    document.getElementById("slidebar").style.display="block";
  }
  const exit = () =>{
    document.getElementById("slidebar").style.display="none";
  }

  
let names=useSelector((state)=>state.cart)
// let dispatch = useDispatch()


let itemss = names.reduce(
  (def, items) => def + items.quantity,
  0
);



  return (
    <div className="navbar relative h-fit bg-slate-400 pt-7 py-3">
      <div className="nav">
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>{" "}
          {/* <input
            className=" outline-none"
            type="search"
            name="search"
            id="search"
            
          /> */}
          <input list="text" placeholder="Search Here" className="outline-none p-7"/>
          <datalist id="text" className="">
           <option value="luxary wall decor"></option>
            <option value="classic wall decor"></option>
            <option value="premium clock"></option>
            <option value="metal clock"></option>
            <option value="crystal painting"></option>
            <option value="simple painting"></option>
          </datalist>
        </div>




        <div id="responsiveBars" className="responsiveBars " >
          <i className="fa-solid fa-bars" onClick={open}  ></i>
        </div>
        
      
        <div id="slidebar" className="slidebar hidden absolute top-16 left-14 px-9 py-5 font-semibold text-xl w-60 bg-slate-500 h-72" >
       <div onClick={exit}>
        <Link to={"/home"} >Home</Link><br />
        <Link to={"/luxdecor"}>Luxary Decor</Link><br />
        <Link to={"/classicdecor"}>Classic Decor</Link><br />
        <Link to={"/premiumclock"}>Premium Clock</Link><br />
        <Link to={"/metalclock"}>Metal Clock</Link><br />
        <Link to={"/crystal"}>Crystal Painting</Link><br />
        <Link to={"/simple"}>Simple Painting</Link>
        </div>
        <input
            className=" outline-none w-44 mt-3 px-2"
            type="search"
            name="search"
            id="search"
            placeholder="Search Here"
          />
      </div>
   


   

        <div className="logo">
        <Link to={"/"}>  <img src={image} alt="img" />  </Link>
        </div>

        <div className="font relative">
          <Link to={"/"}>
          <i className="fa-solid fa-user pr-2.5 text-xl" ></i>
          </Link>

          <Link to={"/cart"}>
          <i
            className="fa-solid fa-bell  text-xl "
          ></i>
          </Link>
          
          <span className="badge font-bold absolute text-base left-15 text-rose-700  bottom-4" >
            {itemss}
          </span>
          
        </div>
      </div>

      <div className="collection pb-4 text-xl">
        <Link to={"/home"}>Home</Link>
        <Link to={"/luxdecor"}>Luxary Decor</Link>
        <Link to={"/classicdecor"}>Classic Decor</Link>
        <Link to={"/premiumclock"}>Premium Clock</Link>
        <Link to={"/metalclock"}>Metal Clock</Link>
        <Link to={"/crystal"}>Crystal Painting</Link>
        <Link to={"/simple"}>Simple Painting</Link>
      </div>

      
         

    </div>
  );
}

export default Navbar;
