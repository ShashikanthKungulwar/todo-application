const Todos=require("../models/todos");

module.exports.delete=async (req,res)=>{
    if(req.query.arr)
    {
        let arr=[...req.query.arr.split(",")];
    if(arr.length!=0)
    await Todos.deleteMany({ _id: { $in: arr } });
    }
    return res.redirect('back')
}