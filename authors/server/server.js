const express = require('express');     // declare a variable requiring express framework
const app = express();      // set the variable app to the function of express
const PORT = 8000;      // declare the port for the server
const cors = require('cors')
const DB = "authors_DB"

// middleware
app.use(express.json(), cors(), express.urlencoded({extended:true}))        // lets the app use json and url encode to pull variables from the url bar using params

// connect mongodb with server using mongoose
// require('./config/mongoose.config');

require('./config/mongoose.config')(DB);

// import routes
require('./routes/author.routes')(app)    // gets the routes functions and pases in the app variable


app.listen(PORT, () => console.log(`server launched on port ${PORT}`))   // starts server listening on the port