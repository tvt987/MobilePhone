import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../Pages/Home.js';
import Nav from '../Components/Nav.js';
import Footer from '../Components/Footer.js';
import Model from '../Components/Model.js';
import ProductDetail from './ProductDetail.js';
import Category from '../Pages/Category.js'
import Cart from '../Pages/Cart.js'

function User() {
  

  return (
    <div style={{ backgroundColor: '#3E3E3F' }}>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/oppo' element={<Category />} />
        <Route path='/ProductDetail' element={<ProductDetail />} />
        <Route path='/ProductDetail/:productId' element={<ProductDetail />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
      {/* Use state values instead of querying the DOM */}
      <div className="count-down">
        <span>KẾT THÚC TRONG</span>
        <div className="countdown-time">
          <div className="hours"><span>55</span></div>
          <span>:</span>
          <div className="minutes"><span>55</span></div>
          <span>:</span>
          <div className="seconds"><span>55</span></div>
        </div>
      </div>
      <Footer />
      <Model />
    </div>
  );
}

export default User;
