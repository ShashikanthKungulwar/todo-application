const express=require('express');
const homeController=require('../controllers/homeController');
const router=express.Router();
router.use(express.urlencoded());

router.get('/',homeController.home);
router.use("/form",require("./formRoutes"));
module.exports=router;