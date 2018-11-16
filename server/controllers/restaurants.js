const {Restaurants, Address_Restaurants, Users} = require("../models");


const createRestaurant = async(req, res) => {
    try{
        req.body.userId = req.user.id

        console.log(req.body.userId)
        const restaurant = await Restaurants.create(req.body)
        if(!restaurant) res.status(400).json({"message": "Error to create restaurant"})

        const address = await Address_Restaurants.create({...req.body.address, restaurantId: restaurant.id})
        if(!address) res.status(400).json({"message": "Error to create addree"})

        return res.status(200).json({"message": "Restaurant created succesfully", restaurant, address})

    }catch(e){
        console.log(e.message)
        return res.status(400).json({e})
    }
}


const getAllRestaurants = async(req, res) => {
    let allRestaurants = await Restaurants.findAll({where:{}, include: [
        {
            model: Users,
            as: "user"
        }
    ]})

    return res.status(200).json(allRestaurants);
}


const getOneRestaurant = async(req, res) => {
    let getRestaurant = await Restaurants.findOne({where: {id:req.params.id}, include: [
        {
            model: Users,
            as: "user"
        },
        {
            model: Address_Restaurants,
            as: "address"
        }
    ]})

    return res.status(200).json(getRestaurant)
}


module.exports = {
    createRestaurant,
    getAllRestaurants,
    getOneRestaurant
}