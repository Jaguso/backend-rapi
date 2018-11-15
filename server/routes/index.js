const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const {signUp, logIn} = require("../controllers/users");
const {createRestaurant, getAllRestaurants} = require("../controllers/restaurants");


router.post('/users/signup', signUp)
router.post('/users/login', logIn)

router.post('/restaurants', isAuthenticated, createRestaurant)
router.get('/restaurants', getAllRestaurants)

module.exports = router;