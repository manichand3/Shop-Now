import { useSelector } from "react-redux";
import ProductsAPI from "../../services/productsAPI";
import { useEffect, useState } from "react";
function Cart() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductsAPI();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);
  const cartItems = useSelector((state) => state.cart);
  const CartBox = cartItems.map((item) => {
    const productExist = products.find((product) => product.id === item.id);
    return {
      ...productExist,
      quantity: item.quantity,
    };
  });
  console.log(CartBox);
  return (
    <div>
      {CartBox.map((item) => {
        return (
          <div
            className="hover:bg-blue-200 rounded-2xl pl-16 p-2 m-5 w-100 bg-blue-100"
            key={item.id}
          >
            <div>
              <img className="h-64" src={item.thumbnail}></img>
            </div>
            <div>
              <p>{item.title}</p>
              <p>Price- {item.price}</p>
              <p>quantity-{item.quantity}</p>
              <p>Total-{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Cart;
