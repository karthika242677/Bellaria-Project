import React from 'react'
import Navbar from '../components/Common_components/Navbar'
import Menu_page from '../components/pages_components/Menu_page'
import Menu_story from '../components/pages_components/Menu_story'
import Footer from '../components/Common_components/Footer'
import Menu_mission from '../components/pages_components/Menu_mission'
import Menu_chef from '../components/pages_components/Menu_chef'
import Menu_cookie from '../components/pages_components/Menu_cookie'
import Menu_stand from '../components/pages_components/Menu_stand'

const Pages = () => {
  return (
    <>
    <Navbar/>
    <Menu_page/>
    <Menu_story/>
    <Menu_mission/>
    <Menu_chef/>
    <Menu_cookie/>
    <Menu_stand/>
    <Footer/>
    </>
  )
}

export default Pages