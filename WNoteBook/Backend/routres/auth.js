const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "amnaisgoodboy";
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("email", "Ender a valid email").isEmail(),
    body("password", "Enter a valid password").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "Email already Exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      // .then(user=>res.json(user))
      // .catch(err=>{console.log(err),
      //   res.json({error:"Email already Exists",message:err.message})})
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });

      // res.json(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some error occured");
    }
  }
);
router.post(
  "/login",
  [
    body("email", "Ender a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()});
    }


    const {email,password}=req.body;
    try{
      let user= await User.findOne({email});
     if(!user){
       return res.status(400).json({error:"Please enter valid credentials"});
     }
     const passwordComapre=await bcrypt.compare(password,user.password);
      if(!passwordComapre){
        return res.status(400).json({error:"Please enter valid credentials"});
      }
      const data={
        user:{
          id:user.id
        }
      
      }
      const authToken=jwt.sign(data,JWT_SECRET);
      res.json({authToken});

    }

    catch (error) {
      console.log(error.message);
      res.status(500).send("Some error occured");
    }

  });
module.exports = router;
