import AppNavbar from "./components/AppNavbar";
import Cart from "./components/Cart";
import ProductsItem from "./components/ProductsItem";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<ProductsItem />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
