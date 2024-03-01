const { check, validationResult } = require('express-validator');

exports.registervalidator = () => [
  check('email')
    .isEmail()
    .withMessage('Please provide a valid email address'),
    check('password').isStrongPassword().isLength({min:6})
];
exports.validationResult=(req,res,next)=>{
    const error=validationResult(req)
    if (!error.isEmpty()) {
        res.status(400).send({msg:"you're password or email are not valid"})
    }
    else{
        next()
    }
}