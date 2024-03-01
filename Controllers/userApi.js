const user = require("../Models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
//register
exports.register=async(req,res)=>{
    try {
        const {name,lastName,age,email,password,imgUrl,phone}=req.body
        const foundUser=await user.find({email:req.body.email})
        if(foundUser.length>0){
            res.status(400).send({msg:"this Email is used"})
        }
        else{
            const newUser=new user(req.body)
            const salt=10
            pass=await bcrypt.hash(password,salt)
            newUser.password=pass
            await newUser.save()
            const token=jwt.sign(
                {id:newUser._id},process.env.secretkey
            )
            res.status(200).send({msg:"user added successfully",data:req.body,token})
        }

    } catch (error) {
        res.status(500).send({msg:"cannot add the user",error})
    }
}
exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const foundUser = await user.findOne({ email });
      if (foundUser.length == 0) {
        res.status(400).send({ msg: "user doesn't exist" });
      } else {
        const test = await bcrypt.compare(password, foundUser.password);
        
        if (test) {
            const token=jwt.sign(
                {id:foundUser._id},process.env.secretkey
            )
          res.status(200).send({ msg: "Login successfully", foundUser: foundUser,token });
        } else {
          res.status(400).send({ msg: "invalid email or password" });
        }
      }
    } catch (error) {
      res.status(500).send({ msg: "Server error" });
    }
  };

  exports.changepassword=async(req,res)=>{
    try {
        const{password}=req.body
        const{_id}=req.params
        const foundUser = await user.findOne({ _id });
        const salt=10
        foundUser.password=await bcrypt.hash(password,salt)
        foundUser.save()
        res.status(200).send({msg:"password changed successfully"})
    } catch (error) {
        res.status(500).send({msg:"error on the server"})
    }
  }