const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const {signUp, logIn} = require("../controllers/users");
const {createRestaurant} = require("../controllers/restaurants");


router.post('/users/signup', signUp)
router.post('/users/login', logIn)

router.post('/restaurants', isAuthenticated, createRestaurant)


module.exports = router;