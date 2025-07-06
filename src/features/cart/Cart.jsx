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
    <div className="bg-amber-100">
      {CartBox.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <img className="h-64" src={item.thumbnail}></img>
            </div>
            <div>
              <p>{item.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Cart;
