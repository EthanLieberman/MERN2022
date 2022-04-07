const AuthorController = require('../controllers/author.controllers');   // sets a variable containing all the exports from the controllers

module.exports = app => {
    app.get('/api/authors', AuthorController.findAllAuthors);     // uses app that got passed in from the server.js runs a .method on it being a type of http action, passes in the url as a variable and executes the controller.function we defined from controllers and exported.
    app.get('/api/authors/:id', AuthorController.findAuthor);
    app.put('/api/authors/:id', AuthorController.update);
    app.post('/api/authors', AuthorController.create);
    app.delete('/api/authors/:id', AuthorController.delete);
}