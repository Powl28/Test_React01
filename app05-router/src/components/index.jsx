import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Header from './Header'
import Footer from './Footer'
import ProductDetail from './ProductDetail'
import ProductList from './ProductList'
import { Routes } from 'react-router-dom'

export {Home,Contact,Header,Footer,ProductDetail,ProductList}

function index() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<ProductList/>}/>
 
    </Routes>
  )
}

export default index
