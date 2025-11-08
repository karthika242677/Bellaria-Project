const express=require("express")
const ProductRouter=express.Router()
const { addProduct, getProduct, removeProduct, updateProduct } = require("../controller/ProductController")


ProductRouter.post("/add",addProduct)
ProductRouter.get("/products",getProduct)
ProductRouter.delete("/remove/:id",removeProduct)
ProductRouter.put("/update/:id",updateProduct)

module.exports=ProductRouter
