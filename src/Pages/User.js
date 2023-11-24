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


    const btnModelLogin = document.querySelector('.model__btn-login');
    let iptEmail = document.getElementById('model-body__emailIpt');
    let iptPass = document.getElementById('model-body__passIpt');

    btnModelLogin.addEventListener('click', () => {
      const apiUser = `http://localhost:8080/signin/${iptEmail.value}/${iptPass.value}`;

      fetch(apiUser, {
        method: 'POST', // Giả sử điều này là một yêu cầu POST dựa trên mã phía máy chủ của bạn
        headers: {
          'Content-Type': 'application/json',
        },
        // Bao gồm một body nếu cần, ví dụ:
        // body: JSON.stringify({ email: iptEmail.value, password: iptPass.value }),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setUser(data)
        })
        .catch(error => console.error('Lỗi:', error));
    });
    function handleClickLogout() {
      setUser(undefined)
    }

    let btnLogout = document.querySelector('.js-model-logout')
    btnLogout.addEventListener('click', () => {
      handleClickLogout()
    })

    
  }, [])


  return (
    <div style={{ backgroundColor: '#3E3E3F' }}>
      <Nav user={user} />
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
