import React from 'react'
import Footer2 from "./Footer2";
import Footer1 from "./Footer1";
import Navbar from "./Navbar";
import { motion , Variants } from "framer-motion";

const animation = {
  hidden: {
    opacity:0,
    y:100
  },
  show: {
    opacity:1,
    y:0,
    transition:{
      staggerChildren:0.2,
      duration:1
    },
  },
};

function Shipping() {
  return (<div className='bg-slate-100'>
    <Navbar/>
    <motion.div initial="hidden" animate="show" variants={animation} className='w-full justify-center p-10 pl-14 '>
      
      <motion.h1 variants={animation} className='text-4xl text-center pb-7 underline underline-offset-4'>Shipping Policy</motion.h1>

      
     <motion.h1 variants={animation}> Do you ship internationally? </motion.h1><br />

<motion.p variants={animation}>No, Unfortunately, we do not ship internationally at this point, but are working hard to bring this service to you soon.</motion.p><br />

<motion.p variants={animation}>Do I have to pay for shipping?</motion.p><br />

<motion.p variants={animation}>We offer free shipping across India for all prepaid orders. For cash on delivery orders, a nominal handling fee will be added during checkout.</motion.p><br />

<motion.p variants={animation}>How long will it take for my order to reach me?</motion.p><br />

<motion.p variants={animation}>All orders are shipped within 3 working days of placing the order, and it typically takes another 2 to 10 working days for the order to reach you based on your location. Once your order has been shipped, you will receive an email notification with the courier and tracking details so that you can track your order online. </motion.p><br />

<motion.p variants={animation}>The user will also be provided with an approximate date of delivery with the tracking details. The approximate date of delivery is merely an approximation by the carrier. We shall not be liable for delay in delivery by third party Logistic Partners. </motion.p> <br />

<motion.p variants={animation}>Will all the items in my order be shipped in the same package?</motion.p><br />

<motion.p variants={animation}>Not necessarily. A single order may be shipped as multiple packages to ensure that your product(s) arrive safely and securely.</motion.p><br />
    </motion.div>
    <Footer1/>
          <Footer2/>
    </div> )
}

export default Shipping
