import express from "express";
import { PORT, MONGO_URL } from "./config.js"
import mongoose from "mongoose";

const app = express();

app.use(express.json());

const bookSchema = mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishYear: { type: Number, required: true },
});
const Book = mongoose.model('Book', bookSchema);

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Hello World")
});

// Route for Save a new book
app.post('/books', async (request, response) => {
    try {
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({ message: "Title, author, and publish year are required" });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        const book = await Book.create(newBook);
        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
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