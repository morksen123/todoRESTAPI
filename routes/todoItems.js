const router = require('express').Router();

// import todo model 
const todoItemsModel = require('../models/todoItems');

// create todo item object in database
router.post('/api/item', async (req, res) => {
    try { 
        const newItem = new todoItemsModel({
            item: req.body.item
        })
        const saveItem = await newItem.save()
        res.json(saveItem);
    } catch (err) {
        res.json({ message: err });
    }
})

// read todo items stored in todos collection
router.get('/api/items', async (req, res) => {
    try {
        const allToDoItems = await todoItemsModel.find();
        res.json(allToDoItems);
    } catch (err) {
        res.json({ message: err })
    }
})

// update todo item using PUT 
router.put('/api/item/:id', async (req, res) => {
    try {
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.json(updateItem);
    } catch (err) {
        res.json(err)
    }
})

// delete items from database 
router.delete('/api/item/:id', async (req, res) => {
    try {
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
        res.json(deleteItem);
    } catch (err) {
        res.json(err);
    }
})

module.exports = router