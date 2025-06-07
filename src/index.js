// require('dotenv').config({path: './env'}); 
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants"; 

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: './env' });

connectDB()
.then(() => {
    app.listen(process.env.PORT||8000, () => {
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
})
})
.catch((err) => {
    // console.error("MONGO DB connection failed", err);
    app.on('error',(error)=>{
            console.log("ERRR",error);
            throw error;
    // process.exit(1); // Exit the process with failure
})
});





// import express from "express";
// const app = express();

// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // app.on('error',(error)=>{
        //     console.log("ERRR",error);
        //     throw error;
//         })
//         app.listen(process.env.PORT , () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     }catch(err){
//         console.error("ERROR:", err);
//         throw err;
//     }
// })()
