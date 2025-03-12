import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
