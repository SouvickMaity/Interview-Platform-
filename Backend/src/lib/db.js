import mongoose from "mongoose";
import {env} from "./env.js";

export const connectDB= async()=>{
    try{
        const conn=await mongoose.connect(env.DB_URL)
        console.log("Db is connected",conn.connection.host)
    }catch(error){
        console.log(error)
        process.exit(1);
    }
}

