import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home,Contact,Header,Footer,ProductDetail,ProductList } from './components';

function App() {



  return (
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='header' element={<Header/>}/>
      <Route path='footer' element={<Footer/>}/>
      <Route path='products' element={<ProductDetail/>}/>
      <Route path='product/detail' element={<ProductList/>}/>

     

    


    </Routes>
  );
}

export default App