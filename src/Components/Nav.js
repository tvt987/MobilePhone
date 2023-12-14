import { useEffect, useState } from 'react';
import '../static/css/nav.css'
import logoPhone from '../static/images/img-model/header__logophone.png'
import logoUser from '../static/images/img-model/user.svg'
import { Link, useNavigate } from 'react-router-dom'; // Switched to useNavigate
function Nav() {
  let user
  const b = sessionStorage.getItem("user")
  const navigate = useNavigate(); // Changed to useNavigate
  
  if (b) {
    user = JSON.parse(b)
  }
  function handleClickItemNav(indexItemNav) {
    const listItems = document.querySelectorAll(".nav__center-item")
    for(var i = 0; i < listItems.length; i++){
      listItems[i].classList.remove("nav__center-item--active", "fa-fade")
      if(i == indexItemNav){
        listItems[i].classList.add("nav__center-item--active", "fa-fade")
      }
    }


    const itemActive = document.querySelector(".nav__center-item--active")
    const line = document.querySelector(".line")

    line.style.left = itemActive.offsetLeft + 'px'
    line.style.width = itemActive.offsetWidth + 'px'

    
  }


  const [isSearchVisible, setSearchVisible] = useState(false);

  function handleSearch() {

    setSearchVisible(!isSearchVisible);
    
  }
  function handleSearchIconClick() {
    // Thực hiện các xử lý tìm kiếm nếu cần
    if(isSearchVisible){
      let nameProduct = name;
      name = "";
      navigate(`/product/${nameProduct}`); // Thay thế '/search' bằng URL mà bạn muốn chuyển hướng
    }
    // Sau đó, chuyển hướng đến URL mong muốn
  }

  var name

  function changeName(){
    const iptName = document.querySelector(".nav__search-ipt")
    name = iptName.value
  }
    





  return (
    <div className="main__header">
      <div className="nav1 row">
        <div className="nav__lef col-lg-3 col-md-3 col-sm-6">
          <a href='/' className="nav__lef-name">
            <span>ONLINE</span>
            <span>-</span>
            <span>MOBILE</span>
            <span>-</span>
            <span>STORE</span>
          </a>
          <div className="nav__lef-logo">
            <div
              style={{
                backgroundImage: `url(${logoPhone})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
              }}
            ></div>
          </div>
        </div>
        <div className={`nav__center col-lg-6 col-md-6 col-sm-0 ${isSearchVisible ? 'hidden' : ''}`}>
          <Link to='/1' className="nav__center-item" onClick={() => handleClickItemNav(0)}>IPHONE</Link>
          <Link to='/15' className="nav__center-item" onClick={() => handleClickItemNav(1)}>OPPO</Link>
          <Link to='/3' className="nav__center-item" onClick={() => handleClickItemNav(2)}>XIAOMI</Link>
          <Link to='/2' className="nav__center-item" onClick={() => handleClickItemNav(3)}>SAMSUNG</Link>
          <div className='line'></div>
        </div>
        <div className={`nav__search col-lg-6 col-md-6 col-sm-0 ${isSearchVisible ? 'active' : ''}`}>
        <input onChange={() => changeName()}  className='nav__search-ipt' />
      </div>
        <div className="nav__right col-lg-3 col-md-3 col-sm-6">
          <div className="nav__right-btns">
            <div className="nav__right-btn">
              {(isSearchVisible) ? (
                <div onClick={() => {
                  handleSearch();
                  handleSearchIconClick(name);
                }}><i className="searchNavBtn fa-solid fa-magnifying-glass"></i></div>
              ) : (
                <div onClick={() => {
                  handleSearch();
                  handleSearchIconClick(name);
                }}><i className="searchNavBtn fa-solid fa-magnifying-glass"></i></div>
              )}
              
              </div>

            <a href='/Cart' className="nav__right-btn">
              <i className="fa-solid fa-cart-arrow-down"></i>
            </a>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${logoUser})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
          </div>

          <div style={(user && user.roles === 'USER') ? { display: 'block' } : { display: 'none' }} className="nav__right-control">
            <div className="dropdown">
              <button className="btn admin dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {(user) ? ((user.fullName.length > 9) ? "..." + user.fullName.substring(user.fullName.lastIndexOf(" ")) : user.fullName) : ''}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div className="dropdown-item js-model-changepass">Change Password</div>
                <div className="dropdown-item js-model-setprofileO">Set Profile</div>
                <a href='/getOrders' className="dropdown-item js-orders">Orders</a>
                <div className="dropdown-item js-model-logout">Logout</div>
              </div>
            </div>
          </div>
          <div style={(user && user.roles === 'USER') ? { display: 'none' } : { display: 'block' }} className="nav__right-control js-model-login">
            Login
          </div>
        </div>
      </div>
      <script type="module" src="../static/js/home.js"></script>
    </div>
  );
}

export default Nav