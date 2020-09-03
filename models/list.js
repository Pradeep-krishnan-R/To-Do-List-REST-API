const mongoose = require('mongoose');

const todolistSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
});

module.exports = mongoose.model("ToDoList", todolistSchema);