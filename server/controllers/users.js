const {Users} = require('../models');


const signUp = async(req,res) => {
    console.log(req.body)
    let user = await Users.create(req.body)

    if(!user) return res.status(400).json({message: "Couldn't create user"})

    return res.status(201).json(user)

}


module.exports = {
    signUp
}