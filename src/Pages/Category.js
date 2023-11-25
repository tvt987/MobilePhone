import '../static/css/style.css'
import '../static/css/category.css'
import image1 from '../static/images/image-slide/img-slide3.webp'
import image2 from '../static/images/image-slide/img-slide4.webp'
import image3 from '../static/images/img-iphone/iphone-11-white-thumbtz-650x650.webp'
import happyIcon from '../static/images/icon/icon-happy.png'
import badIcon from '../static/images/icon/icon-bad.png'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
function Category() {
    const productCategory = ''
    const {brand} = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/admin/getInformationBrand/${brand}`)
            .then(response => response.json())
            .then(data => setProducts(data))
            
    }, [brand])


    return (
        <div>
            <div className="container ">
                <div className="category-title mt-4 d-flex justify-content-center">
                    <h3 className="text-white "><i className="fab fa-apple"></i>IPhone</h3>
                </div>
                <div id="carouselExampleInterval" className="carousel slide mt-md-4 mb-md-4 " data-ride="carousel">
                    <div className="carousel-inner" style={{borderRadius: '30px'}}>
                        <div className="carousel-item active" data-interval="10000">
                            <img src={image1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={image2} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
                <div className="ft-cate mb-md-4 ">
                    <a href="/iphone" data-id="0" className="active">
                        Tất cả
                    </a>
                    <a href="/iphone-15" data-id="271594" className="">
                        iPhone 15
                    </a>
                    <a href="/iphone-14" data-id="244884" className="">
                        iPhone 14
                    </a>
                    <a href="/iphone-13" data-id="199759" className="">
                        iPhone 13
                    </a>
                    <a href="/iphone-12" data-id="199758" className="">
                        iPhone 12
                    </a>
                    <a href="/iphone-11" data-id="199757" className="">
                        iPhone 11
                    </a>
                </div>
                <div className="products mt-md-4 mb-md-4" style={{marginTop: '5px'}}>
                    {products ? products.map((item, index) => (
                        <a key={index} href={`/ProductDetail/${item.id}`} className="item-product">
                        <img src={image3} alt=""/> 
                            <ul className="prods-group">
                                <li className="merge__item item">256GB</li>
                                <li className="merge__item item">512GB</li>
                                <li className="merge__item item">1TB</li>
                            </ul>
                            <div className="prods-info">
                                <p className="name-prods">{item.name}</p>
                                <div className="price">
                                    <span className="price-new">
                                        {item.price}đ
                                    </span>
                                    <span className="discount">24.790.000₫</span>
                                    <span className="percent">%</span>
                                </div>
                            </div>
                            <p className="notification">Online giá rẻ</p>
                    </a>
                    )) : ""}

                </div>
                <div className="feedback mb-md-4 mt-md-4 mt-sm-2 mb-sm-2">
                    <div className="main-form">
                        <p className="title-feedback">
                            Bạn  có hài lòng với trải nghiệm tìm kiếm thông tin, sản phẩm trên website không?
                        </p>
                        <div className="icon-fb">
                            <div className="icon-smile">
                                <img src={happyIcon}/>
                                    <span>Hài lòng</span>
                            </div>
                            <div className="icon-bad">
                                <img src={badIcon}/>
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