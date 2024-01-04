import AppNavbar from "./components/AppNavbar";
import Cart from "./components/Cart";
import ProductsItem from "./components/ProductsItem";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
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
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
