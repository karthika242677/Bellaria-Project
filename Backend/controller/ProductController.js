const ProductModel = require("../model/ProductModel")

const addProduct=async(req,res)=>{
    try{
        const{img,category,desc,type,price}=req.body
        const productData=ProductModel({
            img,category,desc,type,price
        })
        await productData.save()
        res.status(200).send("product Added")
    }
    catch(err){
        res.status(404).send(`Error Name:${err.name},Error Message:${err.message}`)
    }
}

const getProduct=async(req,res)=>{
    try{
        const productList=await ProductModel.find()
        res.status(200).send(productList)
    }
    catch(err){
        res.status(404).send(`Error Name:${err.name},Error Message:${err.message}`)

    }
}
const removeProduct=async(req,res)=>{
    try{
        await ProductModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Product Removed")
  
    }
    catch(err){
        res.status(404).send(`Error Name:${err.name},Error Message:${err.message}`)

    }
}
const updateProduct=async(req,res)=>{
    try{
        const updateProduct=await ProductModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).send(updateProduct)
    }
     catch(err){
        res.status(404).send(`Error Name:${err.name},Error Message:${err.message}`)

    }
}
module.exports={addProduct,getProduct,removeProduct,updateProduct}
