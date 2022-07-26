const router = require("express").Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//update user 
router.put("/:id",async(req,res)=>{
  if (req.body.userId  === req.params.id || req.body.isAdmin) {

    if(req.body.password){
        try{     //hash password 
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password,salt);
        }catch(err){
            return res.status(500).json(err)
        }
    }
    try {
        const user = await User.findByIdAndUpdate(req.body.userId,{
            $set:req.body
        });
        res.status(200).json("Account has been Updated")
    } catch (err) {
        return res.status(500).json(err)
    }
      
  }else{
      return res.status(403).json("You can only Update Your account!")
  }
})

//delete user 

router.delete("/:id",async(req,res)=>{
    if (req.body.userId  === req.params.id || req.body.isAdmin) {
      try {
          const user = await User.findByIdAndDelete(req.params.id)
          res.status(200).json("Account has been Deleted successfully ")
      } catch (err) {
          return res.status(500).json(err)
      }
    }else{
        return res.status(403).json("You can Delete only Your account!")
    }
  })
 

  // get a user 

  router.get("/",async(req,res)=>{
      const userId = req.query.userId;
      const username = req.query.username
      try {
          const user = userId ?  await User.findById(userId) : await User.findOne({username:username});
          const {password,updatedAt, ...other} =user._doc
          res.status(200).json(other)
      } catch (err) {
          res.status(500).json(err);
      }
  });

  //follow a user 
  router.put("/:id/follow",async(req,res)=>{
    if (req.body.userId  !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers:req.body.userId}})
                await currentUser.updateOne({$push:{followings:req.params.id}})
                res.status(200).json("user has been followed");
            }else{
                res.status(403).json("you already follow this user ")
            }
        } catch (err) {
            res.status(500).json(err);
        } 
    }
    else{
        return res.status(403).json("You can follow yourself")
       
    }
  })


  //unfollow a user 
  router.put("/:id/unfollow",async(req,res)=>{
    if (req.body.userId  !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers:req.body.userId}})
                await currentUser.updateOne({$pull:{followings:req.params.id}})
                res.status(200).json("you unfollow this user");
            }else{
                res.status(403).json("you do not follow this user ")
            }
        } catch (err) {
            res.status(500).json(err);
        } 
    }
    else{
        return res.status(403).json("You can't follow yourself")
       
    }
  })

  //get a friend

  router.get("/friends/:userId", async (rea,res)=>{
      try {
          const user = await User.findOne(req.params.userId);
          const freonds = await Promide.all(
              user.followings.map(friendId=> {
                  return User.findById(friendId);
              })
          );
          let freiendList = [];
          freiendList.map((friend)=>{
              const {_id,username,profilePicture} = friend;
              friendList.push( {_id,username,profilePicture} );
          });
          res.status(200).json(friendList)
      }catch(err) {
        res.status(500).json(err)
      }
  })


 

module.exports = router