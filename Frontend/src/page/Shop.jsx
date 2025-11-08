import React from 'react'
import Navbar from '../components/Common_components/Navbar'
import Footer from '../components/Common_components/Footer'
import Shop_menu from '../components/Shop_components/Shop_menu'
import Shop_product from '../components/Shop_components/Shop_product'

const Shop = () => {
  return (
    <>
<Navbar/>
     <div
        style={{
          backgroundImage: `linear-gradient(hsla(60, 7%, 72%, 0.58)),url(
          "https://images.unsplash.com/photo-1617801106126-6e4acf820ade?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
      }}>
    <Shop_menu/>
    <Shop_product/>
    <Footer/>
    </div>
    </>
  )
}

export default Shop