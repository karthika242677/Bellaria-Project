const express=require("express")
const { addUser, getUser, removeUser, loginUser } = require("../controller/UserController")
const UserRouter=express.Router()

UserRouter.post("/add",addUser)
UserRouter.get("/users",getUser)
UserRouter.delete("/delete/:id",removeUser)
UserRouter.post("/login",loginUser)

module.exports=UserRouter