

const db = require('../models/database')

const Users = db.users

const createUser = async(req,res) =>

{
    try{

        let {email, password} = req.body

        if(!email){
            return res.status(400).send({status: false, message: "Email is required"})
        }

        if(!password){
            return res.status(400).send({status: false, message: "password is required"})
        }

        let isEmail = await Users.findOne({where:{email: email}})

        if(isEmail){
            return res.status(404).send({status: false, message: "Email already registered"})
        };


        let data  = await Users.create(req.body)

        return res.status(200).send({status: true, data: data})

    }catch(err){
        return res.status(500).send({status: false, Error: err.message})
    }
}


const getUser = async(req,res) =>

{
    try{

        let data  = await Users.findAll({})

        return res.status(200).send({status: true, data: data})

    }catch(err){
        return res.status(500).send({status: false, Error: err.message})
    }
}



const deleteUser = async(req,res) =>

{
    try{

        let id = req.params.id

        let data  = await Users.destroy({where:{id}})

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

        let data  = await Users.update({name:name, email: email, gender: gender},{where:{id}})

        return res.status(200).send({status: true, data: data})

    }catch(err){
        return res.status(500).send({status: false, Error: err.message})
    }
}





module.exports = {createUser, getUser, deleteUser, updateUser} 