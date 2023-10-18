const express=require('express');
const addTodoController=require('../controllers/addTodoController');
const deleTodosController=require("../controllers/deleteTodosController");
const router=express.Router();
router.post('/add-item',addTodoController.add);
router.get('/delete-items',deleTodosController.delete);

module.exports=router;