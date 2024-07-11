import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar/index";
import ProductsList from "./pages/ProductsList";
import ProductDetails from "./pages/ProductDetails/index";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:productID" element={<ProductDetails />} />
        {/* <Route path="*" element={<div>404, not found</div>} /> */}
      </Routes>
    </>
  );
}

export default App;
