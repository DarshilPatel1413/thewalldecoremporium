import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";
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
      staggerChildren:0.5,
      duration:1.5
    },
  },
};

// initial={{ opacity:0, y:100}} animate={{opacity:1, y:0,}} transition={{duration:1.5}}
  
function Refund() {
  return (
    <div className=" bg-slate-100">
      <Navbar />
      <motion.div initial="hidden" animate="show" variants={animation} className="w-full justify-center p-10 pl-14">
        <motion.h1  variants={animation}   className="text-4xl text-center pb-7 underline underline-offset-4">
          Refund Policy
        </motion.h1>
        <br />
        

        <motion.h1 variants={animation} >Can I return a product if I do not like it?</motion.h1>
        <br />

        <motion.h1 variants={animation} >
          We have a strict No Returns Policy. Return/exchange is only possible
          if the delivered product is damaged or incorrect.
        </motion.h1>
        <br />

        <motion.p variants={animation} >What if I receive a damaged or incorrect product?</motion.p>
        <br />

        <motion.p variants={animation} >
          We are committed to ensuring that your products reach you safely and
          securely. However, in the rare event that you a receive a damaged or
          incorrect product, please raise a Replacement or Exchange Request
          within 12 hours of receipt of the order, by sending us an email with
          unboxing video and images clearly showing damage and if unboxing video
          is not available claim may be denied. The Colors of the INDIAN
          products Keep changing so the images may have different wires cannot
          be returned for this reason.Also Very microscopic defects that are not
          visible once THE PRODUCT IS installed will not be entertained .Please
          mention your Order ID when you reach out to us only on mail. In rare
          cases, when the Replacement is not possible from our end, we will
          offer a Return to the customer with Full Refund. Please note, for any
          exchange or return request, the product needs to have the original
          packing intact. We will not accept the request if any of the packing
          material is missing or if it has been installed.
        </motion.p>
      </motion.div>{" "}
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default Refund;
