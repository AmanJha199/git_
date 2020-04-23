const express=require('express');
const router=express.Router();
const Home_Controller=require('../controllers/home_controller');

router.get('/',Home_Controller.homeController);

//creating a route
router.post('/create-list',Home_Controller.createList);
router.post('/delete-task',Home_Controller.DeleteList);

module.exports=router;