const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');


console.log('router loaded');

router.get('/', homeController.home); 
router.get('/h2', homeController.home2);
router.use('/users', require('./users'));
router.use('/posts', require('./post'));


//for any further routes access from here
//router.use('routerName', require('./routerfile));


module.exports = router;