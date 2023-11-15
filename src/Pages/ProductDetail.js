import '../static/css/style.css'
import '../static/css/productDetail.css'
import image1 from '../static/images/img-iphone/iphone-15-pro-max-blue-titan-5-650x650.webp'
import image2 from '../static/images/img-iphone/iphone-11-white-thumbtz-650x650.webp'
import image3 from '../static/images/img-iphone/iphone-13-blue-thumbtz-650x650.webp'
import image4 from '../static/images/img-iphone/iphone-14-pro-max-purple-thumbtz-650x650.webp'
import image5 from '../static/images/image-sale/Frame-482029--1--920x230.png'
import avatar1 from '../static/images/img-iphone/iphone-13-blue-thumbtz-650x650.webp'
import avatar2 from '../static/images/img-iphone/iphone-13-blue-thumbtz-650x650.webp'
import avatar3 from '../static/images/img-iphone/iphone-13-blue-thumbtz-650x650.webp'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();
  const productDetail = `http://localhost:8080/getInformation/${productId}`
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch(productDetail)
      .then(response => response.json())
      .then(data => {
        setProduct(data)
      })
  }, [])
  console.log(product.imageList)
  useEffect(() => {
    clearInterval()
  }, [])
  return (
    <div>

      <div className="container mt-sm-2 mt-md-5 mb-sm-2 mb-md-5">
        <div className="product-detail">
          <div className="container-carousel">
            <div className="row">
              <div className="col-md-12">
                {product.imageList && product.imageList.length > 0 ? (
                  <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">

                    <div className="carousel-inner">
                      {product.imageList.map((product, index) => {
                        if (index == 0) {
                          return (
                            <div key={index} className="carousel-item active">
                              <img src={product} alt="Hills" />
                            </div>
                          )
                        } else {
                          return (
                            <div key={index} className="carousel-item">
                              <img src={product} alt="Hills" />
                            </div>
                          )
                        }
                      })}

                      {product.imageList.map((product, index) => (
                        <div key={index} className="carousel-item">
                          <img src={product} alt="Hills" />
                        </div>
                      )

                      )}
                      {product.imageList.map((product, index) => (
                        <div key={index} className="carousel-item">
                          <img src={product} alt="Hills" />
                        </div>
                      )

                      )}
                      {product.imageList.map((product, index) => (
                        <div key={index} className="carousel-item">
                          <img src={product} alt="Hills" />
                        </div>
                      )

                      )}
                      {product.imageList.map((product, index) => (
                        <div key={index} className="carousel-item">
                          <img src={product} alt="Hills" />
                        </div>
                      )

                      )}



                    </div>


                    <a className="carousel-control-prev" href="#custCarousel" data-slide="prev">
                      <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#custCarousel" data-slide="next">
                      <span className="carousel-control-next-icon"></span>
                    </a>


                    <ol className="carousel-indicators list-inline">
                      <li className="list-inline-item active">
                        <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel">
                          <img src={image1} className="img-fluid" />
                        </a>
                      </li>

                      <li className="list-inline-item">
                        <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel">
                          <img src={image2} className="img-fluid" />
                        </a>
                      </li>

                      <li className="list-inline-item">
                        <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel">
                          <img src={image3} className="img-fluid" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel">
                          <img src={image4} className="img-fluid" />
                        </a>
                      </li>
                    </ol>
                  </div>
                ) : (
                  <p>Không có hình ảnh nào</p>
                )}
              </div>
            </div>
          </div>
          <div className="product-info ml-md-4">
            <h2 className="prod-name">IPhone 15Pro Max 256GB</h2>
            <span className="status">HÀNG SẮP VỀ</span>
            <div className="price">
              <span className="price-new">34.990.000₫</span>
              <span className="discount">24.790.000₫</span>
              <span className="percent">-3%</span>
            </div>
            <span className="capacity">Dung lượng</span>
            <ul className="prods-group">
              <li className="merge__item item">256GB</li>
              <li className="merge__item item">512GB</li>
              <li className="merge__item item">1TB</li>
            </ul>
            <span className="prod-color">Màu: Titan Xanh</span>
            <img className="img-dis" src={image5} alt="" />
            <div className="pay-addcart">
              <button>Thêm vào giỏ</button>
              <button>Mua ngay</button>
            </div>
            <ul className="describe">
              <li><i className="fas fa-box"></i>Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C</li>
              <li><i className="fas fa-undo"></i>Hư gì đổi nấy 12 tháng tại 3453 siêu thị trên toàn quốc Xem chi tiết chính sách bảo hành, đổi trả</li>
              <li><i className="fas fa-shield-alt"></i>Bảo hành chính hãng 1 năm</li>
              <li><i className="fas fa-shipping-fast"></i>Giao hàng nhanh toàn quốc Xem chi tiết</li>
              <li><i className="fas fa-phone-alt"></i>Tổng đài: 1900.9696.42 (9h00 - 21h00 mỗi ngày)</li>
            </ul>

          </div>
        </div>
      </div>
      <div className="container-fied  bg-white pb-3">
        <div className="container">
          <div className="row mh-100">
            <div className="col-12 mh-100 tab-content-3">

              <ul className="nav nav-tabs d-flex justify-content-center tab-content-l" role="tablist">
                <li role="presentation" className="nav-item">
                  <a href="#home" aria-controls="home" role="tab" data-toggle="tab" className="nav-link active text-dark">Mô tả</a>
                </li>
                <li role="presentation" className="nav-item">
                  <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" className="nav-link text-dark">Thông sô kỹ thuật</a>
                </li>
                <li role="presentation" className="nav-item">
                  <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab" className="nav-link text-dark">Đánh giá sản phẩm</a>
                </li>
              </ul>
              <div className="tab-content mh-100">
                <div role="tabpanel" className="tab-pane active py-3" id="home">
                  <div className="row flex-row justify-content-center">
                    <div className="col-lg-4">
                      <div className="card">
                        <div className="card-block">
                          <h4>Card</h4>
                          <p>Meggings flannel Brooklyn literally
                            small batch, mumblecore PBR try-hard kale chips. Brooklyn vinyl.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane py-3 mh-100" id="profile">
                  <div className="row flex-row justify-content-center">
                    <div className="col-lg-4">
                      <div className="card">
                        <div className="card-block">
                          <h4>Card</h4>
                          <p>Meggings flannel Brooklyn literally
                            small batch, mumblecore PBR try-hard kale chips. Brooklyn vinyl.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane py-3 mh-100" id="messages">
                  <div className="row flex-row justify-content-center">
                    <div className="col-lg-4">
                      <div className="card">
                        <div className="card-block">
                          <h4>Card</h4>
                          <p>Meggings flannel Brooklyn literally
                            small batch, mumblecore PBR try-hard kale chips. Brooklyn vinyl.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mh-100 review-content">
              <div className="review d-flex flex-column align-content-center text-center ">
                <h3>Đánh giá sản phẩm này</h3>
                <p className="description">
                  Nếu đã mua sản phẩm này tại TopZone. Hãy đánh giá ngay để giúp hàng ngàn người chọn mua hàng tốt nhất bạn nhé!
                </p>
                <ul className="star">
                  <li><i className="far fa-star"></i><span>Rất tệ</span></li>
                  <li><i className="far fa-star"></i><span>Tệ</span></li>
                  <li><i className="far fa-star"></i><span>Tạm ổn</span></li>
                  <li><i className="far fa-star"></i><span>Tốt</span></li>
                  <li><i className="far fa-star"></i><span>Rất tốt</span></li>
                </ul>
              </div>
            </div>
            <div className="be-comment-block">
              <h1 className="comments-title">Comments (3)</h1>
              <div className="be-comment">
                <div className="be-img-comment">
                  <a href="blog-detail-2.html">
                    <img src={avatar1} alt="" className="be-ava-comment" />
                  </a>
                </div>
                <div className="be-comment-content">

                  <span className="be-comment-name">
                    <a href="blog-detail-2.html">Ravi Sah</a>
                  </span>
                  <span className="be-comment-time">
                    <i className="fa fa-clock-o"></i>
                    May 27, 2015 at 3:14am
                  </span>

                  <p className="be-comment-text">
                    Pellentesque gravida tristique ultrices.
                    Sed blandit varius mauris, vel volutpat urna hendrerit id.
                    Curabitur rutrum dolor gravida turpis tristique efficitur.
                  </p>
                </div>
              </div>
              <div className="be-comment">
                <div className="be-img-comment">
                  <a href="blog-detail-2.html">
                    <img src={avatar2} alt="" className="be-ava-comment" />
                  </a>
                </div>
                <div className="be-comment-content">
                  <span className="be-comment-name">
                    <a href="blog-detail-2.html">Phoenix, the Creative Studio</a>
                  </span>
                  <span className="be-comment-time">
                    <i className="fa fa-clock-o"></i>
                    May 27, 2015 at 3:14am
                  </span>
                  <p className="be-comment-text">
                    Nunc ornare sed dolor sed mattis. In scelerisque dui a arcu mattis, at maximus eros commodo. Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant. Proin ut ornare lectus, vel eleifend est. Fusce hendrerit dui in turpis tristique blandit.
                  </p>
                </div>
              </div>
              <div className="be-comment">
                <div className="be-img-comment">
                  <a href="blog-detail-2.html">
                    <img src={avatar3} alt="" className="be-ava-comment" />
                  </a>
                </div>
                <div className="be-comment-content">
                  <span className="be-comment-name">
                    <a href="blog-detail-2.html">Cüneyt ŞEN</a>
                  </span>
                  <span className="be-comment-time">
                    <i className="fa fa-clock-o"></i>
                    May 27, 2015 at 3:14am
                  </span>
                  <p className="be-comment-text">
                    Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant
                  </p>
                </div>
              </div>
              <form className="form-block">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group fl_icon">
                      <div className="icon"><i className="fa fa-user"></i></div>
                      <input className="form-input" type="text" placeholder="Your name" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 fl_icon">
                    <div className="form-group fl_icon">
                      <div className="icon"><i className="fa fa-envelope-o"></i></div>
                      <input className="form-input" type="text" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="col-xs-12  col-sm-12">
                    <div className="form-group">
                      <textarea className="form-input" required="" placeholder="Your text"></textarea>
                    </div>
                  </div>
                  <a className="btn btn-primary pull-right">submit</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetail