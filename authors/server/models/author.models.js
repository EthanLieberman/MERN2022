// import mongoose to build a model
const mongoose = require('mongoose');       //imports mongoose for the database

// the schema
const AuthorSchema = new mongoose.Schema({        // uses mongoose to create the bluprint for new models 
    name: {
        type: String,
        required: [true, 'Must have a name'],
        minlength: [3, 'Name must be over 3 characters'],
        }
}, {timestamps: true});

//  the model used to make actual queries to DB

const Author = mongoose.model("author", AuthorSchema);     //creates a new entry of the model for the database

// export the model
module.exports = Author;  // exports that bluprint to be used in the controllers