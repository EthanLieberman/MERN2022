const mongoose = require('mongoose');       // imports the mongoose library
const DB_Name = 'product_managerDB'       // sets the variable to what we named our database

mongoose.connect('mongodb://localhost/' + DB_Name, {     // connects to the database and returns it
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the ${DB_Name} database`))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));