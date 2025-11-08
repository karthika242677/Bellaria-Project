import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Pages from './page/Pages'
import Portfolio from './page/Portfolio'
import Blog from './page/Blog'
import Shop from './page/Shop'
import Contact from './page/Contact'
import Dynamic from './page/Dynamic'
import MyContextProvider from './context/MyContextProvider'
import Form from './page/Form'
import Protect from './page/Protect'

const App = () => {
  return (
    <>
        <BrowserRouter>
         <MyContextProvider>
      <Routes>
        <Route path='/'element={<Form/>}/>
          <Route path='/home'element={<Protect><Home/></Protect>}/>
          <Route path='/Pages'element={<Protect><Pages/></Protect>}/>
          <Route path='/portfolio'element={<Protect><Portfolio/></Protect>}/>
          <Route path='/blog'element={<Protect><Blog/></Protect>}/>
          <Route path='/shop'element={<Protect><Shop/></Protect>}/>
          <Route path='/contact'element={<Protect><Contact/></Protect>}/>
          <Route path='/dynamic/:id' element={<Protect><Dynamic/></Protect>} />
      </Routes>
      </MyContextProvider>
      </BrowserRouter>
     
    </>
  )
}

export default App