const express = require('express');
const router = express.Router();
const Todolist = require('../models/list');

router.post('/',  async(req, res) => {
    var d = new Date(req.body.date);
    const todo = new Todolist({
        name : req.body.name,
        date : d
    });

    try
    {
        const t = await todo.save();
        res.json(t);
    }
    catch(e)
    {
        res.send(e);
    }
});

router.get('/', async(req, res)=>{
    try
    {
        const todo = await Todolist.find();
        res.json(todo);
    }
    catch(e)
    {
        res.send(e);
    }
});

router.get('/:name', async(req, res)=>{
    try
    {
        const todo = await Todolist.findOne({"name": req.params.name});
        res.send(todo);
    }
    catch(e)
    {
        res.send("Invalid");
    }
});

router.patch('/:name', async (req, res) => {
    try
    {
        const todo = await Todolist.findOne({"name": req.params.name});
        todo.date = req.body.date;
        const t = await todo.save();
        res.json(t);
    }
    catch(e)
    {
        res.send(e);
    }
    
});

router.delete('/:name', async (req, res) => {
    try
    {
        const todo = await Todolist.findOne({"name": req.params.name});
        const t = await todo.deleteOne();
        res.send("Deleted");
    }
    catch(e)
    {
        res.send(e);
    }
    
});


module.exports = router;