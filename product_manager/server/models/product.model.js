// import mongoose to build a model
const mongoose = require('mongoose');       //imports mongoose for the database

// the schema
const ProductSchema = new mongoose.Schema({        // uses mongoose to create the bluprint for new models 
    title: String,
    price: Number,
    description: String
}, {timestamps: true});

//  the model used to make actual queries to DB

const Product = mongoose.model("product", ProductSchema);     //creates a new entry of the model for the database

// export the model
module.exports = Product;  // exports that bluprint to be used in the controllers