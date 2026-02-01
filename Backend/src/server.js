import express from "express";
import { env } from "./lib/env.js";

const app=express();


app.get("/",(req,res)=>{
    res.status(200).json({msg:"success from api"})
})

const port=env.PORT;
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})




  