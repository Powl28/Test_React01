import React from 'react'
import { Route, Routes } from 'react-router-dom';
import {Home,Contact,ProductDetail,ProductList, NoFound,ContactEu,ContactIn,ContactUs} from './index';


function MainRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="contact" element={<Contact />}>
          <Route path="in" element={<ContactIn />} />
          <Route path="eu" element={<ContactEu />} />
          <Route path="us" element={<ContactUs />} />
        </Route>
        <Route path="*" element={<NoFound />} />
      </Routes>
    </div>
  );
}

export default MainRoute