import '../static/css/adminH.css'
import '../static/css/statistical.css'
import logoPhone from '../images/img-model/header__logophone.png'
import exSetProfile from '../images/img-model/ex_setprofile.jpg'
import footerVideo from '../images/img-model/footer__video.mp4'
import faceImage from '../images/image__footer-content/face.png'
import zaloImage from '../images/image__footer-content/zalo.png'
import instarImage from '../images/image__footer-content/instar.png'
import productImage from '../images/image-product-sale/iphone-12-green.webp'


function Statistical() {
  return (
    <div>
      <div class="main">

        <div class="main__header">
          <div class="nav row">
            <div class="nav__lef 
        col-lg-3 col-md-3 col-sm-6">
              <div class="nav__lef-name">
                <span>Mobile</span>
                <span>-</span>
                <span>League</span>
                <span>-</span>
                <span>OTI</span>
              </div>
              <div class="nav__lef-logo">
                <div style={{
                  backgroundImage: `url(${logoPhone})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain'
                }}></div>
              </div>
            </div>
            <div class="nav__center 
        col-lg-6 col-md-6 col-sm-0">
              <a class="nav__center-item nav__center-item--active  fa-fade">REVENUE</a>
              <a class="nav__center-item">PRODUCTS</a>
              <a class="nav__center-item">DISCOUNT</a>
              <a class="nav__center-item">ACCOUNT</a>
            </div>
            <div class="nav__right 
        col-lg-3 col-md-3 col-sm-6">
              <div>
                <div style={{
                  backgroundImage: `url(${exSetProfile})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}></div>
              </div>
              <div class="nav__right-user">User</div>
              <div class="nav__right-admin nav__right--active">Admin</div>
            </div>
          </div>
        </div>

        <div class="main__body row">
          <div class="main__body-left col-lg-6 col-md-6 col-sm-12">


            <div class="body__left-statistical">
              <div class="row">
                <div class="left__statistical-min col-lg-4 col-md-4 col-sm-12">
                  <div class="statistical__min-circle">

                  </div>
                  <div class="statistical__min-revenue">
                    132.259.000đ
                  </div>
                  <div class="statistical__min-text">
                    Min
                  </div>
                  <div class="statistical__min-month">
                    Tháng 12
                  </div>
                </div>
                <div class="left__statistical-revenue col-lg-4 col-md-4 col-sm-12">
                  <select name="" id="" class="statistical__revenue-year">
                    <option value="">Năm 2019</option>
                    <option value="">Năm 2020</option>
                    <option value="">Năm 2021</option>
                    <option value="">Năm 2022</option>
                    <option value="">Năm 2023</option>
                  </select>
                  <div class="statistical__revenue-text--year">
                    <i class="fa-solid fa-piggy-bank fa-shake"></i>
                    <div>Tổng doanh thu trong năm</div>
                    <div class="statistical__revenue-textYear--money">
                      987.546.575đ
                    </div>
                  </div>
                  <div class="statistical__revenue-text--month">
                    <span>Tổng doanh thu trong tháng</span>
                    <select name="" id="" class="statistical__revenue-month">
                      <option value="">T1</option>
                      <option value="">T2</option>
                      <option value="">T3</option>
                      <option value="">T4</option>
                      <option value="">T5</option>
                      <option value="">T6</option>
                      <option value="">T7</option>
                      <option value="">T8</option>
                      <option value="">T9</option>
                      <option value="">T10</option>
                      <option value="">T11</option>
                      <option value="">T12</option>
                    </select>
                    <div class="statistical__revenue-textMonth--money">
                      111.546.575đ
                    </div>
                  </div>
                  <div class="statistical__revenue-text--date">
                    <span>Tổng doanh thu trong ngày</span>
                    <input type="date">
                      <div class="statistical__revenue-textDate--money">
                        23.943.438đ
                      </div>
                  </div>
                </div>
                <div class="left__statistical-max col-lg-4 col-md-4 col-sm-12">
                  <div class="statistical__max-circle">

                  </div>
                  <div class="statistical__max-revenue">
                    999.259.000đ
                  </div>
                  <div class="statistical__max-text">
                    Max
                  </div>
                  <div class="statistical__max-month">
                    Tháng 8
                  </div>
                </div>
              </div>
            </div>

            <div class="body__left-tableOrder-wrap">
              <table class="body__left-tableOrder">
                <tr class="left__tableOrder">
                  <th>Mã đơn</th>
                  <th>Ngày</th>
                  <th>Trạng thái</th>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON1</td>
                  <td>15/12/2012</td>
                  <td>Doing</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON2</td>
                  <td>15/04/2012</td>
                  <td>Setup</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON6</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON6</td>
                  <td>15/12/2012</td>
                  <td>Doing</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON2</td>
                  <td>15/04/2012</td>
                  <td>Setup</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON8</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>

                <tr class="left__tableOrder-item">
                  <td>DON1</td>
                  <td>15/12/2012</td>
                  <td>Doing</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON88</td>
                  <td>15/04/2012</td>
                  <td>Setup</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>

                <tr class="left__tableOrder-item">
                  <td>DON1</td>
                  <td>15/12/2012</td>
                  <td>Doing</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON2</td>
                  <td>15/04/2012</td>
                  <td>Setup</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
              </table>
              <ul class="body__left-tableOrder--listPage">

              </ul>
            </div>

            <div class="body__left-tableProduct-wrap">
              <table class="body__left-tableProduct">
                <tr class="left__tableProduct">
                  <th>Top S.Phẩm bán chạy</th>
                  <th>Top S.Phẩm bán ít</th>
                  <th>Top K.hàng</th>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>P</td>
                  <td>15/12/2012</td>
                  <td>Doing</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON2</td>
                  <td>15/04/2012</td>
                  <td>Setup</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON6</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON6</td>
                  <td>15/12/2012</td>
                  <td>Doing</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON2</td>
                  <td>15/04/2012</td>
                  <td>Setup</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON8</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>

                <tr class="left__tableProduct-item">
                  <td>DON1</td>
                  <td>15/12/2012</td>
                  <td>Doing</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON88</td>
                  <td>15/04/2012</td>
                  <td>Setup</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>

                <tr class="left__tableProduct-item">
                  <td>DON1</td>
                  <td>15/12/2012</td>
                  <td>Doing</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON2</td>
                  <td>15/04/2012</td>
                  <td>Setup</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr class="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
              </table>
              <ul class="body__left-tableProduct--listPage">

              </ul>
            </div>
          </div>

          <div class="main__body-right col-lg-6 col-md-6 col-sm-12">

            <div class="body__right-order">
              <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-8 row">
                  <div class="col-lg-3 col-md-3 col-sm-6"><div>152 đơn</div></div>
                  <div class="col-lg-3 col-md-3 col-sm-6"><div>152 đơn</div></div>
                  <div class="col-lg-3 col-md-3 col-sm-6"><div>152 đơn</div></div>
                  <div class="col-lg-3 col-md-3 col-sm-6"><div>152 đơn</div></div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4">
                  <div>Đơn trong ngày</div>
                  <input type="date">
                    <ul class="right__order-state">
                      <li><i class="fa-solid fa-circle"></i>Đang giao</li>
                      <li><i class="fa-solid fa-circle"></i>Chuẩn bị hàng</li>
                      <li><i class="fa-solid fa-circle"></i>Đã giao</li>
                      <li><i class="fa-solid fa-circle"></i>Đơn hủy</li>
                    </ul>
                </div>

              </div>
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="right__order-title">Tra cứu mã đơn</div>
                  <div class="right__order-search">
                    <input type="text" class="right__order-search--ipt" placeholder="Nhập mã đơn hàng...">
                      <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
              </div>
              <div class="row right__order-control row">
                <div class="col-lg-5 col-md-5 col-sm-5">
                  <div class="row right__order-searchID">
                    <div class="col-lg-4 col-md-4 col-sm-4">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8">
                      <div>Trạng thái<i class="fa-solid fa-circle"></i></div>
                      <div>Mã: <span>VD1</span></div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7 col-md-7 col-sm-7 row">
                  <div class="col-lg-3 col-md-3 col-sm-6"><div class="right__order-item--done"></div></div>
                  <div class="col-lg-3 col-md-3 col-sm-6"><div class="right__order-item--setup"><i class="fa-solid fa-circle-check"></i></div></div>
                  <div class="col-lg-3 col-md-3 col-sm-6"><div class="right__order-item--doing"></div></div>
                  <div class="col-lg-3 col-md-3 col-sm-6"><div class="right__order-item--cancel"></div></div>
                </div>
              </div>
            </div>

            <div class="body__right-orderDetail">


              <div class="right__orderDetail-header">
                Chi tiết đơn hàng <i class="fa-solid fa-money-bill fa-spin"></i>
              </div>


              <div class="right__orderDetail-body">
                <div>Mã: VD1</div>
                <div>ID khách hàng: US1</div>
                <div>Trạng thái: Đã giao</div>
                <div>Ngày: 15/12/2012</div>
                <div>Giá tiền: 4.923.254đ</div>
              </div>


              <div class="right__orderDetail-footer row">
                <div class="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div class="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div class="orderDetail__item-quantity">x<span>2</span></div>
                  <div class="orderDetail__item-price">2.265.542đ</div>
                  <div class="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>
                <div class="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div class="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div class="orderDetail__item-quantity">x<span>2</span></div>
                  <div class="orderDetail__item-price">2.265.542đ</div>
                  <div class="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>
                <div class="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div class="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div class="orderDetail__item-quantity">x<span>2</span></div>
                  <div class="orderDetail__item-price">2.265.542đ</div>
                  <div class="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>
                <div class="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div class="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div class="orderDetail__item-quantity">x<span>2</span></div>
                  <div class="orderDetail__item-price">2.265.542đ</div>
                  <div class="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>
                <div class="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div class="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div class="orderDetail__item-quantity">x<span>2</span></div>
                  <div class="orderDetail__item-price">2.265.542đ</div>
                  <div class="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>
                <div class="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div class="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div class="orderDetail__item-quantity">x<span>2</span></div>
                  <div class="orderDetail__item-price">2.265.542đ</div>
                  <div class="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>
                <div class="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div class="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div class="orderDetail__item-quantity">x<span>2</span></div>
                  <div class="orderDetail__item-price">2.265.542đ</div>
                  <div class="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>
                <div class="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div class="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div class="orderDetail__item-quantity">x<span>2</span></div>
                  <div class="orderDetail__item-price">2.265.542đ</div>
                  <div class="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>
                <div class="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div class="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div class="orderDetail__item-quantity">x<span>2</span></div>
                  <div class="orderDetail__item-price">2.265.542đ</div>
                  <div class="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>


              </div>

            </div>

          </div>
        </div>


        <div class="main__footer">
          <div class="main__footer-introduce">
            <video src={footerVideo}
              autoplay loop></video>
            <div class="footer__introduce-logo fa-shake"
              style={{
                backgroundImage: `url(${logoPhone})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
              }}></div>
            <div class="footer__introduce-name">
              <span>Mobile</span>
              <span>-</span>
              <span>League</span>
              <span>-</span>
              <span>OTI</span>
            </div>
            <div class="footer__introduce-content">
              Tại <span>Mobile</span>
              <span>-</span>
              <span>League</span>
              <span>-</span>
              <span>OTI</span>, khách hàng yêu mến hệ sinh thái mobile
              sẽ tìm thấy đầy đủ <br> và đa dạng nhất các sản phẩm như Iphone, Xi
                aomi, Oppo, Samsung hay Huawei...với <br> không gian mua sắm đẳng cấ
                  p, hiện đại.
                </div>
            </div>
          </div>
          <div class="main__footer-policy row">
            <div class="footer__policy-item
        footer__policy-item--check
        col-lg-3 col-md-3 col-sm-6">
              <i class="fa-solid fa-circle-check"></i>
              <div class="policy__item-content">
                Mẫu mã đa dạng, chính hãng
              </div>
            </div>
            <div class="footer__policy-item 
        footer__policy-item--ship 
        col-lg-3 col-md-3 col-sm-6">
              <i class="fa-solid fa-truck"></i>
              <div class="policy__item-content">
                Giao hàng toàn quốc
              </div>
            </div>
            <div class="footer__policy-item
        footer__policy-item--protect
        col-lg-3 col-md-3 col-sm-6">
              <i class="fa-solid fa-shield-cat"></i>
              <div class="policy__item-content">
                Bảo hành cam kết, uy tín
              </div>
            </div>
            <div class="footer__policy-item 
        footer__policy-item--return
        col-lg-3 col-md-3 col-sm-6">
              <i class="fa-solid fa-arrow-rotate-left"></i>
              <div class="policy__item-content">
                Có thể đổi trả lại
              </div>
            </div>
          </div>
          <div class="main__footer-content">
            <div class="footer__content-header">
              <div class="content__header-name">
                <span>Mobile</span>
                <span>-</span>
                <span>League</span>
                <span>-</span>
                <span>OTI</span>
              </div>
              <div class="content__header-logo"
                style={{
                  backgroundImage: `url(${logoPhone})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain'
                }}></div>
            </div>
            <div class="footer__content-body row">
              <div class="content__body-item
          col-lg-3 col-md-3 col-sm-6">
                <div>Tổng đài</div>
                <div>Mua hàng: 032545674</div>
                <div>CSKH: 0325456574</div>
                <div>Kết nối với chúng tôi</div>
                <div class="row">
                  <div class="col-lg-2 col-md-2 col-sm-2">
                    <div style={{
                      backgroundImage: `url(${faceImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2">
                    <div style={{
                      backgroundImage: `url(${zaloImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2">
                    <div style={{
                      backgroundImage: `url(${instarImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  </div>
                </div>
              </div>
              <div class="content__body-item 
          col-lg-3 col-md-3 col-sm-6">
                <div>Hệ thống cửa hàng</div>
                <div>Xem vị trí cửa hàng</div>
                <div>Nội quy cửa hàng</div>
                <div>Chất lượng phục vụ</div>
                <div>Chính sách bảo hành & đổi trả</div>
              </div>
              <div class="content__body-item 
          col-lg-3 col-md-3 col-sm-6">
                <div>Hỗ trợ khách hàng</div>
                <div>Điều kiện giao dịch chung</div>
                <div>Hướng dẫn mua hàng online</div>
                <div>Chính sách giao hàng</div>
                <div>Hướng dẫn thanh toán</div>
              </div>
              <div class="content__body-item 
          col-lg-3 col-md-3 col-sm-6">
                <div>Trung tâm bảo hành</div>
                <div>
                  <span>Mobile</span>
                  <span>-</span>
                  <span>League</span>
                  <span>-</span>
                  <span>OTI</span>
                </div>
              </div>
            </div>
            <div class="footer__content-footer">
              © 2023. Công ty cổ phần Mobile-League-OTI. <br>
                Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP. Hồ Chí Minh. <br>
                  Điện thoại: 032.545.6574. <br>
                    Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. <br>
                    </div>
                  </div>
                </div>
            </div>
            <script src="./js/statistical.js"></script>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Statistical