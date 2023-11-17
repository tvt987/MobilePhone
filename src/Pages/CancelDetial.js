import '../static/css/adminH.css'
import '../static/css/discount.css'
import '../static/css/nav.css'
import '../static/css/Cancel.css'

function CancelDetail() {
    return (
        <div>
            <div className="main__body">
                <br />
                <br />
                <div className="container">

                    <div className="kiet col-sm-6 col-md-9" >
                        <br />
                        <div className="huydon">
                            <h3 >Đã đặt hàng</h3>
                            <h4 >Ngày giao dự kiến : Nov 7 2023 - Nov 9 2023</h4>
                        </div>
                        <br />
                        <div className="thongtin">
                            <h4 >
                                <i className="fa-solid fa-location-dot"></i> Ngô Quốc Nam (+84312******2)
                            </h4>
                            <h6 >
                                723 Phạm Thế Hiển, Phường 4, Quận 8, Thành phố Hồ Chí Minh, Việt Nam
                            </h6>
                        </div>
                        <br />
                        <div className="donhang" >
                            <br />
                            <header>
                                <a href="/">
                                    <i className="fa-brands fa-apple"></i> TopZone
                                </a>
                            </header>
                            <main>
                                <div className="row">
                                    <div className="col-md-2 img-donhang"><img
                                        src="images/img-iphone/iphone-11-white-thumbtz-650x650.webp" alt="" />
                                    </div>
                                    <div className="col-md-9 text">
                                        <h4 >
                                            IPHONE 11 PRO MAX MÀU
                                        </h4>
                                        <h6 >
                                            TRẮNG, 256GB
                                        </h6>
                                        <br />
                                        <h4 >15.500.000đ</h4>
                                    </div>
                                </div>
                                <br />
                                <div className="chat">
                                    <a href="/">
                                        <i className="fa-brands fa-rocketchat"></i> Liên hệ với người bán
                                        <small>Về sản phẩm, vận chuyển, trả hàng và hoàn tiền.</small>
                                    </a>
                                </div>
                            </main>
                            <br />
                        </div>
                        <br />
                        <div className="tongquan">
                            <div className="row">
                                <div className="col-8">
                                    <h4 > Tổng quan đơn hàng </h4>
                                    <br />
                                    <h5 > Tổng phụ </h5>
                                    <h5 > Vận chuyển </h5>
                                    <h5 > Phiếu giảm giá của TopZone </h5>
                                    <h5 className='tong' > Tổng </h5>
                                </div>
                                <div className="col-4">
                                    <h5 > 15.500.000 đ </h5>
                                    <h5 > 30.000 đ </h5>
                                    <h5 > -1.000.000 đ </h5>
                                    <h5 className='tong' > 14.530.000 đ </h5>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="tongquan" >
                            <div className="row">
                                <div className="col-8">
                                    <h4 > Chi tiết đơn hàng </h4>
                                    <br />
                                    <h5 > Số đơn hàng</h5>
                                    <h5 > Ngày đặt hàng </h5>
                                    <h5 > Phương thức thanh toán </h5>
                                    <h5 > Thời gian thanh toán</h5>
                                </div>
                                <div className="col-4">
                                    <h5 > 53475435734543958 <i className="fa-regular fa-copy"></i></h5>
                                    <h5 > Nov 5, 2023 1:23 PM </h5>
                                    <h5 > MoMo E-Wallet </h5>
                                    <h5 > Nov 5, 2023 1:24 PM </h5>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div id="myBtn">
                            <a href="/" className="Nam btn-huydon "
                                data-toggle="modal" data-target="#exampleModal">
                                <span>Hủy đơn hàng</span>
                            </a>
                            <a href="/" className="btn-thaydoi">
                                <span>Đổi phương thức thanh toán</span>
                            </a>

                        </div>

                        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Lý do hủy đơn hàng</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <input type="checkbox" name="lydo1" value="1" />
                                        <label for="lydo1"> Giá cả không hợp lý</label><br />
                                        <input type="checkbox" name="lydo2" value="2" />
                                        <label for="lydo2"> Tôi muốn thay đổi số lượng </label><br />
                                        <input type="checkbox" name="lydo3" value="3" />
                                        <label for="lydo3"> Không muốn mua nữa</label><br />
                                        <input type="checkbox" name="lydo4" value="4" />
                                        <label for="lydo4"> Sự cố đặt đơn hàng</label><br />
                                        <input type="checkbox" name="lydo5" value="5" />
                                        <label for="lydo5"> Đơn hàng quá lâu</label><br />
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                            <button type="button" className="btn btn-primary">Gửi</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default CancelDetail