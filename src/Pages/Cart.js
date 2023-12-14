//
import { useEffect, useState } from "react";
import "../static/css/style.css";
import image1 from "../static/images/img-iphone/iphone-13-blue-thumbtz-650x650.webp";
import image2 from "../static/images/img-iphone/iphone-13-blue-thumbtz-650x650.webp";
import image3 from "../static/images/img-iphone/iphone-13-blue-thumbtz-650x650.webp";

function Cart() {
  const [cartDetails, setCartDetails] = useState([]);
  const [orderDetailsId, setOrderDetailsId] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/cart/getCartUser/1"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCartDetails(data.cartDetails);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts
  const handleCreateOrder = async () => {
    try {
      // Send a DELETE request to the server
      const response = await fetch(
        `http://localhost:8080/cart/createOrder/` + orderDetailsId,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setOrderDetailsId([]);
      setCartDetails(
        cartDetails.filter((item) => !orderDetailsId.includes(item.id))
      );
      // chuyển đến trang Order /?
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  console.log(cartDetails);
  return (
    <div>
      <div className="container">
        <div className="pb-5 pt-5">
          <div className="container">
            <a href="#sss" className="text-white-50 buy-more">
              <i className="fas fa-long-arrow-alt-left"></i>Mua thêm sản phẩm
              khác
            </a>
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="border-0 bg-light"></th>
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
                          <div className="py-2 text-uppercase">Total</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Remove</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartDetails.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                onChange={(e) => {
                                  e.target.checked
                                    ? setOrderDetailsId((prevId) => [
                                        ...prevId,
                                        item?.id,
                                      ])
                                    : setOrderDetailsId(
                                        orderDetailsId.filter(
                                          (id) => id !== item?.id
                                        )
                                      );
                                }}
                              ></input>
                            </div>
                          </td>
                          <th scope="row" className="border-0">
                            <div className="p-2">
                              <img
                                src={image1}
                                alt=""
                                width="70"
                                className="img-fluid rounded shadow-sm"
                              />
                              <div className="ml-3 d-inline-block align-middle">
                                <h5 className="mb-0">
                                  <a
                                    href="#hall"
                                    className="text-dark d-inline-block align-middle"
                                  >
                                    {item?.product?.name}
                                  </a>
                                </h5>
                                <span className="text-muted font-weight-normal font-italic d-block">
                                  {item?.product?.category?.name}
                                </span>
                              </div>
                            </div>
                          </th>
                          <td className="border-0 align-middle">
                            <strong>{item?.product?.price}</strong>
                          </td>
                          <td className="border-0 align-middle">
                            <strong>{item?.quantity}</strong>
                          </td>
                          <td className="border-0 align-middle">
                            <strong>
                              {item?.quantity *
                                item?.product?.price *
                                (1 - item?.product?.percentDiscount / 100)}
                            </strong>
                          </td>
                          <td className="border-0 align-middle">
                            <a href="#aaa" className="text-dark">
                              <i className="fa fa-trash"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button
                    className="btn btn-success"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCreateOrder();
                    }}
                  >
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script type="module" src="/js/script.js"></script>
    </div>
  );
}

export default Cart;
