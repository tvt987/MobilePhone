import { useEffect } from 'react';
import '../static/css/nav.css'
import logoPhone from '../static/images/img-model/header__logophone.png'
import logoUser from '../static/images/img-model/user.svg'
import { Link } from 'react-router-dom';
function Nav() {
  let user
  const b = sessionStorage.getItem("user")
        if(b){
          user = JSON.parse(b)
        }

        
  


  return (
    <div className="main__header">
      <div className="nav1 row">
        <div className="nav__lef col-lg-3 col-md-3 col-sm-6">
          <div className="nav__lef-name">
            <span>Mobile</span>
            <span>-</span>
            <span>League</span>
            <span>-</span>
            <span>OTI</span>
          </div>
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
        <div className="nav__center col-lg-6 col-md-6 col-sm-0">
          <Link to='/10'className="nav__center-item nav__center-item--active fa-fade">IPHONE</Link>
          <Link to='/15' className="nav__center-item">OPPO</Link>
          <Link to='/3' className="nav__center-item">XIAOMI</Link>
          <Link to='/4' className="nav__center-item">HUAWEI</Link>
        </div>
        <div className="nav__right col-lg-3 col-md-3 col-sm-6">
          <div className="nav__right-btns">
            <div className="nav__right-btn">
              <a href='/Cancel'><i className="fa-solid fa-magnifying-glass"></i></a>
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
                {(user) ? user.fullName : ''}
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