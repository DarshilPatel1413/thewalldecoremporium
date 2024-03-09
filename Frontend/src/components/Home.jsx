import React from "react";
import Image from "../image/home.jpg";
import { home } from "./Dataset";
import { Link } from "react-router-dom";
import Launch from "./Launch";


function Home() {
  return (
    <div className="main bg-slate-100 m-0">
      <div className="home1  pt-7 flex justify-evenly ">
        <div className="imgg lg:block  hidden pl-7 w-screen hover:scale-110 duration-500">
          <img src={Image} alt="img" className="rounded" />
        </div>
        <div className="detail pt-8  pl-10">
          <h6 className="">Welcome To </h6>
          <h1 className="pl-6 font-bold text-4xl h-auto">
            THE WALL DECOR EMPORIUM
          </h1>
          <br />
          <br />
          <div className=" text-center text-wrap">
          <p className="p1 text-lg text-pretty px-2 text-white bg-orange-400 sm:w-auto w-80 rounded-lg h-auto py-1 hover:text-black">
            {" "}
            Shop Expensive Products | Got Affordable Price | Make Wall Decorative
          </p>
          
          <br />
          <br />

          <p className="discount sm:block hidden rounded-full border-2 border-black text-4xl text-center px-4  hover:text-orange-500 pb-2 hover:cursor-pointer">
           Upto 50% Off On All Decoratives
          </p>
          <p className=" sm:hidden block rounded-full border-2 border-black text-4xl text-center px-4  hover:text-orange-500 pb-2 w-fit ml-20 hover:cursor-pointer">50% Off</p>
          </div>
          <br />
          <br />

          <p className="pr-10 text-lg">
            Transform your space into a masterpiece. Where every brushstroke
            tells a story, and every frame captures a moment. Discover the art
            of expression with our curated collection of wall decor with
            <b className="hover:text-green-950">TheWallDecorEmporium</b>.
          </p>
          <br />

          <div className="contact grid grid-cols-2 sm:flex sm:justify-evenly gap-0 ">
            <div>
              
              <i class="fa-regular fa-envelope"></i>
              thewalldecoremporium
            </div>
           
            <div>
              <i className="fa-solid fa-phone"></i>+91 98547 15455
             
            </div>
            <i className="fa-brands fa-instagram pt-1"></i>
            <i className="fa-brands fa-facebook pt-1"></i>
           
          </div>
        </div>
      </div>

      <div className=" m-10 ml-20 text-4xl font-semibold">
        <h2 className="">Collection Of Wall Decoratives :- </h2>
        </div>

        <div className="collect grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pl-14 ">
            
        {
        home.map((item ,index  ) => (<>
        <Link to={`${item.path}`} >
            <div className="pb-12">
          <img src={item.image} alt="img" className="w-10/12 rounded-lg hover:scale-95 duration-750" /><br />
          <p className="text-2xl pl-4 hover:underline underline-offset-4">{item.name} <span>--{'>'}</span></p>
          </div >
          </Link>
          </> ))
      }
      
        </div>
       
       <Launch/>

    </div>
  );
}

export default Home;
