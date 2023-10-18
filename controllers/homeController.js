const Todos=require("../models/todos");
module.exports.home=async (req,res)=>{
    const todos=await Todos.find({});
    return res.render('../views/index.ejs',{
        todos:todos
    });
}