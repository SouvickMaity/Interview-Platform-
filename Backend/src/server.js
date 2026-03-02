import express from "express";
import path from "path";
import { env } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import {serve} from "inngest/express";
import { inngest ,functions} from "./lib/inngest.js";
import { clerkMiddleware } from '@clerk/express';
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";


const app=express(); 

app.use(express.json());


app.use(cors({origin:env.CLIENT_URL, credentials:true}));


app.get("/", (req, res) => {
  res.send("API is running on Render");
});

app.use("/api/inngest", serve({ client: inngest,functions}));
app.use(clerkMiddleware());// this add auth field to request object: req.auth() 
app.use("/api/chat",chatRoutes);
app.use("/api/sessions",sessionRoutes);

const __dirname=path.resolve();



app.use("/api/books",(req,res)=>{
    res.status(200).json({msg:"success from books"});
});





// //make ready for deployment 
// if (env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("/{*any}", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }


const port=Number(env.PORT)||5000;

const startServer= async()=>{
    try{
        await connectDB();
        app.listen(port,()=>console.log(`server is running on ${port}`))
    }
    catch(error){
       console.error("💥 Error starting the server", error);
    }
}


startServer();
