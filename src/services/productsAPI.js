async function ProductsAPI() {
  const data = await fetch("https://dummyjson.com/products");
  const products = await data.json();
  return products;
}
export default ProductsAPI;
