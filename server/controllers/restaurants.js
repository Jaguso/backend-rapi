const {Restaurants} = require("../models");


const createRestaurant = async(req, res) => {
    try{
        req.body.userId = req.user.id

        console.log(req.body.userId)
        const restaurant = await Restaurants.create(req.body)
        if(!restaurant) res.status(400).json({"message": "Error to create restaurant"})

        // const address_restaurant = await Address_Restaurants.create({...req.body.address_restaurant, restaurantId: restaurant.id})
        // if(!address_restaurant) res.status(400).json({"message": "Error to create addree"})

        return res.status(200).json({"message": "Restaurant created succesfully", restaurant, "id": restaurant.id})

    }catch(e){
        console.log(e.message)
        return res.status(400).json({e})
    }

}


module.exports = {
    createRestaurant
}