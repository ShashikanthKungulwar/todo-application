const mongoose = require('mongoose');
let db;
mongoose.connect('mongodb://127.0.0.1:27017/todo-applicaion')
    .then(res => {db=res;console.log('successfully connected to db')})
    .catch((err) => { console.error("error occured while connection to database",err) });