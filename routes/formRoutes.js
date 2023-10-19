const express = require('express');
const router = express.Router();
const addTodoController = require('../controllers/addTodoController');
const deleTodosController = require("../controllers/deleteTodosController");
router.post('/add-item', addTodoController.add);
router.get('/delete-items', deleTodosController.delete);

module.exports = router;