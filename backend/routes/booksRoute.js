
// Route for Saving a new book
app.post('/books', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send({ message: 'Send all required fields' });
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

//Route to get all Books from the database
app.get('/books', async(request, response) => {
    try{
        const books = await Book.find({});
 
        return response.status(200).json({
            count: books.length,
            data: books 
        });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

 //Route to get a single book form the database
app.get('/books/:id', async(request, response) => {
    try{
        const { id } = request.params;
        const book = await Book.findById(id);
        
        return response.status(200).json(book);
        
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route for Updating a Book
app.put("/books/:id", async (request, response)=>{
    try{
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: "Send all required fields: title, author, publishYear",
            });
        }
        const { id } = request.params;

        const result = await Book.findByIdAndUpdate(id, request.body);

        
        if(!result){
            return response.status(404).json({message: "Book not found"});
        }

       
        return response.status(200).send({message: "Book updated successfully"});
        
    }
    catch(error){ 
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
});

//Now finally lets finish our CRUD with the D for Delete Code
app.delete("/books/:id", async (request, response) => {
    try{
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result){
            return response.status(404).json({ message: "Book not found"})
        }
        return response.status(200).send({message: "Book deleated sucessfully"})

    } catch(error){
        cosole.log(error.message); 
        response.status(500).send({ message: error.message });


    }
});
