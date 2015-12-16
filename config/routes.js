var express  = require('express');
var router   = express.Router();
var passport = require("passport");

var usersController = require('../controllers/usersController');
var authenticationsController = require('../controllers/authenticationsController');
var powersController = require('../controllers/powersController');
var powerboxesController = require('../controllers/powerboxesController');
var recipientsController = require('../controllers/recipientsController');
var categoriesController = require('../controllers/categoriesController');

router.post('/login', authenticationsController.login);
router.post('/register', authenticationsController.register);

// router.route('/logout')
//   .get(authenticatedUser, usersController.getLogout);

router.route('/users')
  .get(usersController.usersIndex)

router.route('/users/:id')
  .get(usersController.usersShow)
  .put(usersController.usersUpdate)
  .patch(usersController.usersUpdate)
  .delete(usersController.usersDelete)

router.route('/recipients')
  .get(recipientsController.recipientsIndex)
  .post(recipientsController.recipientsCreate)

router.route('/recipients/:id')
  .get(recipientsController.recipientsShow)

router.route('/powers')
  .get(powersController.powersIndex);

router.route('/powers/:id')
  .get(powersController.powersShow);
  
  // .put(powersController.powersUpdate)
  // .patch(powersController.powersUpdate)

router.route('/powers/random/:tag')
  .get(powersController.getRandomByTag);

router.route('/powers/send-sms')
  .post(powersController.sendSms);

router.route('/powers/categories')
  .get(categoriesController.categoriesIndex);

router.route('/powers/powerbox')
  .post(powersController.savePowers);

router.route('/categories/:id')
  .get(categoriesController.categoriesShow);

router.route('/categories')
  .get(categoriesController.categoriesIndex);


// router.route('/powers/:id/send')
//   .get(powersController.powersShow)
//   .post(powersController.powersShow)


module.exports = router;


