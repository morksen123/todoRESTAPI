const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();

// use express.json() to get data into json format
app.use(bodyParser.json());
app.use(cors());

// import routes 
const ToDoItemRoute = require('./routes/todoItems');
app.use('/', ToDoItemRoute)

// base route
app.get('/', (req, res) => {
    res.send('Welcome to todo app');
});

// Connect to mongodb compass
mongoose.connect(process.env.DB_CONNECTION)
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err))

// Add Port and connect to server
app.listen(5500, () => console.log("Server connected"));


