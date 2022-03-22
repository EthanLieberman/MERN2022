// controller does all the CRUD
// Import model here
const Joke = require('../models/jokes.models');

module.exports.findAllUsers = (req, res) => {
    Joke.find()
        .then(allDaUsers => res.json({
            Jokes: allDaUsers,
            message: 'ok 200'
        }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneSingleUser = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleUser => res.json({ joke: oneSingleUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewUser = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedUser => res.json({ joke: newlyCreatedUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingUser = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => res.json({ joke: updatedUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingUser = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.randomJoke = (req, res) => {
    Joke.find()
        .then(allDaUsers => 
            res.json({
            joke: allDaUsers[Math.floor(allDaUsers.length*Math.random())],
            message: `ok 200 random ${Math.floor(allDaUsers.length*Math.random())}`,
            
        }))
        
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}