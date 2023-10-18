const express = require('express');
const PORT = 8000;
const db = require("./config/mongoose");
// const Todos = require("./models/todos");
const app = express();
app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/', require('./routes/index.js')); 
app.listen(PORT, (err) => {
    if (err) {
        console.error("something went wrong", err);
        return;
    }
    console.log("server is running at port: ", PORT);
});