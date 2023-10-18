const mongoose=require('mongoose');

const todosSchema=new mongoose.Schema({
    text:String,
    date:String,
    category:String
})


const Todos=mongoose.model('Todo',todosSchema);
module.exports=Todos;