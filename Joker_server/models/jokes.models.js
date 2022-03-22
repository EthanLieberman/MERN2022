// import mongoose to build a model
const mongoose = require('mongoose');

// the schema
const JokesSchema = new mongoose.Schema({
    setup: String,
    punchline: String
}, {timestamps: true});

//  the model used to make actual queries to DB

const Joke = mongoose.model("Jokes", JokesSchema);

// export the model
module.exports = Joke;