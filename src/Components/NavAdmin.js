import headerLogoPhone from "../static/images/img-model/header__logophone.png"
import exSetProfile from "../static/images/img-model/ex_setprofile.jpg";

function NavAdmin(){
  

    return (
        <div>
            <div className="main__header">
          <div className="nav row">
            <div className="nav__lef 
        col-lg-3 col-md-3 col-sm-6">
              <div className="nav__lef-name">
                <span>ONLINE</span>
                <span>-</span>
                <span>MOBILE</span>
                <span>-</span>
                <span>STORE</span>
              </div>
              <div className="nav__lef-logo">
                <div
                  style={{
                    backgroundImage: `url(${headerLogoPhone})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain'
                  }}></div>
              </div>
            </div>
            <div className="nav__center 
        col-lg-6 col-md-6 col-sm-0">
              <a className="nav__center-item nav__center-item--active  fa-fade">REVENUE</a>
              <a className="nav__center-item">PRODUCTS</a>
              <a className="nav__center-item">DISCOUNT</a>
              <a className="nav__center-item">ACCOUNT</a>
            </div>
            <div className="nav__right 
        col-lg-3 col-md-3 col-sm-6">
              <div>
                <div style={{
                  backgroundImage: `url(${exSetProfile})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}></div>
              </div>
              <div className="nav__right-user">User</div>
              <div className="nav__right-admin nav__right--active">Admin</div>
            </div>
          </div>
            </div>
        </div>
    )
}

export default NavAdmin