//mongoose importation
const mongoose=require("mongoose")
//declaration du schema
const schema=mongoose.Schema

const userSchema= new schema ({
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    imgUrl:{
        type:String,
        required:true
    },
    phone:{
        type:String
    }
})
module.exports=mongoose.model("user",userSchema)