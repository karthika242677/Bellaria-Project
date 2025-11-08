import React from 'react'
import Navbar from '../components/Common_components/Navbar'
import Contact_menu from '../components/Contact_components/Contact_menu'
import Footer from '../components/Common_components/Footer'
import Contact_pages from '../components/Contact_components/Contact_page'

const Contact = () => {
  return (
    <>
     <Navbar/>
    <div
        style={{
          backgroundImage: `linear-gradient(rgba(248, 243, 243, 0.75)),url(
          "https://www.thecakeshop.co.in/assets/images/image01/regular-1.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
      }}>
    <Contact_menu/>
    <Contact_pages/>
    <Footer/>
    
    </div>
    </>
  )
}

export default Contact