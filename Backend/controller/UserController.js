const UserModel = require("../model/UserModel")

const addUser=async(req,res)=>{
    try{
        const{username,password,email}=req.body
        const UserData=UserModel({
            username,password,email
        })
        await UserData.save()
        res.status(200).send("Userdata Added!")
    }
    catch(err){
        res.status(404).send(`Error Name:${err.name},Error Message:${err.message}`)
    }
}

const getUser=async(req,res)=>{
    try{
        const UserList=await UserModel.find()
        res.status(200).send(UserList)
    }
    catch(err){
        res.status(404).send(`Error Name:${err.name},Error Message:${err.message}`)
    }
}
const removeUser=async(req,res)=>{
    try{
        await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Userdata Removed")
    }
    catch(err){
        res.status(404).send(`Error Name:${err.name},Error Message:${err.message}`)
    }
}

const loginUser=async(req,res)=>{
        try{
    const {username,password}=req.body
    const user=await UserModel.findOne({
        username,password
    })
    if(user){
        res.status(200).send(user)
    }
    else{
        res.status(404).send("Invalid User!")
    }
        }
     catch(err){
        res.status(404).send(`Error Name:${err.name},Error Message:${err.message}`)
    }
}

module.exports={addUser,getUser,removeUser,loginUser}