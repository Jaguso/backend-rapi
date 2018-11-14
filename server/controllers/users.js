const {Users} = require('../models');
const createToken = require('../resolvers/createToken');


const signUp = async(req,res) => {
    console.log(req.body)
    let user = await Users.create(req.body)

    if(!user) return res.status(400).json({message: "Couldn't create user"})

    return res.status(201).json(user)

}


const logIn = async(req, res) => {

    let user = await Users.find({where: {email: req.body.email}})
    if(!user) return res.status(404).json({"message": "User does not exist"})

    user.comparePassword(req.body.password).then(async(result) => {
        if(result){
            let token = await createToken(user)
            return res.status(200).json({"message": "User logged successfully", token})
        }else{
            return res.status(400).json({"message": "Password is incorrect"})
        }

    }).catch((err) => console.log(err))
}

module.exports = {
    signUp,
    logIn
}