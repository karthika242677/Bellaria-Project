import React from 'react'
import Navbar from '../components/Common_components/Navbar'
import Home_caro from '../components/Home_components/Home_caro'
import Content from '../components/Home_components/Content'
import Home_design from '../components/Home_components/Home_design'
import Home_gallery from '../components/Home_components/Home_gallery'
import Home_reser from '../components/Home_components/Home_reser'
import Home_chef from '../components/Home_components/Home_chef'
import Home_off from '../components/Home_components/Home_off'
import Home_class from '../components/Home_components/Home_class'
import Footer from '../components/Common_components/Footer'

const Home = () => {
  return (
    <><Navbar/>
     <Home_caro/>
        <Content/>
         <Home_design/>
        
      {/* ✅ Background applied to entire Home page */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(248, 243, 243, 0.75)),
          url("https://bellaria.cwsthemes.com/wp-content/uploads/2017/12/516360906.jpg?id=188")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Home_gallery/>
        <Home_reser/>
        <Home_chef/>
        <Home_off/>    
        <Home_class/>
         <Footer/>
      </div>

     
    </>
  )
}

export default Home
