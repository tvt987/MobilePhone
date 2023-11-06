import '../static/css/style.css'
import '../static/css/category.css'
import image1 from '../images/image-slide/img-slide3.webp'
import image2 from '../images/image-slide/img-slide4.webp'
import image3 from '../images/img-iphone/iphone-11-white-thumbtz-650x650.webp'
import happyIcon from '../images/icon/icon-happy.png'
import badIcon from '../images/icon/icon-bad.png'
function Category() {
    return (
        <div>
            <div class="container ">
                <div class="category-title mt-4 d-flex justify-content-center">
                    <h3 class="text-white "><i class="fab fa-apple"></i>IPhone</h3>
                </div>
                <div id="carouselExampleInterval" class="carousel slide mt-md-4 mb-md-4 " data-ride="carousel">
                    <div class="carousel-inner" style="border-radius: 30px;">
                        <div class="carousel-item active" data-interval="10000">
                            <img src={image1} className="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item" data-interval="2000">
                            <img src={image2} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </button>
                </div>
                <div class="ft-cate mb-md-4 ">
                    <a href="/iphone" data-id="0" class="active">
                        Tất cả
                    </a>
                    <a href="/iphone-15" data-id="271594" class="">
                        iPhone 15
                    </a>
                    <a href="/iphone-14" data-id="244884" class="">
                        iPhone 14
                    </a>
                    <a href="/iphone-13" data-id="199759" class="">
                        iPhone 13
                    </a>
                    <a href="/iphone-12" data-id="199758" class="">
                        iPhone 12
                    </a>
                    <a href="/iphone-11" data-id="199757" class="">
                        iPhone 11
                    </a>
                </div>
                <div class="products mt-md-4 mb-md-4" style="margin-top: 5px;">
                    <div class="item-product">
                        <img src={image3} alt="">
                            <ul class="prods-group">
                                <li class="merge__item item">256GB</li>
                                <li class="merge__item item">512GB</li>
                                <li class="merge__item item">1TB</li>
                            </ul>
                            <div class="prods-info">
                                <p class="name-prods">IPhone 12</p>
                                <div class="price">
                                    <span class="price-new">34.990.000₫</span>
                                    <span class="discount">24.790.000₫</span>
                                    <span class="percent">-3%</span>
                                </div>
                            </div>
                            <p class="notification">Online giá rẻ</p>
                    </div>
                    <div class="item-product">
                        <img src={image3} alt="">
                            <ul class="prods-group">
                                <li class="merge__item item">256GB</li>
                                <li class="merge__item item">512GB</li>
                                <li class="merge__item item">1TB</li>
                            </ul>
                            <div class="prods-info">
                                <p class="name-prods">IPhone 12</p>
                                <div class="price">
                                    <span class="price-new">34.990.000₫</span>
                                    <span class="discount">24.790.000₫</span>
                                    <span class="percent">-3%</span>
                                </div>
                            </div>
                            <p class="notification">Online giá rẻ</p>
                    </div>
                    <div class="item-product">
                        <img src={image3} alt="">
                            <ul class="prods-group">
                                <li class="merge__item item">256GB</li>
                                <li class="merge__item item">512GB</li>
                                <li class="merge__item item">1TB</li>
                            </ul>
                            <div class="prods-info">
                                <p class="name-prods">IPhone 12</p>
                                <div class="price">
                                    <span class="price-new">34.990.000₫</span>
                                    <span class="discount">24.790.000₫</span>
                                    <span class="percent">-3%</span>
                                </div>
                            </div>
                            <p class="notification">Online giá rẻ</p>
                    </div>
                    <div class="item-product">
                        <img src={image3} alt="">
                            <ul class="prods-group">
                                <li class="merge__item item">256GB</li>
                                <li class="merge__item item">512GB</li>
                                <li class="merge__item item">1TB</li>
                            </ul>
                            <div class="prods-info">
                                <p class="name-prods">IPhone 12</p>
                                <div class="price">
                                    <span class="price-new">34.990.000₫</span>
                                    <span class="discount">24.790.000₫</span>
                                    <span class="percent">-3%</span>
                                </div>
                            </div>
                            <p class="notification">Online giá rẻ</p>
                    </div>
                    <div class="item-product">
                        <img src={image3} alt="">
                            <ul class="prods-group">
                                <li class="merge__item item">256GB</li>
                                <li class="merge__item item">512GB</li>
                                <li class="merge__item item">1TB</li>
                            </ul>
                            <div class="prods-info">
                                <p class="name-prods">IPhone 12</p>
                                <div class="price">
                                    <span class="price-new">34.990.000₫</span>
                                    <span class="discount">24.790.000₫</span>
                                    <span class="percent">-3%</span>
                                </div>
                            </div>
                            <p class="notification">Online giá rẻ</p>
                    </div>
                    <div class="item-product">
                        <img src={image3} alt="">
                            <ul class="prods-group">
                                <li class="merge__item item">256GB</li>
                                <li class="merge__item item">512GB</li>
                                <li class="merge__item item">1TB</li>
                            </ul>
                            <div class="prods-info">
                                <p class="name-prods">IPhone 12</p>
                                <div class="price">
                                    <span class="price-new">34.990.000₫</span>
                                    <span class="discount">24.790.000₫</span>
                                    <span class="percent">-3%</span>
                                </div>
                            </div>
                            <p class="notification">Online giá rẻ</p>
                    </div>
                    <div class="item-product">
                        <img src={image3} alt="">
                            <ul class="prods-group">
                                <li class="merge__item item">256GB</li>
                                <li class="merge__item item">512GB</li>
                                <li class="merge__item item">1TB</li>
                            </ul>
                            <div class="prods-info">
                                <p class="name-prods">IPhone 12</p>
                                <div class="price">
                                    <span class="price-new">34.990.000₫</span>
                                    <span class="discount">24.790.000₫</span>
                                    <span class="percent">-3%</span>
                                </div>
                            </div>
                            <p class="notification">Online giá rẻ</p>
                    </div>
                    <div class="item-product">
                        <img src={image3} alt="">
                            <ul class="prods-group">
                                <li class="merge__item item">256GB</li>
                                <li class="merge__item item">512GB</li>
                                <li class="merge__item item">1TB</li>
                            </ul>
                            <div class="prods-info">
                                <p class="name-prods">IPhone 12</p>
                                <div class="price">
                                    <span class="price-new">34.990.000₫</span>
                                    <span class="discount">24.790.000₫</span>
                                    <span class="percent">-3%</span>
                                </div>
                            </div>
                            <p class="notification">Online giá rẻ</p>
                    </div>
                </div>
                <div class="feedback mb-md-4 mt-md-4 mt-sm-2 mb-sm-2">
                    <div class="main-form">
                        <p class="title-feedback">
                            Bạn  có hài lòng với trải nghiệm tìm kiếm thông tin, sản phẩm trên website không?
                        </p>
                        <div class="icon-fb">
                            <div class="icon-smile">
                                <img src={happyIcon}>
                                    <span>Hài lòng</span>
                            </div>
                            <div class="icon-bad">
                                <img src={badIcon}>
                                    <span>Không hài lòng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <script type="module" src="/js/script.js"></script>
        </div>
    )
}

export default Category