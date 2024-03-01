const express=require("express")
const { register, login, changepassword } = require("../Controllers/userApi")
const { isAuth } = require("../middleware/isAuth")

const router =express.Router()

router.post("/register",register)
router.post("/login",login)
router.post("/changepassword/:_id",changepassword)
router.get("/current",isAuth,async(req,res)=>{
    try {
        const foundUser=req.foundUser
        req.status(200).send({foundUser})
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports=router