const router = require("express").Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
//register

 
router.post('/register',async (req,res)=>{
    try {
        //hash password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        
        // create new user 
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        })

        //save user 
        const user = await newUser.save();
        res.status(200).json(user._id)
    } catch (error) {
        res.status(500).json(error)
    }
})

//login
router.post("/login", async (req,res)=>{
    try {
        //find user 
        const user = await User.findOne({email:req.body.email})
        !user && res.status(400).json("wrong email or password!");

        //vlidate password
        const validatePassword = await bcrypt.compare(req.body.password,user.password)
        !validatePassword && res.status(400).json("wrong email or password!");

        //send res
        res.status(200).json({_id:user._id,email:user.email})
        
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router