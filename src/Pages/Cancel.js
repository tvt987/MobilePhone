import '../static/css/adminH.css'
import '../static/css/discount.css'
import '../static/css/nav.css'
import '../static/css/Cancel.css'

import image1 from '../static/images/img-iphone/iphone-13-blue-thumbtz-650x650.webp'
import image2 from '../static/images/img-iphone/iphone-13-blue-thumbtz-650x650.webp'
import image3 from '../static/images/img-iphone/iphone-13-blue-thumbtz-650x650.webp'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function Cancel() {

    const [orders, setOrders] = useState([])
    const b = sessionStorage.getItem("user")
    let user
    if(b){
        user = JSON.parse(b)
    }

    useEffect(() => {

        fetch(`http://localhost:8080/admin/getOrders/${user.id}`)
            .then(response => response.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <div className="pb-5 pt-5">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                            <div className="table-responsive">
                                <h2>Đơn hàng đã đặt</h2>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="p-2 px-3 text-uppercase">Product</div>
                                            </th>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">Price</div>
                                            </th>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">Quantity</div>
                                            </th>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">Remove</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {orders ? orders.map((item, index) => (

                                        <tr key={index}>
                                           
                                        <th scope="row" className="border-0">
                                            <div className=" p-2">
                                                <img src={image1} alt=""
                                                    width="70" className="img-fluid rounded shadow-sm" />
                                                <div className="ml-3 d-inline-block align-middle">
                                                    <h5 className="mb-0"> <a href={`/OrderDetail/${item.id}`}
                                                        className="text-dark d-inline-block align-middle">Đơn Hàng</a></h5>
                                                    <span
                                                        className="text-muted font-weight-normal font-italic d-block">Category:
                                                        Phones</span>
                                                </div>
                                            </div>
                                        </th>
                                        <td className="border-0 align-middle"><strong>{item.total}</strong></td>
                                        <td className="border-0 align-middle"><strong>{item.quantity}</strong></td>
                                        <td className="oder__btn--cancel border-0 align-middle"><button><strong>Hủy
                                            hàng</strong></button></td>
                                           
                                    </tr>
                                    )) : ""}
                                        

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cancel