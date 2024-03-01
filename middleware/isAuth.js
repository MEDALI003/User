const jwt=require("jsonwebtoken")
const User = require("../Models/User")

exports.isAuth=async(req,res,next)=>{
    try {
        const token=req.headers(['authorization'])
        if(!token){
        res.status(400).send({msg:"not auth"})
}
        else{
        const verif=jwt.verify(token,process.env.secretkey)
        const foundUser=User.findOne({_id:verif})
        if(!foundUser){
            res.status(400).send({msg:"not auth"})
        }
        else{
            req.user=foundUser
            next()
        }
    }
    } catch (error) {
        res.status(500).send({msg:"error on server"})    
    }

}