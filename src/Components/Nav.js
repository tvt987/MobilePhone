import '../static/css/nav.css'
import logoPhone from '../static/images/img-model/header__logophone.png'
import logoUser from '../static/images/img-model/user.svg'
import { Link } from 'react-router-dom';
function Nav() {

  return (
    <div className="main__header">
      <div className="nav row">
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
          <a className="nav__center-item nav__center-item--active fa-fade">IPHONE</a>
          <Link to='/oppo' className="nav__center-item">OPPO</Link>
          <Link to='/' className="nav__center-item">XIAOMI</Link>
          <Link to='/' className="nav__center-item">HUAWEI</Link>
        </div>
        <div className="nav__right col-lg-3 col-md-3 col-sm-6">
          <div className="nav__right-btns">
            <div className="nav__right-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
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
          <div className="nav__right-control js-control js-model-login">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
          
        </div>
      </div>
      <script type="module" src="../static/js/home.js"></script>
    </div>
  );
}

export default Nav