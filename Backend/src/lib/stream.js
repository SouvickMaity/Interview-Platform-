import {StreamChat} from "stream-chat";
import { env } from "./env.js";

const apiKey = env.STREAM_APT_KEY
const apiSecret = env.STREAM_API_SECRET

if(!apiKey || !apiSecret){
    console.error("Stream apikey or secret-key is missing");
}

 export const chatClient = StreamChat.getInstance(apiKey,apiSecret);


export const upsertStreamUser = async(userData)=>{
    try {
        await chatClient.upsertUser(userData);
        console.log("Stream user upsert successfully", userData);
    } catch (error) {
        console.log("Error in stream upsert user",error);
    }
}


export const deleteStreamUser = async(userId)=>{
    try {
        await chatClient.deleteUser(userId);
        console.log("Stream user deleted",userId);
    } catch (error) {
        console.log("error in stream user deletion",error);
    }
}


//todo : method to genarate token

