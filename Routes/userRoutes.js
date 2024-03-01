const express=require("express")
const { register, login, changepassword } = require("../Controllers/userApi")
const { isAuth } = require("../middleware/isAuth")
const { registervalidator, validationResult } = require("../middleware/Validator")

const router =express.Router()

router.post("/register",registervalidator(),validationResult,register)
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