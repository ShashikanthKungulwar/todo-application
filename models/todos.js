const mongoose=require('mongoose');


//schema for each document
const todosSchema=new mongoose.Schema({
    text:String,
    date:String,
    category:String
})

//collection for the database with schema
const Todos=mongoose.model('Todo',todosSchema);
module.exports=Todos;