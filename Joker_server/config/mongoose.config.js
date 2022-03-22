// import mongoose - require mongoose here
const mongoose = require('mongoose');
const DB_Name = 'Jokes'

mongoose.connect('mongodb://localhost/'+DB_Name , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the ${DB_Name} database`))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));