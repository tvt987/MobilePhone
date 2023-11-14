import { useEffect } from 'react'
import Nav from '../Components/Nav.js'
import Footer from '../Components/Footer.js'
import Model from '../Components/Model.js'
import logoProfile from '../static/images/img-model/ex_setprofile.jpg'
import "../static/css/style.css"
import "../static/css/home.css"
import '../static/css/slide.css'
import imgSlider1 from "../static/images/image-slide/img-slide1.webp"
import imgSlider2 from "../static/images/image-slide/img-slide2.webp"
import imgSlider3 from "../static/images/image-slide/img-slide3.webp"
import imgSlider4 from "../static/images/image-slide/img-slide4.webp"
import iconFs from '../static/images/image-sale/icon-fs.png'
import iconIphone11Black from '../static/images/image-product-sale/iphone-11-black.webp'
import iconFsIconFire from '../static/images/image-sale/fs-iconfire.webp'
import iconAdaptor from '../static/images/image-product-sale/Adapter.webp'
import iconAirpods3 from '../static/images/image-product-sale/airpods-3.webp'
import iconIphone11Sale from '../static/images/image-product-sale/apple-watch-se.webp'
import iconAppleWatchSe from '../static/images/image-product-sale/apple-watch-se.webp'
import iconIphone12Green from '../static/images/image-product-sale/iphone-12-green.webp'
import iconIphone12Sale from '../static/images/image-product-sale/iphone-12-sale.webp'
import iconIphone14ProMaxPurple from '../static/images/image-product-sale/iphone-14-pro-max-purple.webp'
import iconMouse from '../static/images/image-product-sale/mouse.webp'
import iconOpLung from '../static/images/image-product-sale/op-lung.webp'
import iconIPDesktop from '../static/images/image-categories/IP_Desktop.webp'
import iconMacDesktop from '../static/images/image-categories/Mac_Desktop.webp'
import iconIpadDestop from '../static/images/image-categories/IPad_Desktop.webp'
import iconWatchDesktop from '../static/images/image-categories/Watch_Desktop.webp'
import iconAmThanhDesktop from '../static/images/image-categories/Amthanh_Desktop.webp'
import iconPKDesktop from '../static/images/image-categories/PK_Desktop.webp'
import iconIphone11WhiteThumb from '../static/images/img-iphone/iphone-11-white-thumbtz-650x650.webp'
import iconIphone13BlueThumb from '../static/images/img-iphone/iphone-13-blue-thumbtz-650x650.webp'
import iconIphone14ProGoldThumb from '../static/images/img-iphone/iphone-14-pro-gold-thumbtz-650x650.webp'
import iconIpadAir5Wifi from '../static/images/img-ipad/ipad-air-5-wifi-startlight-label-650x650.webp'
import iconIpadGen10SliverThumb from '../static/images/img-ipad/iPad-gen-10-sliver-thumbtz-650x650.webp'
import iconIpadGen0SliverLabel from '../static/images/img-ipad/ipad-gen-9-silver-label-650x650.webp'
import iconIpadProM211SliverThumb from '../static/images/img-ipad/iPad-Pro-M2-11-sliver-thumb-label-650x650.webp'
import iconMacAir13M1Xam from '../static/images/img-mac/mac-air-13-m1-xam-650x650.webp'
import iconMacAir13M2Bac from '../static/images/img-mac/mac-air-13-m2-bac-650x650.webp'
import iconMacAir15M2Xam from '../static/images/img-mac/mac-air-15-m2-xam-650x650.webp'
import iconMacPro13M2Bac from '../static/images/img-mac/mac-pro-13-m2-bac-650x650.webp'
import iconAppleWatchS841mmDoThumb from '../static/images/img-watch/apple-watch-s8-41mm-do-thumb-1-650x650.webp'
import iconAppleWatchS8Gps45mmWhiteThumb from '../static/images/img-watch/apple-watch-s8-gps-45mm-white-thumbtz-1-650x650.webp'
import iconAppleWatchS8UltraCaoSuVang from '../static/images/img-watch/apple-watch-s8-ultra-cao-su-vang-thumbtz-1-1-650x650.webp'
import iconAppleWatchSe2022Thumb from '../static/images/img-watch/apple-watch-se-2022-gps-40mm-thumbtz-2-650x650.webp'
import iconAppleWatchSe2022Gps from '../static/images/img-watch/apple-watch-se-2022-gps-40mm-thumbtz-2-650x650.webp'
import iconAirpodsMaxSelecthongThumb from '../static/images/img-amthanh/airpods-max-select-hong-thumb-10-650x650.webp'
import iconBeatStudioBudsTrangThumb from '../static/images/img-amthanh/beats-studio-buds-trang-thumb-650x650.webp'
import iconBluetoothAirpodsProMagsafe from '../static/images/img-amthanh/bluetooth-airpods-pro-magsafe-charge-apple-mlwk3-tkm-650x650.webp'

import home from '../static/js/home.js'
import { useRef } from 'react'


function Home() {
    let conutdown = useRef()
    
    useEffect(() => {
        /**------------------------set coundown time sale-----------------------  **/

let countDownDate = new Date("Nov 5, 2023 15:37:25").getTime();
conutdown.current = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  document.querySelector('.count-down .countdown-time .hours span').innerHTML = hours;
  document.querySelector('.count-down .countdown-time .minutes span').innerHTML = minutes;
  document.querySelector('.count-down .countdown-time .seconds span').innerHTML = seconds;
  if (distance < 0) {
    clearInterval();
  }

}, 1000);

        home()
        return(
            clearInterval(conutdown.current)
            )
    }, [])
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide mb-2" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={imgSlider1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={imgSlider2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={imgSlider3} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={imgSlider4} alt="four slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="container">
                <div className="container-sale mt-2 mb-2">
                    <div className="time-sale">
                        <div className="image-sale">
                            <img src={iconFs} />
                        </div>
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
                        <div className="happenning">
                            <span style={{ display: 'block', paddingBottom: '10px' }}> Đang diễn ra</span>
                            <span className="timeline">08:00 - 23:59</span>
                        </div>
                        <div className="comming">
                            <span style={{ display: 'block', paddingBottom: '10px' }}> Ngày mai</span>
                            <span className="timeline">08:00 - 23:59</span>
                        </div>
                    </div>
                    <div id="slider">
                        <button id="prev-product" className="btn-slide-product">
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <div className="product-sale">
                            <div className="product-item">
                                <img src={iconIphone11Black} />
                                <p className="name-sale">Iphone 11 128GB</p>
                                <div className="price">
                                    <p className="price-new">11.790.000₫</p>
                                    <p className="price-old">13.790.000₫</p>
                                </div>
                                <div className="count-product">
                                    <img src={iconFsIconFire} />
                                    <i>10/10</i>
                                </div>
                            </div>
                            <div className="product-item">
                                <img src={iconAdaptor} />
                                <p className="name-sale">Adapter</p>
                                <div className="price">
                                    <p className="price-new">315.000₫</p>
<p className="price-old">450.000₫</p>
                                </div>
                                <div className="count-product">
                                    <img src={iconFsIconFire} />
                                    <i>10/10</i>
                                </div>
                            </div>
                            <div className="product-item">
                                <img src={iconAirpods3} />
                                <p className="name-sale">Airpods-3</p>
                                <div className="price">
                                    <p className="price-new">4.190.000₫</p>
                                    <p className="price-old">4.490.000₫</p>
                                </div>
                                <div className="count-product">
                                    <img src={iconFsIconFire} />
                                    <i>10/10</i>
                                </div>
                            </div>
                            <div className="product-item">
                                <img src={iconAppleWatchSe} />
                                <p className="name-sale">Apple-watch-se</p>
                                <div className="price">
                                    <p className="price-new">6.090.000₫</p>
                                    <p className="price-old">7.790.000₫</p>
                                </div>
                                <div className="count-product">
                                    <img src={iconFsIconFire} />
                                    <i>10/10</i>
                                </div>
                            </div>
                            <div className="product-item">
                                <img src={iconAppleWatchSe} />
                                <p className="name-sale">Apple-watch-se</p>
                                <div className="price">
                                    <p className="price-new">6.090.000₫</p>
                                    <p className="price-old">7.790.000₫</p>
                                </div>
                                <div className="count-product">
                                    <img src={iconFsIconFire} />
                                    <i>10/10</i>
                                </div>
                            </div>
                            <div className="product-item">
                                <img src={iconIphone12Green} />
                                <p className="name-sale">Iphone 12</p>
                                <div className="price">
                                    <p className="price-new">11.490.000₫</p>
                                    <p className="price-old">18.990.000₫</p>
                                </div>
                                <div className="count-product">
                                    <img src={iconFsIconFire} />
<i>10/10</i>
                                </div>
                            </div>
                            <div className="product-item">
                                <img src={iconIphone12Sale} />
                                <p className="name-sale">Iphone 12 64GB</p>
                                <div className="price">
                                    <p className="price-new">13.490.000₫</p>
                                    <p className="price-old">16.090.000₫</p>
                                </div>
                                <div className="count-product">
                                    <img src={iconFsIconFire} />
                                    <i>10/10</i>
                                </div>
                            </div>
                            <div className="product-item">
                                <img src={iconIphone14ProMaxPurple} />
                                <p className="name-sale">Iphone 14 Pro Max 128GB</p>
                                <div className="price">
                                    <p className="price-new">25.990.000₫</p>
                                    <p className="price-old">26.690.000₫</p>
                                </div>
                                <div className="count-product">
                                    <img src={iconFsIconFire} />
                                    <i>10/10</i>
                                </div>
                            </div>
                            <div className="product-item">
                                <img src={iconMouse} />
                                <p className="name-sale">Mouse</p>
                                <div className="price">
                                    <p className="price-new">1.640.000₫</p>
                                    <p className="price-old">2.690.000₫</p>
                                </div>
                                <div className="count-product">
                                    <img src={iconFsIconFire} />
                                    <i>10/10</i>
                                </div>
                            </div>
                            <div className="product-item">
                                <img src={iconOpLung} />
                                <p className="name-sale">Ốp Lưng</p>
                                <div className="price">
                                    <p className="price-new">635.000₫</p>
                                    <p className="price-old">1.790.000₫</p>
                                </div>
                                <div className="count-product">
                                    <img src={iconFsIconFire} />
                                    <i>10/10</i>
                                </div>
                            </div>
                        </div>
                        <button id="next-product" className="btn-slide-product">
<i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                <section className="categories mt-2 mb-2">
                    <div className="category-item">
                        <img src={iconIPDesktop} />
                        <span>Iphone</span>
                    </div>
                    <div className="category-item">
                        <img src={iconMacDesktop} />
                        <span>Mac</span>
                    </div>
                    <div className="category-item">
                        <img src={iconIpadDestop} />
                        <span>Ipad</span>
                    </div>
                    <div className="category-item">
                        <img src={iconWatchDesktop} />
                        <span>Watch</span>
                    </div>
                    <div className="category-item">
                        <img src={iconAmThanhDesktop} />
                        <span>Âm thanh</span>
                    </div>
                    <div className="category-item">
                        <img src={iconPKDesktop} />
                        <span>Phụ kiện</span>
                    </div>
                </section>
                <div className="warpper-box-container">
                    <div className="container-iphone mt-2 mb-2">
                        <div className="head-product-iphone">
                            <h2><i className="fab fa-apple"></i>Iphone</h2>
                        </div>
                        <div id="slider-iphone">
                            <button id="prev-iphone" className="btn-slide-product">
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <div className="product-iphone">
                                <div className="product-item">
                                    <img src={iconIphone11WhiteThumb} />
                                    <p className="name-product">Iphone 11 64GB</p>
                                    <div className="price">
                                        <p className="price-new">10.190.000₫</p>
                                        <p className="price-old">11.590.000₫ <span className="discount">-3%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconIphone13BlueThumb} />
                                    <p className="name-product">Iphone 13 128GB</p>
                                    <div className="price">
                                        <p className="price-new">16.490.000₫</p>
                                        <p className="price-old">18.790.000₫ <span className="discount">-3%</span></p>
                                    </div>
                                </div>
<div className="product-item">
                                    <img src={iconIphone14ProGoldThumb} />
                                    <p className="name-product">Iphone 14 Pro 128GB</p>
                                    <div className="price">
                                        <p className="price-new">23.790.000₫</p>
                                        <p className="price-old">27.590.000₫ <span className="discount">-3%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconIphone13BlueThumb} />
                                    <p className="name-product">Iphone 15 128GB</p>
                                    <div className="price">
                                        <p className="price-new">20.490.000₫</p>
                                        <p className="price-old">30.790.000₫ <span className="discount">-3%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconIphone11WhiteThumb} />
                                    <p className="name-product">Iphone 11 64GB</p>
                                    <div className="price">
                                        <p className="price-new">10.190.000₫</p>
                                        <p className="price-old">11.590.000₫ <span className="discount">-3%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconIphone14ProGoldThumb} />
                                    <p className="name-product">Iphone 14 Pro 128GB</p>
                                    <div className="price">
                                        <p className="price-new">23.790.000₫</p>
                                        <p className="price-old">27.590.000₫ <span className="discount">-3%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconIphone14ProGoldThumb} />
                                    <p className="name-product">Iphone 14 Pro 128GB</p>
                                    <div className="price">
                                        <p className="price-new">23.790.000₫</p>
                                        <p className="price-old">27.590.000₫ <span className="discount">-3%</span></p>
                                    </div>
                                </div>
                            </div>
                            <button id="next-iphone" className="btn-slide-product">
                                <i className="fas fa-chevron-right"></i>
</button>
                        </div>
                    </div>
                    <div className="container-ipad mt-2 mb-2">
                        <div className="head-product-ipad">
                            <h2><i className="fab fa-apple"></i>Ipad</h2>
                        </div>
                        <div id="slider-ipad">
                            <button id="prev-ipad" className="btn-slide-product">
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <div className="product-ipad">
                                <div className="product-item">
                                    <img src={iconIpadAir5Wifi} />
                                    <p className="name-product">iPad 9 64GB</p>
                                    <div className="price">
                                        <p className="price-new">7.490.000₫</p>
                                        <p className="price-old">8.390.000₫ <span className="discount">-10%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconIpadGen10SliverThumb} />
                                    <p className="name-product">iPad 10 64GB</p>
                                    <div className="price">
                                        <p className="price-new">11.290.000₫</p>
                                        <p className="price-old">11.390.000₫</p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconIpadGen0SliverLabel} />
                                    <p className="name-product">iPad Pro M2 128GB</p>
                                    <div className="price">
                                        <p className="price-new">20.490.000₫</p>
                                        <p className="price-old">20.990.000₫ <span className="discount">-2%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconIpadProM211SliverThumb} />
                                    <p className="name-product">iPad Air 5 64GB</p>
                                    <div className="price">
                                        <p className="price-new">14.390.000₫</p>
                                        <p className="price-old">15.390.000₫ <span className="discount">-6%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconIpadGen10SliverThumb} />
<p className="name-product">iPad 10 64GB</p>
                                    <div className="price">
                                        <p className="price-new">11.290.000₫</p>
                                        <p className="price-old">11.390.000₫</p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconIpadGen0SliverLabel} />
                                    <p className="name-product">iPad Pro M2 128GB</p>
                                    <div className="price">
                                        <p className="price-new">20.490.000₫</p>
                                        <p className="price-old">20.990.000₫ <span className="discount">-2%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconIpadGen10SliverThumb} />
                                    <p className="name-product">iPad 10 64GB</p>
                                    <div className="price">
                                        <p className="price-new">11.290.000₫</p>
                                        <p className="price-old">11.390.000₫</p>
                                    </div>
                                </div>
                            </div>
                            <button id="next-ipad" className="btn-slide-product">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="container-mac mt-2 mb-2">
                        <div className="head-product-mac">
                            <h2><i className="fab fa-apple"></i>Mac</h2>
                        </div>
                        <div id="slider-mac">
                            <button id="prev-mac" className="btn-slide-product">
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <div className="product-mac">
                                <div className="product-item">
                                    <img src={iconMacAir13M1Xam} />
                                    <p className="name-product">MacBook Air M1</p>
                                    <div className="price">
                                        <p className="price-new">19.190.000₫</p>
                                        <p className="price-old">19.590.000₫ <span className="discount">-3%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconMacAir13M2Bac} />
<p className="name-product">MacBook Air M2</p>
                                    <div className="price">
                                        <p className="price-new">26.790.000₫</p>
                                        <p className="price-old">27.090.000₫ <span className="discount">-3%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconMacAir15M2Xam} />
                                    <p className="name-product">MacBook Air M3</p>
                                    <div className="price">
                                        <p className="price-new">29.990.000₫</p>
                                        <p className="price-old">30.490.000₫ <span className="discount">-3%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconMacPro13M2Bac} />
                                    <p className="name-product">MacBook Air M4</p>
                                    <div className="price">
                                        <p className="price-new">31.490.000₫</p>
                                        <p className="price-old">32.290.000₫<span className="discount">-3%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconMacAir13M1Xam} />
                                    <p className="name-product">MacBook Air M1</p>
                                    <div className="price">
                                        <p className="price-new">19.190.000₫</p>
                                        <p className="price-old">19.590.000₫ <span className="discount">-3%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconMacAir13M2Bac} />
                                    <p className="name-product">MacBook Air M2</p>
                                    <div className="price">
                                        <p className="price-new">26.790.000₫</p>
                                        <p className="price-old">27.090.000₫ <span className="discount">-3%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconMacAir15M2Xam} />
                                    <p className="name-product">MacBook Air M3</p>
                                    <div className="price">
                                        <p className="price-new">29.990.000₫</p>
<p className="price-old">30.490.000₫ <span className="discount">-3%</span></p>
                                    </div>
                                </div>
                            </div>
                            <button id="next-mac" className="btn-slide-product">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="container-watch mt-2 mb-2">
                        <div className="head-product-watch">
                            <h2><i className="fab fa-apple"></i>Watch</h2>
                        </div>
                        <div id="slider-watch">
                            <button id="prev-watch" className="btn-slide-product">
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <div className="product-watch">
                                <div className="product-item">
                                    <img src={iconAppleWatchS841mmDoThumb} />
                                    <p className="name-product">AW SE 2022 GPS 40mm</p>
                                    <div className="price">
                                        <p className="price-new">6.990.000₫</p>
                                        <p className="price-old">8.490.000₫ <span className="discount">-17%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconAppleWatchS8Gps45mmWhiteThumb} />
                                    <p className="name-product">AW Series 8 GPS 41mm</p>
                                    <div className="price">
                                        <p className="price-new">8.990.000₫</p>
                                        <p className="price-old">11.990.000₫ <span className="discount">-25%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconAppleWatchS8UltraCaoSuVang} />
                                    <p className="name-product">AW Ultra GPS</p>
                                    <div className="price">
                                        <p className="price-new">19.990.000₫</p>
                                        <p className="price-old">23.990.000₫ <span className="discount">-16%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={{ iconAppleWatchSe2022Thumb }} />
                                    <p className="name-product">AW Series 8 GPS 45mm</p>
                                    <div className="price">
<p className="price-new">10.190.000₫</p>
                                        <p className="price-old">12.990.000₫ <span className="discount">-21%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconAppleWatchS8Gps45mmWhiteThumb} />
                                    <p className="name-product">AW Series 8 GPS 41mm</p>
                                    <div className="price">
                                        <p className="price-new">8.990.000₫</p>
                                        <p className="price-old">11.990.000₫ <span className="discount">-25%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconAppleWatchS8UltraCaoSuVang} />
                                    <p className="name-product">AW Ultra GPS</p>
                                    <div className="price">
                                        <p className="price-new">19.990.000₫</p>
                                        <p className="price-old">23.990.000₫ <span className="discount">-16%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconAppleWatchSe2022Gps} />
                                    <p className="name-product">AW Series 8 GPS 45mm</p>
                                    <div className="price">
                                        <p className="price-new">10.190.000₫</p>
                                        <p className="price-old">12.990.000₫ <span className="discount">-21%</span></p>
                                    </div>
                                </div>
                            </div>
                            <button id="next-watch" className="btn-slide-product">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="container-at mt-2 mb-2">
                        <div className="head-product-at">
                            <h2>Âm Thanh</h2>
                        </div>

                        <div id="slider-at">
                            <button id="prev-at" className="btn-slide-product">
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <div className="product-at">
                                <div className="product-item">
                                    <img src={iconAirpodsMaxSelecthongThumb} />
                                    <p className="name-product">AirPods Max</p>
<div className="price">
                                        <p className="price-new">12.490.000₫</p>
                                        <p className="price-old">13.990.000₫<span className="discount">-10%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconBeatStudioBudsTrangThumb} />
                                    <p className="name-product">WB Studio Buds</p>
                                    <div className="price">
                                        <p className="price-new">3.190.000₫</p>
                                        <p className="price-old">3.990.000₫<span className="discount">-20%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconBluetoothAirpodsProMagsafe} />
                                    <p className="name-product">Hộp sạc MagSafe</p>
                                    <div className="price">
                                        <p className="price-new">4.990.000₫</p>
                                        <p className="price-old">6.790.000₫ <span className="discount">-26%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconBeatStudioBudsTrangThumb} />
                                    <p className="name-product">WB Studio Buds</p>
                                    <div className="price">
                                        <p className="price-new">3.190.000₫</p>
                                        <p className="price-old">3.990.000₫<span className="discount">-20%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconBeatStudioBudsTrangThumb} />
                                    <p className="name-product">WB Studio Buds</p>
                                    <div className="price">
                                        <p className="price-new">3.190.000₫</p>
                                        <p className="price-old">3.990.000₫<span className="discount">-20%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconBeatStudioBudsTrangThumb} />
                                    <p className="name-product">WB Studio Buds</p>
                                    <div className="price">
                                        <p className="price-new">3.190.000₫</p>
<p className="price-old">3.990.000₫<span className="discount">-20%</span></p>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <img src={iconAirpodsMaxSelecthongThumb} />
                                    <p className="name-product">AirPods Max</p>
                                    <div className="price">
                                        <p className="price-new">12.490.000₫</p>
                                        <p className="price-old">13.990.000₫<span className="discount">-10%</span></p>
                                    </div>
                                </div>
                            </div>
                            <button id="next-at" className="btn-slide-product">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home
