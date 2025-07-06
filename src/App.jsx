import Mainlayout from "./layouts/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./componets/Header";
import Cart from "./features/cart/Cart";
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Mainlayout></Mainlayout>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
