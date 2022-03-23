const ProductsController = require('../controllers/product.controller');   // sets a variable containing all the exports from the controllers

module.exports = app => {
    app.get('/api/products', ProductsController.findAllProducts);     // uses app that got passed in from the server.js runs a .method on it being a type of http action, passes in the url as a variable and executes the controller.function we defined from controllers and exported.
    app.get('/api/product/:id', ProductsController.findOneSingleProduct);
    app.put('/api/product/:id', ProductsController.updateProduct);
    app.post('/api/products', ProductsController.createNewProduct);
    app.delete('/api/product/:id', ProductsController.delete);
}