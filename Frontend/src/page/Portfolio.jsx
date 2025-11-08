import React from 'react'
import Navbar from '../components/Common_components/Navbar'
import Portfolio_menu from '../components/Portfolio_components/Portfolio_menu'
import Footer from '../components/Common_components/Footer'
import Portfolio_gallery from '../components/Portfolio_components/Portfolio_gallery'
import Portfolio_descp from '../components/Portfolio_components/Portfolio_descp'

const Portfolio = () => {
  return (
    <>
    <Navbar/>   
    <Portfolio_menu/>
    <Portfolio_gallery/>
    <Portfolio_descp/>
    <Footer/>
    </>
  )
}

export default Portfolio