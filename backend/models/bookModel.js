import moongoose from "mongoose";

const bookScheme = moongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    publishYear:{
        type: Number,
        required: true,
    },
    }
    {
        timestamps: true,
    },
)
const Book = moongoose.model('Cat',bookScheme);
