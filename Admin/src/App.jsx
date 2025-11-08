import React from 'react'
import Form from './pages/Form'
import{BrowserRouter,Route,Routes} from"react-router-dom"
import Product from './pages/Product'
import User from './pages/User'
import ContextProvider from './context/ContextProvider'

const App = () => {
  return (
    <>
    <BrowserRouter>
     <ContextProvider>
       <Routes>
          <Route path='/'element={<Form/>}/>
        <Route path='/product'element={<Product/>}/>
        <Route path='/user'element={<User/>}/>
        </Routes>
     </ContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App