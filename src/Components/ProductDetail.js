import '../static/css/style.css'
import '../static/css/productDetail.css'
import image1 from '../images/img-iphone/iphone-15-pro-max-blue-titan-5-650x650.webp'
import image2 from '../images/img-iphone/iphone-11-white-thumbtz-650x650.webp'
import image3 from '../images/img-iphone/iphone-13-blue-thumbtz-650x650.webp'
import image4 from '../images/img-iphone/iphone-14-pro-max-purple-thumbtz-650x650.webp'
import image5 from '../images/image-sale/Frame-482029--1--920x230.png'
import avatar1 from 'https://bootdey.com/img/Content/avatar/avatar1.png'
import avatar2 from 'https://bootdey.com/img/Content/avatar/avatar2.png'
import avatar3 from 'https://bootdey.com/img/Content/avatar/avatar3.png'

function ProductDetail() {
  return (
    <div>

      <div class="container mt-sm-2 mt-md-5 mb-sm-2 mb-md-5">
        <div class="product-detail">
          <div class="container-carousel">
            <div class="row">
              <div class="col-md-12">
                <div id="custCarousel" class="carousel slide" data-ride="carousel" align="center">
                  <!-- slides -->
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={image1} alt="Hills">
                    </div>

                    <div class="carousel-item">
                      <img src={image2} alt="Hills">
                    </div>

                    <div class="carousel-item">
                      <img src={image3} alt="Hills">
                    </div>

                    <div class="carousel-item">
                      <img src={image4} alt="Hills">
                    </div>
                  </div>

                  <!-- Left right -->
                  <a class="carousel-control-prev" href="#custCarousel" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                  </a>
                  <a class="carousel-control-next" href="#custCarousel" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                  </a>

                  <!-- Thumbnails -->
                  <ol class="carousel-indicators list-inline">
                    <li class="list-inline-item active">
                      <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#custCarousel">
                        <img src={image1} class="img-fluid">
                      </a>
                    </li>

                    <li class="list-inline-item">
                      <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel">
                        <img src={image2} class="img-fluid">
                      </a>
                    </li>

                    <li class="list-inline-item">
                      <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel">
                        <img src={image3} class="img-fluid">
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel">
                        <img src={image4} class="img-fluid">
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div class="product-info ml-md-4">
            <h2 class="prod-name">IPhone 15Pro Max 256GB</h2>
            <span class="status">HÀNG SẮP VỀ</span>
            <div class="price">
              <span class="price-new">34.990.000₫</span>
              <span class="discount">24.790.000₫</span>
              <span class="percent">-3%</span>
            </div>
            <span class="capacity">Dung lượng</span>
            <ul class="prods-group">
              <li class="merge__item item">256GB</li>
              <li class="merge__item item">512GB</li>
              <li class="merge__item item">1TB</li>
            </ul>
            <span class="prod-color">Màu: Titan Xanh</span>
            <img class="img-dis" src={image5} alt="">
              <div class="pay-addcart">
                <button>Thêm vào giỏ</button>
                <button>Mua ngay</button>
              </div>
              <ul class="describe">
                <li><i class="fas fa-box"></i>Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C</li>
                <li><i class="fas fa-undo"></i>Hư gì đổi nấy 12 tháng tại 3453 siêu thị trên toàn quốc Xem chi tiết chính sách bảo hành, đổi trả</li>
                <li><i class="fas fa-shield-alt"></i>Bảo hành chính hãng 1 năm</li>
                <li><i class="fas fa-shipping-fast"></i>Giao hàng nhanh toàn quốc Xem chi tiết</li>
                <li><i class="fas fa-phone-alt"></i>Tổng đài: 1900.9696.42 (9h00 - 21h00 mỗi ngày)</li>
              </ul>

          </div>
        </div>
      </div>
      <div class="container-fied  bg-white pb-3">
        <div class="container">
          <div class="row mh-100">
            <div class="col-12 mh-100 tab-content-3">
              <!-- tabs -->
              <ul class="nav nav-tabs d-flex justify-content-center tab-content-l" role="tablist">
                <li role="presentation" class="nav-item">
                  <a href="#home" aria-controls="home" role="tab" data-toggle="tab" class="nav-link active text-dark">Mô tả</a>
                </li>
                <li role="presentation" class="nav-item">
                  <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" class="nav-link text-dark">Thông sô kỹ thuật</a>
                </li>
                <li role="presentation" class="nav-item">
                  <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab" class="nav-link text-dark">Đánh giá sản phẩm</a>
                </li>
              </ul>
              <div class="tab-content mh-100">
                <div role="tabpanel" class="tab-pane active py-3" id="home">
                  <div class="row flex-row justify-content-center">
                    <div class="col-lg-4">
                      <div class="card">
                        <div class="card-block">
                          <h4>Card</h4>
                          <p>Meggings flannel Brooklyn literally
                            small batch, mumblecore PBR try-hard kale chips. Brooklyn vinyl.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" class="tab-pane py-3 mh-100" id="profile">
                  <div class="row flex-row justify-content-center">
                    <div class="col-lg-4">
                      <div class="card">
                        <div class="card-block">
                          <h4>Card</h4>
                          <p>Meggings flannel Brooklyn literally
                            small batch, mumblecore PBR try-hard kale chips. Brooklyn vinyl.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" class="tab-pane py-3 mh-100" id="messages">
                  <div class="row flex-row justify-content-center">
                    <div class="col-lg-4">
                      <div class="card">
                        <div class="card-block">
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
            <div class="col-12 mh-100 review-content">
              <div class="review d-flex flex-column align-content-center text-center ">
                <h3>Đánh giá sản phẩm này</h3>
                <p class="description">
                  Nếu đã mua sản phẩm này tại TopZone. Hãy đánh giá ngay để giúp hàng ngàn người chọn mua hàng tốt nhất bạn nhé!
                </p>
                <ul class="star">
                  <li><i class="far fa-star"></i><span>Rất tệ</span></li>
                  <li><i class="far fa-star"></i><span>Tệ</span></li>
                  <li><i class="far fa-star"></i><span>Tạm ổn</span></li>
                  <li><i class="far fa-star"></i><span>Tốt</span></li>
                  <li><i class="far fa-star"></i><span>Rất tốt</span></li>
                </ul>
              </div>
            </div>
            <div class="be-comment-block">
              <h1 class="comments-title">Comments (3)</h1>
              <div class="be-comment">
                <div class="be-img-comment">
                  <a href="blog-detail-2.html">
                    <img src={avatar1} alt="" class="be-ava-comment">
                  </a>
                </div>
                <div class="be-comment-content">

                  <span class="be-comment-name">
                    <a href="blog-detail-2.html">Ravi Sah</a>
                  </span>
                  <span class="be-comment-time">
                    <i class="fa fa-clock-o"></i>
                    May 27, 2015 at 3:14am
                  </span>

                  <p class="be-comment-text">
                    Pellentesque gravida tristique ultrices.
                    Sed blandit varius mauris, vel volutpat urna hendrerit id.
                    Curabitur rutrum dolor gravida turpis tristique efficitur.
                  </p>
                </div>
              </div>
              <div class="be-comment">
                <div class="be-img-comment">
                  <a href="blog-detail-2.html">
                    <img src={avatar2} alt="" class="be-ava-comment">
                  </a>
                </div>
                <div class="be-comment-content">
                  <span class="be-comment-name">
                    <a href="blog-detail-2.html">Phoenix, the Creative Studio</a>
                  </span>
                  <span class="be-comment-time">
                    <i class="fa fa-clock-o"></i>
                    May 27, 2015 at 3:14am
                  </span>
                  <p class="be-comment-text">
                    Nunc ornare sed dolor sed mattis. In scelerisque dui a arcu mattis, at maximus eros commodo. Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant. Proin ut ornare lectus, vel eleifend est. Fusce hendrerit dui in turpis tristique blandit.
                  </p>
                </div>
              </div>
              <div class="be-comment">
                <div class="be-img-comment">
                  <a href="blog-detail-2.html">
                    <img src={avatar3} alt="" class="be-ava-comment">
                  </a>
                </div>
                <div class="be-comment-content">
                  <span class="be-comment-name">
                    <a href="blog-detail-2.html">Cüneyt ŞEN</a>
                  </span>
                  <span class="be-comment-time">
                    <i class="fa fa-clock-o"></i>
                    May 27, 2015 at 3:14am
                  </span>
                  <p class="be-comment-text">
                    Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant
                  </p>
                </div>
              </div>
              <form class="form-block">
                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <div class="form-group fl_icon">
                      <div class="icon"><i class="fa fa-user"></i></div>
                      <input class="form-input" type="text" placeholder="Your name">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 fl_icon">
                    <div class="form-group fl_icon">
                      <div class="icon"><i class="fa fa-envelope-o"></i></div>
                      <input class="form-input" type="text" placeholder="Your email">
                    </div>
                  </div>
                  <div class="col-xs-12  col-sm-12">
                    <div class="form-group">
                      <textarea class="form-input" required="" placeholder="Your text"></textarea>
                    </div>
                  </div>
                  <a class="btn btn-primary pull-right">submit</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <script type="module" src="/js/script.js"></script>
    </div>
  )
}

export default ProductDetail