import '../static/css/adminF.css'
import '../static/css/statistical.css'
import iconLogoPhone from '../static/images/img-model/header__logophone.png'

import iconImageFooterContent from '../static/images/image__footer-content/face.png'
import iconZalo from '../static/images/image__footer-content/zalo.png'
import iconInstar from '../static/images/image__footer-content/instar.png'
import videoFooter from '../static/images/img-model/footer__video.mp4'
function Footer() {
    return (
        <div>
            <div className="main__footer">
                <div className="main__footer-introduce">
                    <video typeof='video/mp4' src={videoFooter}
                        autoPlay loop></video>

                    <div className="footer__introduce-logo fa-shake"
                        style={{
                            backgroundImage: `url(${iconLogoPhone})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain'
                        }}></div>

                    <div className="footer__introduce-name">
                        <span>ONLINE</span>
                        <span>-</span>
                        <span>MOBILE</span>
                        <span>-</span>
                        <span>STORE</span>
                    </div>
                    <div className="footer__introduce-content">
                        Tại <span>Mobile</span>
                        <span>-</span>
                        <span>League</span>
                        <span>-</span>
                        <span>OTI</span>, khách hàng yêu mến hệ sinh thái mobile
                        sẽ tìm thấy đầy đủ <br /> và đa dạng nhất các sản phẩm như Iphone, Xi
                        aomi, Oppo, Samsung hay Huawei...với <br /> không gian mua sắm đẳng cấ
                        p, hiện đại.
                    </div>
                </div>
                <div className="main__footer-policy row">
                    <div className="footer__policy-item
        footer__policy-item--check
        col-lg-3 col-md-3 col-sm-6">
                        <i className="fa-solid fa-circle-check"></i>
                        <div className="policy__item-content">
                            Mẫu mã đa dạng, chính hãng
                        </div>
                    </div>
                    <div className="footer__policy-item 
        footer__policy-item--ship 
        col-lg-3 col-md-3 col-sm-6">
                        <i className="fa-solid fa-truck"></i>
                        <div className="policy__item-content">
                            Giao hàng toàn quốc
                        </div>
                    </div>
                    <div className="footer__policy-item
        footer__policy-item--protect
        col-lg-3 col-md-3 col-sm-6">
                        <i className="fa-solid fa-shield-cat"></i>
                        <div className="policy__item-content">
                            Bảo hành cam kết, uy tín
                        </div>
                    </div>
                    <div className="footer__policy-item 
        footer__policy-item--return
        col-lg-3 col-md-3 col-sm-6">
                        <i className="fa-solid fa-arrow-rotate-left"></i>
                        <div className="policy__item-content">
                            Có thể đổi trả lại
                        </div>
                    </div>
                </div>
                <div className="main__footer-content">
                    <div className="footer__content-header">
                        <div className="content__header-name">
                            <span>Mobile</span>
                            <span>-</span>
                            <span>League</span>
                            <span>-</span>
                            <span>OTI</span>
                        </div>

                        <div className="content__header-logo"
                            style={{
                                backgroundImage: `url(${iconLogoPhone})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain'
                            }}></div>
                    </div>
                    <div className="footer__content-body row">
                        <div className="content__body-item
          col-lg-3 col-md-3 col-sm-6">
                            <div>Tổng đài</div>
                            <div>Mua hàng: 032545674</div>
                            <div>CSKH: 0325456574</div>
                            <div>Kết nối với chúng tôi</div>
                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                    

<div style={{backgroundImage: `url(${iconImageFooterContent})`,
backgroundPosition: 'center',
backgrounRepeat: 'no-repeat',
backgroundSize: 'contain'

}}></div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                    
                <div style={{backgroundImage: `url(${iconZalo})`,
backgroundPosition: 'center',
backgrounRepeat: 'no-repeat',
backgroundSize: 'contain'

}}></div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                    
                <div style={{backgroundImage: `url(${iconInstar})`,
backgroundPosition: 'center',
backgrounRepeat: 'no-repeat',
backgroundSize: 'contain'

}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="content__body-item 
          col-lg-3 col-md-3 col-sm-6">
                            <div>Hệ thống cửa hàng</div>
                            <div>Xem vị trí cửa hàng</div>
                            <div>Nội quy cửa hàng</div>
                            <div>Chất lượng phục vụ</div>
                            <div>Chính sách bảo hành & đổi trả</div>
                        </div>
                        <div className="content__body-item 
          col-lg-3 col-md-3 col-sm-6">
                            <div>Hỗ trợ khách hàng</div>
                            <div>Điều kiện giao dịch chung</div>
                            <div>Hướng dẫn mua hàng online</div>
                            <div>Chính sách giao hàng</div>
                            <div>Hướng dẫn thanh toán</div>
                        </div>
                        <div className="content__body-item 
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
                    <div className="footer__content-footer">
                        © 2023. Công ty cổ phần Mobile-League-OTI. <br />
                        Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP. Hồ Chí Minh. <br />
                        Điện thoại: 032.545.6574. <br />
                        Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer