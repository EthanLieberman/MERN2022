// controller does all the CRUD
// Import model here
const Author = require('../models/author.models');       //imports the model blueprint from models

// exports all functions. these functions take in a response or request parameter and use the methods that mongoose gives us to interact with the database executing our crud functions
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findAuthor = (req, res) => {
    Author.findById(req.params.id)
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.status(400).json({ message: 'Something went very wrong', error: err }));
}

module.exports.create = (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => res.json(newlyCreatedAuthor))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

module.exports.update = (req, res) => {
    Author.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json({ updated: updatedAuthor }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

module.exports.delete = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then(result => res.json({ deleted: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// // optionally export as

// module.exports = {
//     // functions are key : value pairs
//     findAll: (req, res) => {
//         name.find()
//             .then(results => { res.json(results) })
//             .catch(err => res.json(err))
//     },

//     findOne: (req, res) => {
//         name.findById(req.params.id)
//     },

//     update: (req, res) => {
//         name.findByIdAndUpdate(req.params.id, req.body){
//             new: true, runValidators: true
//         }
//     }
// }