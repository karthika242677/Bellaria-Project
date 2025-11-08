const mongoose=require("mongoose")
const ProductSchema=mongoose.Schema({
    category : {
        type : String , 
        required : true
    } , 
    type : {
        type : String , 
        required : true
    } , 
    desc : {
        type : String , 
        required : true
    } , 
    price : {
        type : Number , 
        required : true
    } , 
    img : {
        type : String , 
        required : true
    } 
})

const ProductModel=mongoose.model("product",ProductSchema)
module.exports=ProductModel