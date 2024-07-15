import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home,Contact,Header,Footer,ProductDetail,ProductList } from './components';

function App() {



  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="footer" element={<Footer />} />
        <Route path="products" element={<ProductList />} />
        <Route path="product/detail" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App