var express = require('express');
var router = express.Router();
const restaurantController = require('../controllers/restaurantController');
/* GET home page. */
router.get('/', restaurantController.viewAll)
router.get('/edit/:id', restaurantController.renderEditForm);
router.post('/edit/:id', restaurantController.updateRestaurant);
router.get('/delete/:id', restaurantController.deleteRestaurant);
router.get('/add', restaurantController.renderAddForm);
router.post('/add', restaurantController.addRestaurant);
module.exports = router;

