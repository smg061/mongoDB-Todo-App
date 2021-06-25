const router = require('express').Router();
const mongoose = require('mongoose');
const Todo = require('../../models/todo')
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
});

router.get('/', async(req,res )=> {
    const todoData = await Todo.find({});
    res.status(200).json(todoData)
})

router.post('/create', async(req,res)=> {
    const record = req.body;
    console.log(record);
    await Todo.create(record);
    res.status(200).json({status:'ok', body:record});
})


module.exports = router;