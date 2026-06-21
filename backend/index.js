import express from "express";
import { PORT, MONGO_URL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"; 
import cors from 'cors';


const app = express();

// Middleware for parsing request body
app.use(express.json());

//Middleware for handling  CORS Policy
//app.use(
//    cors({
//        origin: "http://localhost:3000",
//        methods: ["GET","POST","PUT","DELETE"],
//        allowedHeaders: ["Content-Type"],
//    })
//);

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Hello World")
}); 


app.use("/books", booksRoute);
 
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