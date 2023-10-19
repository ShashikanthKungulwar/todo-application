const express = require('express');
const PORT = 8000;
const db = require("./config/mongoose");//connection reference

const app = express();
app.use(express.static('assets'));  //to set static contect for the page
app.set('view engine', 'ejs');     //to set view engine as ejs
app.set('views', './views');        //to set views folder
app.use('/', require('./routes/index.js')); //routing folder to handle routes
app.listen(PORT, (err) => { 
    if (err) {
        console.error("something went wrong", err);
        return;
    }
    console.log("server is running at port: ", PORT);
});