//import of express
const express=require("express")
const { connect } = require("./config/connectDB")
//create the instance
const app=express()
//middleware
app.use(express.json())

//importation of port 
require("dotenv").config()
const port=process.env.port
//call of connect db function
connect()
//creation of the server 

app.listen(port,async (error)=>{
    error?console.log("the server is down"):console.log("server is up")
})
app.use("/api/User",require("./Routes/userRoutes"))
