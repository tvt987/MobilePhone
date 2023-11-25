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
  const [userz, setUser] = useState({});
    const modelLogin = document.querySelector('.model-login')
const [orders, setOrders] = useState([])
    

useEffect(() => {
    const btnLogin = document.querySelector('.model__btn-login');

    btnLogin.addEventListener('click', () => {
        const email = document.getElementById('model-body__emailIpt').value;
        const pass = document.getElementById('model-body__passIpt').value;

        // Dữ liệu bạn muốn gửi
        const formData = {
            email: email,
            pass: pass
        };

        // Tạo một đối tượng Options cho fetch với method là POST và body chứa dữ liệu
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // Bạn có thể thêm các header khác nếu cần thiết
            },
        };

        // Sử dụng fetch với các tùy chọn mới
        fetch(`http://localhost:8080/admin/signin/${email}/${pass}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setUser(data);
                sessionStorage.setItem("user",JSON.stringify(data));
            })
            .catch(error => console.error('Error:', error));

    });

   
    const modelLogout = document.querySelector(".js-model-logout")

    modelLogout.addEventListener("click", () => {
      setUser(undefined)
      sessionStorage.setItem("user", JSON.stringify(""))
    })


}, [userz]);
const a = sessionStorage.getItem("user");
const user = JSON.parse(a)
if(user){
    if(modelLogin){
        modelLogin.style.display = "none"
    }
}


  





  useEffect(() => {
    nav()

  }, [])
console.log(orders)

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
        <Route path='/OrderDetail/:id' element={<Cart />} />

        <Route path='/Cancel' element={<Cancel />} />
        <Route path='/getOrders' element={<Cancel />} />
      </Routes>
     
      <Footer />
      <Model />
    </div>
  );
}

export default User;
