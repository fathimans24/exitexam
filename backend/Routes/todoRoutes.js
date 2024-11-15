const express = require('express');
const router = express.Router();
const User = require('../model/todoSchema');


router.get('/api/todos', async (req, res) => {
    const todos = await user.find();
    res.json(todos);
});

router.post('/api/todos', async (req, res) => {
    const newTodo = new User(req.body);
    await newTodo.save();
    res.json(newTodo);
    
});

router.delete('/api/todos/:id', async (req, res) => {
    await user.findByIdAndDelete(req.params.id);
    res.sendStatus(204)
});



module.exports = router;


