//importation of mongoose
const mongoose=require("mongoose")
//function of connection

exports.connect=async()=>{
    require("dotenv").config()
    const linkDB=process.env.DBlink
     await mongoose.connect(linkDB)
     console.log("database is connected")
   
}
