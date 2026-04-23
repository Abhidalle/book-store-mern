import express from "express";
import { PORT, MONGO_URL } from "./config.js"
import mongoose from "mongoose";

const app = express();
  
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Hello World")
});

mongoose
    .connect(MONGO_URL) 
    .then(() =>{
        console.log("Connected to MongoDB successfully");
        app.listen(PORT,()=> {
    console.log(`App is listening to Port: ${PORT}`);
    });   



    })
    .catch((error) =>{
        console.log("Error while connecting to MongoDB", error);
    

    }); 