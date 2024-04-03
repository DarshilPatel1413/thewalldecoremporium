const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const Razorpay = require('razorpay');

// require("dotenv").config();

const app = express()
app.use(cors());
app.use(express.json());

app.use("/", (req,res)=>{
  res.json({msg:"Hello trial for db"});
})

    // db connection  

const db=mysql.createConnection({
  host:'localhost',
  user:"root",
  password:'',
  database:'walldecor'
})


// signup data

app.post('/walldecor',(req,res)=>{
  const sql = "INSERT INTO signup (`fname`, `lname`, `email`, `password`) Values (?)";
  const values = [
    req.body.fname,
    req.body.lname,
    req.body.email,
    req.body.password,
  ]
  db.query (sql,[values] , (err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
  })
})


// for subscribe mail

app.post('/walldecor/subscribe',(req,res)=>{
  const sql = "INSERT INTO subscribe (`email`) Values (?)";
  const values = [
    req.body.email
  ]
  db.query (sql,[values], (err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
  })
})


// for contact us

app.post('/walldecor/contactus',(req,res)=>{
  const sql = "INSERT INTO contactus ( `name`, `email`, `comment`) Values (?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.comment,
  ]
  db.query (sql,[values] , (err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
  })
})


// for  login 


app.post('/signup',(req,res)=>{
  const sql = "SELECT * FROM signup WHERE `email` = ? AND `password` = ?";
 
  db.query (sql,[req.body.email,
    req.body.password] , (err,data)=>{
    if(err){
       return res.json(err);
    }
    if(data.length > 0){
      return res.json("Sucess");
    }else{
      return res.json("Failed");
    }
  })
})









app.listen(5000, ()=>{
  console.log("Listining...")
})