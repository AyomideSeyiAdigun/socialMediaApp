const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require("helmet");
const dotenv = require('dotenv');

var cors = require('cors');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post')
dotenv.config();
const PORT = 5000;




mongoose.connect(process.env.URL2).then(console.log('connected to mongoDB'))
  .catch((err)=>console.log(err))


  //middleware

  app.use(cors());
  app.use(express.json());
  app.use(helmet());
  app.use(morgan("common"));
  const multer  = require('multer');
  const path = require('path');

  const storage = multer.diskStorage({
    destination: function (req, file, cb) { 
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname )
    }
  })
  
  
const upload = multer({storage:storage});

  app.post("/api/uploads",upload.single("file"),async (req,res)=>{
    try{
      return res.status(200).json("file uploaded successfully")
    }catch(err){
      res.status(403).json(err)
    }
  })
  //route 
  app.use("/images",express.static(path.join(__dirname,"public/images")))
  app.use("/api/auths",authRoute);
  app.use("/api/users",userRoute);
  app.use("/api/posts",postRoute);


  

  app.listen(PORT,()=>{
    console.log('backend is running')
})