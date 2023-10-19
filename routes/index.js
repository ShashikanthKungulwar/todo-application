const express = require('express');
const router = express.Router()

const homeController = require('../controllers/homeController');
router.use(express.urlencoded());//to parse the req to json to access 

router.get('/', homeController.home);
router.use("/form", require("./formRoutes"));  //to handle other routes
module.exports = router;