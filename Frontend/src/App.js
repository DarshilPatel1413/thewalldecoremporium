
import { Route, Routes } from "react-router-dom";
import Luxdecor from "./components/Luxdecor";
import Navbar from "./components/Navbar";
import CardDetails from "./components/CardDetails";
import Home from "./components/Home";
import Classicdecor from "./components/Classicdecor";
import Premiumclock from "./components/Premiumclock";
import Metalclock from "./components/Metalclock";
import Crystalpainting from "./components/Crystalpainting";
import Simplepainting from "./components/Simplepainting";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";
import Refund from "./components/Refund";
import Shipping from "./components/Shipping";
import Privacy from "./components/Privacy";
import Contact from "./components/Contact";
import {  useState } from "react";
import Cart from "./components/Cart";
// import Demo from "./components/Context"
import Login from "./components/Login";
import Signup from "./components/Signup";
import store from "./store/Store";
import { Provider } from "react-redux";
import Sign from "./components/Sign";
import {Toaster} from "sonner"

const App = () => {


  // const fetchh = async(err) =>{
  //  await fetch('http://localhost:8081/signup_data')
  //   .then(res => res.json())
  //   .then(data => setData(data))
  //   .catch(err,()=> console.log(err));
  // }

  // const [data , setData]=useState([]);
  // useEffect(()=>{
  //   fetchh()
  // },[])





  const [notificationCount, setnotificationCount] = useState(0);
  let [sold, setSold] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [quantity, setQuantity] = useState(1);
 

  function ADD(value ) {
    setnotificationCount(notificationCount + 1);
    setSold([...sold, value])
    setTotalItem(totalItem + 1);
    setTotalPrice(totalPrice + value.price2  )
    // console.log(value.price2);
}

function REMOVE(value){
  setnotificationCount(notificationCount - 1);
  let name=sold.filter((item)=>item.id !== value)
  setSold(name)
  setTotalItem(totalItem - 1);
  setTotalPrice(totalPrice - value.price2);
  return name
  }

function incrementQuantity(){
  setQuantity(quantity + 1)
  setnotificationCount(notificationCount + 1);
}


function decQuantity (){
  setQuantity(quantity - 1)
  setnotificationCount(notificationCount - 1);   
}

function decrementQuantity(){
  quantity > 0 ?
   decQuantity() : alert("Do Add Item First..!!") 
}



  return (

 <div className="cls">

<Provider store={store}>

  {/* <Demo.Provider value={{ sold: sold,setSold:setSold,ADD:ADD,REMOVE:REMOVE }}> */}
   
  <Navbar  notificationCount={notificationCount} />
       <Toaster richColors position="top-center"/>
     
     <Routes>
      
      <Route path="/home" element={<Home/>} />
      <Route path="/luxdecor" element={<Luxdecor ADD={ADD}/>} />
      <Route path="/Classicdecor" element={<Classicdecor ADD={ADD}/>} />
      <Route path="/Premiumclock" element={<Premiumclock/>} />
      <Route path="/Metalclock" element={<Metalclock/>} />
      <Route path="/Crystal" element={<Crystalpainting/>} />
      <Route path="/Simple" element={<Simplepainting/>} />
      <Route path="/carddetails/:id" element={<CardDetails ADD={ADD} />} />
      <Route path="/refund" element={<Refund/>} />
      <Route path="/shipping" element={<Shipping/>} />
      <Route path="/privacy" element={<Privacy/>} />
      <Route path="/contact" element={<Contact/>} />
      
      
      
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
      {/* <Route path="/sign" element={<Sign/>} /> */}
      
      {/* <Demo.Provider value={{sold:sold}}> */}
     <Route path="/cart" element={ <Cart quantity={quantity} setQuantity={setQuantity} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}  sold={sold} REMOVE={REMOVE} totalPrice={totalPrice} totalItem={totalItem}/> }/>
      {/* </Demo.Provider> */}
     </Routes>
     
     <Footer1 />
      <Footer2 />
     
     
       {/* </Demo.Provider>  */}
       </Provider>

     </div>
  );
  
}

export default App;
