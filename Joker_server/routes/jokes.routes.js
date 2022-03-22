const JokesController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api/jokes', JokesController.findAllUsers);
    app.get('/api/jokes/random', JokesController.randomJoke);
    app.get('/api/jokes/:id', JokesController.findOneSingleUser);
    app.put('/api/jokes/:id', JokesController.updateExistingUser);
    app.post('/api/jokes', JokesController.createNewUser);
    app.delete('/api/jokes/:id', JokesController.deleteAnExistingUser);
}