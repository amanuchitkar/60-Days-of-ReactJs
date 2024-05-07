const express = require("express");
const {body,validationResult } = require('express-validator');
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.post("/createuser", [
    body('name','Enter a valid name').isLength({min:5}),
    body('email','Ender a valid email').isEmail(),
    body('password','Enter a valid password').isLength({min:8}),

],async(req, res) => {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors:errors.array()});
  }
try {
  
  let user=await User.findOne({email:req.body.email});
  if(user){
    return res.status(400).json({error:"Email already Exists"});
  }
  const salt=await bcrypt.genSalt(10);
  const secPass=await bcrypt.hash(req.body.password,salt);
  user=await User.create({
    name:req.body.name,
    password:secPass,
    email:req.body.email
  })
} catch (error) {
  console.log(error.message);
  res.status(500).send("Some error occured");
  
}

// .then(user=>res.json(user))
// .catch(err=>{console.log(err),
//   res.json({error:"Email already Exists",message:err.message})})
  res.send(req.body);

});
module.exports = router;
