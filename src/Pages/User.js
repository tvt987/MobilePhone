import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../Pages/Home.js';
import Nav from '../Components/Nav.js';
import Footer from '../Components/Footer.js';
import Model from '../Components/Model.js';
import ProductDetail from './ProductDetail.js';
import Category from '../Pages/Category.js'
import Cart from '../Pages/Cart.js'
import Cancel from '../Pages/Cancel.js'
import Canceldetail from '../Pages/CancelDetial.js'
import nav from '../static/js/nav.js';
import { useEffect } from 'react';
function User() {
  const [user, setUser] = useState(undefined)
  




  useEffect(() => {

            
    nav()



    
  }, [])


  return (
    <div style={{ backgroundColor: '#3E3E3F' }}>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:brand' element={<Category />} />
        <Route path='/:brand' element={<Category />} />
        <Route path='/:brand' element={<Category />} />
        <Route path='/:brand' element={<Category />} />
        <Route path='/ProductDetail' user={user} element={<ProductDetail />} />
        <Route path='/ProductDetail/:productId' element={<ProductDetail />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Cancel' element={<Cancel />} />
        <Route path='/Canceldetail' element={<Canceldetail />} />
      </Routes>
     
      <Footer />
      <Model />
    </div>
  );
}

export default User;
