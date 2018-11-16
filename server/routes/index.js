const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const {signUp, logIn} = require("../controllers/users");
const {createRestaurant, getAllRestaurants, getOneRestaurant} = require("../controllers/restaurants");


router.post('/users/signup', signUp)
router.post('/users/login', logIn)

router.post('/restaurants', isAuthenticated, createRestaurant)
router.get('/restaurants', getAllRestaurants)
router.get('/restaurants/:id', getOneRestaurant)

module.exports = router;