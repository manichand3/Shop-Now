import { useParams } from "react-router";
import ProductsAPI from "../services/productsAPI";
import { useEffect, useState } from "react";

function ProductDetails() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductsAPI();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);
  const { id } = useParams();
  const matchProduct = products.find((product) => product.id === Number(id));
  console.log(matchProduct);

  return matchProduct ? (
    <div>
      <img src={matchProduct.thumbnail}></img>
      <p>{matchProduct.title}</p>
      <p>{matchProduct.price}</p>
    </div>
  ) : (
    <div>loding</div>
  );
}
export default ProductDetails;
