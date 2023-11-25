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
import time from '../static/js/time.js'
import { useState, useEffect, useRef } from 'react'


function Home() {

    const allProductSamSung = 'http://localhost:8080/admin/getInformationBrand/2'
    const [samsungList, setSamSungList] = useState([])

    useEffect(() => {
        fetch(allProductSamSung)
            .then(response => response.json())
            .then(data => {
                setSamSungList(data)
            })

    }, [])

    const tm = useRef()
    const [productIphone, setProductIphone] = useState([])
    // useEffect(() => {
    //     fetch("link")
    //         .then(response => response.json())
    //         .then(data => setProductIphone(data))
    // }, [])


    useEffect(() => {


        var fuT = new Date("Jan 12, 2024 00:00:00")
        tm.current = setInterval(() => {

            var noW = new Date().getTime()
            var D = fuT - noW


            var days = Math.floor(D / (1000 * 60 * 60 * 24))
            var hours = Math.floor(D / (1000 * 60 * 60))
            var minutes = Math.floor(D / (1000 * 60))
            var seconds = Math.floor(D / (1000))

            hours %= 24
            minutes %= 60
            seconds %= 60
            if (document.getElementById("hours")) {
                document.getElementById("hours").innerText = hours
                document.getElementById("minutes").innerText = minutes
                document.getElementById("seconds").innerText = seconds
            }





        }, 1000);

        /**------------------------set coundown time sale-----------------------  **/
        home()

        return () => {
            setTimeout(() => {
                clearInterval(tm.current)
            }, 2000);
        }




    }, [])
    const allProductDC = 'http://localhost:8080/admin/getProductsDiscount'
    const [productDCList, setProductDCList] = useState([])
    useEffect(() => {
        fetch(allProductDC)
            .then(response => response.json())
            .then(data => {
                setProductDCList(data)
            })




    }, [])
    const allProduct = 'http://localhost:8080/admin/getInformationBrand/10'
    const [iphoneList, setIphoneList] = useState([])

    useEffect(() => {
        fetch(allProduct)
            .then(response => response.json())
            .then(data => {
                setIphoneList(data)
            })

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
                                <div style={{ color: 'white' }} id='hours' className="hours"><span>55</span></div>
                                <span>:</span>
                                <div style={{ color: 'white' }} id='minutes' className="minutes"><span>55</span></div>
                                <span>:</span>
                                <div style={{ color: 'white' }} id='seconds' className="seconds"><span>55</span></div>
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
                            {productDCList.map((product, index) => (
                                <a href={`/ProductDetail/${product.id}`} key={index} className="product-item">
                                    <img src={iconAdaptor} />
                                    <p className="name-sale">{product.name}</p>
                                    <div className="price">
                                        <p className="price-new">{product.price}</p>
                                        <p className="price-old">{product.priceUpdate}</p>
                                    </div>
                                    <div className="count-product">
                                        <img src={iconFsIconFire} />
                                        <i>10/10</i>
                                    </div>
                                </a>
                            ))}

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
                                {productIphone ? iphoneList.map((iphone, index) => (
                                    <div key={index} className="product-item">
                                        <img src={iconIphone11WhiteThumb} />
                                        <p className="name-product">{iphone.name}</p>
                                        <div className="price">
                                            <p className="price-new">{iphone.price}</p>
                                            <p className="price-old">{iphone.priceUpdate}<span className="discount">-3%</span></p>
                                        </div>
                                    </div>
                                )) : ""}
                                {iphoneList ? iphoneList.map((iphone, index) => {
                                    // Kiểm tra nếu 'images' là một mảng và có ít nhất một phần tử
                                    if (Array.isArray(iphone.images) && iphone.images.length > 0) {
                                        // Tạo một biến để lưu trữ đường dẫn hình ảnh
                                        const imageURL = iphone.images[0].imageUrl;
                                        // Trả về JSX với sử dụng biến imageURL trong thẻ img
                                        return (
                                            <a href={`/ProductDetail/${iphone.id}`} key={index} className="product-item">
                                                <img src={imageURL} alt={iphone.name} />
                                                <p className="name-product">{iphone.name}</p>
                                                <div className="price">
                                                    <p className="price-new">{iphone.price}</p>
                                                    <p className="price-old">{iphone.priceUpdate}<span className="discount">{iphone.percentDiscount}</span></p>
                                                </div>
                                            </a>
                                        );
                                    } else {
                                        // Nếu không có hình ảnh, trả về một thông báo
                                        return (
                                            <div key={index} className="product-item">
                                                <p>No image available</p>
                                                <p className="name-product">{iphone.name}</p>
                                                <div className="price">
                                                    <p className="price-new">{iphone.price}</p>
                                                    <p className="price-old">{iphone.priceUpdate}<span className="discount">{iphone.percentDiscount}</span></p>
                                                </div>
                                            </div>
                                        );
                                    }
                                }) : "No iPhones available."}





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
                                {iphoneList ? iphoneList.map((iphone, index) => (
                                    <div key={index} className="product-item">
                                        <img src={iconIpadAir5Wifi} />
                                        <p className="name-product">{iphone.name}</p>
                                        <div className="price">
                                            <p className="price-new">{iphone.price}</p>
                                            <p className="price-old">{iphone.priceUpdate} <span className="discount">-10%</span></p>
                                        </div>
                                    </div>
                                )) : ""}
                                {samsungList ? samsungList.map((samsung, index) => {
                                    // Kiểm tra nếu 'images' là một mảng và có ít nhất một phần tử
                                    if (Array.isArray(samsung.images) && samsung.images.length > 0) {
                                        // Tạo một biến để lưu trữ đường dẫn hình ảnh
                                        const imageURL = samsung.images[0].imageUrl;
                                        console.log("imageURL:", samsung.images[0].imageUrl);
                                        // Trả về JSX với sử dụng biến imageURL trong thẻ img
                                        return (
                                            <div key={index} className="product-item">
                                                <img src={imageURL} alt={samsung.name} />
                                                <p className="name-product">{samsung.name}</p>
                                                <div className="price">
                                                    <p className="price-new">{samsung.price}</p>
                                                    <p className="price-old">{samsung.priceUpdate}<span className="discount">{samsung.percentDiscount}</span></p>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        // Nếu không có hình ảnh, trả về một thông báo
                                        return (
                                            <div key={index} className="product-item">
                                                <p>No image available</p>
                                                <p className="name-product">{samsung.name}</p>
                                                <div className="price">
                                                    <p className="price-new">{samsung.price}</p>
                                                    <p className="price-old">{samsung.priceUpdate}<span className="discount">{samsung.percentDiscount}</span></p>
                                                </div>
                                            </div>
                                        );
                                    }
                                }) : "No iPhones available."}

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
                                {iphoneList ? iphoneList.map((iphone, index) => (
                                    <div key={index} className="product-item">
                                        <img src={iconMacAir13M1Xam} />
                                        <p className="name-product">{iphone.name}</p>
                                        <div className="price">
                                            <p className="price-new">{iphone.price}</p>
                                            <p className="price-old">{iphone.priceUpdate}<span className="discount">-3%</span></p>
                                        </div>
                                    </div>
                                )) : ""}

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
                                {iphoneList ? iphoneList.map((iphone, index) => (
                                    <div key={index} className="product-item">
                                        <img src={iconAppleWatchS841mmDoThumb} />
                                        <p className="name-product">{iphone.name}</p>
                                        <div className="price">
                                            <p className="price-new">{iphone.price}</p>
                                            <p className="price-old">{iphone.priceUpdate}<span className="discount">-17%</span></p>
                                        </div>
                                    </div>
                                )) : ""}

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
                                {iphoneList ? iphoneList.map((iphone, index) => (
                                    <div key={index} className="product-item">
                                        <img src={iconAirpodsMaxSelecthongThumb} />
                                        <p className="name-product">{iphone.iphone}</p>
                                        <div className="price">
                                            <p className="price-new">{iphone.price}</p>
                                            <p className="price-old">{iphone.priceUpdate}<span className="discount">-10%</span></p>
                                        </div>
                                    </div>
                                )) : ""}

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
