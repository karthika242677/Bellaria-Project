
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'


export const MyContext=createContext()
const ContextProvider = ({children}) => {
      const url = "http://localhost:5000"
    const[category,setCategory]=useState("")
    const[type,setType]=useState("")
    const[desc,setDesc]=useState("")
    const[price,setPrice]=useState("")
    const[img,setImg]=useState("")
    const[previewImg,setPreviewImg]=useState("")
    const[productData,setProductData]=useState([])
    const[userData,setUserData]=useState([])

    var[updateCategory,setUpdateCategory]=useState("")
    var[updateType,setUpdateType]=useState("")
    var[updateDesc,setUpdateDesc]=useState("")
    var[updatePrice,setUpdatePrice]=useState("")
    var[updateImg,setUpdateImg]=useState("")
    var[updatePreviewImg,setUpdatePreviewImg]=useState("")
    var[updateId,setUpdateId]=useState("")



const ImageFun=(e)=>{
    const file=e.target.files[0]
    if(file){
        const reader=new FileReader()
        reader.onloadend=()=>{
            setImg(reader.result)
            setPreviewImg(reader.result)
        }
        reader.readAsDataURL(file)
    }
}

var formData={
          img,category,type,desc,price
        }

console.log(formData)

 const ProductSubmitFun=async(e)=>{
    try{
        e.preventDefault()
        var formData={
          img,category,type,desc,price
        }
        await axios.post(`${url}/product/add`,formData)
        alert("product saved")
    }
    catch(err){
      console.log(`Erro Name:${err.name},Error Message:${err.message}`)
    }
  }
  
   const FetchProductData = async () => {
    try{
      var productList = await axios.get(`${url}/product/products`)
      setProductData(productList.data)
  console.log(productData)
    }
    catch(err){
      console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
  }
  useEffect(()=>{
    FetchProductData()
  },[])


  

const UpdateFun=(id)=>{
    var product=productData.find(a=>a._id===id)
    if(product){
        setUpdateCategory(product.category)
        setUpdateType(product.type)
        setUpdateDesc(product.desc)
        setUpdatePrice(product.price)
        setUpdateImg(product.img)
        setUpdatePreviewImg(product.img)
        setUpdateId(product._id)

    }
}
const RemoveProduct=async(id)=>{
    try{
      if(confirm("Are you sure want to delete this product?")){
        await axios.delete(`${url}/product/remove/${id}`)
        alert("Product Removed!")
        FetchProductData()
      }
    }
    catch(err){
        console.log(`Error Name:${err.name},Error Message:${err.message}`)
    }
}


const UpdateImageFun=(e)=>{
    var file=e.target.files[0]
    if(file){
        var reader=new FileReader()
        reader.onloadend=()=>{
            setUpdateImg(reader.result)
            setUpdatePreviewImg(reader.result)
        }
        reader.readAsDataURL(file)
    }
}
const UpdateSubmitFun=async(e)=>{
    try{
        e.preventDefault()
        var updateFormData={
            category:updateCategory,
            type:updateType,
            desc:updateDesc,
            price:updatePrice,
            img:updateImg
        }
        await axios.put(`${url}/product/update/${updateId}`,updateFormData)
        alert("Product Saved!")
        FetchProductData()
    }
    catch(err){
        console.log(`Error Name:${err.name},Error Message:${err.message}`)
    }
}
const FetchUserData=async()=>{
  try{
    const UserList=await axios.get(`${url}/user/users`)
    setUserData(UserList.data)
  }

catch(err){
        console.log(`Error Name:${err.name},Error Message:${err.message}`)
    }
}
useEffect(()=>{
  FetchUserData()
},[])

const RemoveUser=async(id)=>{
  try{
    if(confirm("Are you sure want to delete this user?")){
      await axios.delete(`${url}/user/delete/${id}`)
      alert("Userdata Removed!")
      FetchUserData()
    }
  }
  catch(err){
    console.log(`Error Name:${err.name},Error Message:${err.message}`)
  }
}

const contextValue={
    category,setCategory,
    type,setType,
    desc,setDesc,
    price,setPrice,
    ImageFun,
    previewImg,
    ProductSubmitFun,
    productData,
    updateCategory,setUpdateCategory,
    updateType,setUpdateType,
    updateDesc,setUpdateDesc,
    updatePrice,setUpdatePrice,
    updatePreviewImg,
    UpdateFun,RemoveProduct,UpdateImageFun,
    UpdateSubmitFun,

    userData,
    RemoveUser
}

  return (
   <MyContext.Provider value={contextValue}>
    {children}
   </MyContext.Provider>
  )
}

export default ContextProvider