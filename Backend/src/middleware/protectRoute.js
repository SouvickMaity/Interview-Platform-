import {  requireAuth } from '@clerk/express'
import User from "../models/User.model.js";

export const protecRoute=[
     requireAuth(),
     async(req,res,next)=>{
      try{
        const clerkId=req.auth().userId;

        if(!clerkId) return res.status(401).json({msg:"in valid toke "});

        const user=await User.findOne({clerkId});

        if(!user) return res.status(404).json({msg:"user not found"});

        req.user=user;
       
        next();
      }
      catch(error){
          console.log(error);
          req.status(500).json({msg:"Internal server error"});
      }
     },

    ];




