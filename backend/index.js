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
  //route 
  app.use("/api/auths",authRoute);
  app.use("/api/users",userRoute);
  app.use("/api/posts",postRoute);


  app.get('/',(req,res)=>{ 
    res.send('hello worlds!')
})
 

  app.listen(PORT,()=>{
    console.log('backend is running')
})