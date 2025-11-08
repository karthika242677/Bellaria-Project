const connectDB = require("./config/db");
connectDB()

const dotenv=require("dotenv")
dotenv.config()

const express=require("express");
const app=express()

const cors=require("cors");
app.use(cors())

app.use(express.json({limit:"50mb"}))

const ProductRouter = require("./router/ProductRouter");
app.use("/product",ProductRouter)

const UserRouter = require("./router/UserRouter");
app.use("/user",UserRouter)


app.listen(process.env.PORT,()=>{
    console.log("server running")
})

