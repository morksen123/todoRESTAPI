const mongoose = require('mongoose')

// create Schema
const TodoItemScehma = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
})

// export schema
module.exports = mongoose.model('todo', TodoItemScehma)
  

