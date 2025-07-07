import { useState, useEffect } from "react";
import { Link } from "react-router";
import ProductsAPI from "../services/productsAPI";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
const ProductCard = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductsAPI();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="grid grid-cols-4 gap-4 m-0 p-10">
      {products.map((product) => {
        return (
          <div
            className="bg-gray-400 rounded-md cursor-pointer hover: bg-gray-300 "
            key={product.id}
          >
            <Link to={`/product/${product.id}`}>
              <div>
                <img className="h-100" src={product.images[0]}></img>
              </div>
              <div className="flex flex-col-reverse items-center">
                <p>{product.title}</p>
                <p>{product.price}</p>
              </div>
            </Link>

            <div className="flex justify-center gap-2">
              <button
                onClick={() => {
                  dispatch(addToCart(product.id));
                }}
                className="bg-black p-3 rounded-2xl text-amber-50 m-3 cursor-pointer hover:bg-gray-600 "
              >
                Add-to-Cart
              </button>
              <button
                onClick={() => {
                  dispatch(removeFromCart(product.id));
                }}
                className="bg-black p-3 rounded-2xl text-amber-50 m-3 cursor-pointer  hover:bg-gray-600"
              >
                remove-item
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
