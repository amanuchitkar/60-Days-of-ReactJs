const express = require("express");
const {body,validationResult } = require('express-validator');
const User = require("../models/User");
const router = express.Router();

router.post("/createuser", [
    body('name','Enter a valid name').isLength({min:5}),
    body('email','Ender a valid email').isEmail(),
    body('password','Enter a valid password').isLength({min:8}),

],(req, res) => {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors:errors.array()});
  }
User.create({
  name:req.body.name,
  password:req.body.password,
  email:req.body.email
}).then(user=>res.json(user))
.catch(err=>{console.log(err),
  res.json({error:"Email already Exists",message:err.message})})

});
module.exports = router;
