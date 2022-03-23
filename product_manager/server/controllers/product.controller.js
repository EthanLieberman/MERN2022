// controller does all the CRUD
// Import model here
const Product = require('../models/product.model');       //imports the model blueprint from models

// exports all functions. these functions take in a response or request parameter and use the methods that mongoose gives us to interact with the database executing our crud functions
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => res.json(oneSingleProduct))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewProduct = (req, res) => {
    const { title, price, description } = req.body;     // desructuring the items from request body as key value pairs in one action
    Product.create({
        title,
        price,
        description
    })
        .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.delete = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ deleted: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

