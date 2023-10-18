const Todos=require('../models/todos.js')

module.exports.add=async (req,res)=>{
    Todos.create(req.body);
    return res.redirect("back");
}
