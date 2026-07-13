import React from 'react'
import Navbar from './components/Navbar'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductDetails from './pages/ProductDetails'
import Footer from './components/Footer'
import OrderConfirmation from './pages/OrderConfirmation'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
  <>
    <Router>
      <div className="min-h-screen bg-gray-950 font-sans">
        <Navbar/>

      <Routes>
       <Route path='/' element={<ProductList/>}/>
       <Route path='/product/:id' element={<ProductDetails/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      <Footer/>
        </div>
    </Router>
    </>
  )
}

export default App