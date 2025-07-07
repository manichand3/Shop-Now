import Mainlayout from "./layouts/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./componets/Header";
import Cart from "./features/cart/Cart";
import ProductDetails from "./componets/ProductDetails";
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Mainlayout></Mainlayout>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route
          path="/product/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
