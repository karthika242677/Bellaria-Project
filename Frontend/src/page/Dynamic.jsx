import React from 'react'
import Navbar from '../components/Common_components/Navbar'
import Dynamic_menu from '../components/dynamic_components/Dynamic_menu'
import Footer from '../components/Common_components/Footer'
import View_page from '../components/dynamic_components/View_page'
import Dynamic_allproduct from '../components/dynamic_components/Dynamic_allproduct'

const Dynamic = () => {
  return (
    <>
    <div
        style={{
          backgroundImage: `linear-gradient(hsla(60, 13%, 91%, 0.90)),url(
          "https://www.thecakeshop.co.in/assets/images/image01/welcome-cake-1.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
      }}>
    <Navbar/>
    <Dynamic_menu/>
    <View_page/>
    <Dynamic_allproduct/>
    <Footer/>
    </div>
    </>
  )
}

export default Dynamic