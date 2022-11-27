
const db = require('../models/database')
const userProfile = require('../models/userProfile')

const UserProfile = db.userprofile

const Users = db.users

const createUserProfile = async(req,res) =>

{
    try{

        let {userId, first_name, last_name, age, gender, message} = req.body

        if(!userId){
            return res.status(400).send({status: false, message: "userId is required"})
        }

        let id = await UserProfile.findOne({where:{userId: userId}})

        if(id){
            return res.status(404).send({status: false, message: "user profile is already created"})
        };

        if(!first_name){
            return res.status(400).send({status: false, message: "first_name is required"})
        }

        if(!last_name){
            return res.status(400).send({status: false, message: "last_name is required"})
        }

        if(!age){
            return res.status(400).send({status: false, message: "age is required"})
        }

        if(!gender){
            return res.status(400).send({status: false, message: "gender is required"})
        }

        if(!message){
            return res.status(400).send({status: false, message: "message is required"})
        }



        let data  = await UserProfile.create(req.body)

        return res.status(200).send({status: true, data: data})

    }catch(err){
        return res.status(500).send({status: false, Error: err.message})
    }
}



const oneToOne = async(req,res) =>

{
    try{

        let data  = await Users.findAll({
            
            include: userProfile,
            where:{id: "84b72190-54ac-419a-9aa7-bd1413c551aa"}
            
        })

        return res.status(200).send({status: true, data: data})

    }catch(err){
        return res.status(500).send({status: false, Error: err.message})
    }
}







const getUser = async(req,res) =>

{
    try{

        let data  = await UserProfile.findAll({})

        return res.status(200).send({status: true, data: data})

    }catch(err){
        return res.status(500).send({status: false, Error: err.message})
    }
}



const deleteUser = async(req,res) =>

{
    try{

        let id = req.params.id

        let data  = await UserProfile.destroy({where:{id}})

        return res.status(200).send({status: true, data: data})

    }catch(err){
        return res.status(500).send({status: false, Error: err.message})
    }
}


const updateUser = async(req,res) =>

{
    try{

        let id = req.params.id

        let {name, email, gender} = req.body

        let data  = await UserProfile.update({name:name, email: email, gender: gender},{where:{id}})

        return res.status(200).send({status: true, data: data})

    }catch(err){
        return res.status(500).send({status: false, Error: err.message})
    }
}





module.exports = {createUserProfile, getUser, deleteUser, updateUser, oneToOne} 
