const express = require("express");
const app = express();
const todoRouter = require('./routes/todoList');
const mongoose = require('mongoose');
const Todolist = require('./models/list');

mongoose.connect("mongodb://localhost/Todo",{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
  });
app.use(express.json());
app.use('/todolist',todoRouter);

app.listen(8080);