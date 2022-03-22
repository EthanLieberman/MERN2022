const express = require('express');
const app = express();
const PORT = 8000;

// middleware
app.use(express.json(), express.urlencoded({extended:true}))

// connect mongodb with server using mongoose
require('./config/mongoose.config');

// import routes
require('./routes/jokes.routes')(app)


app.listen(PORT, () => console.log('server launch text'))