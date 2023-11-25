// Code bổ sung giỏ hàng vào database khi đăng nhập thành công
export default async function addCartSession() {
  const dataCart = sessionStorage.getItem("dataCart");
  //const idUser = sessionStorage.getItem("user")?.id;
  const idUser = 1;
  if (dataCart && idUser) {
    var cartJson = JSON.parse(dataCart) || [];
    cartJson.forEach(async (cart) => {
      try {
        const response = await fetch(
          `http://localhost:8080/cart/addCartSession/${cart?.product?.id}/${cart?.quantity}/${idUser}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Add cart session not success");
        } else {
          console.log("Add cart session success");
        }
      } catch (error) {
        console.error(error.message);
      }
    });
    sessionStorage.clear("dataCart");
  } else {
    return;
  }
}
