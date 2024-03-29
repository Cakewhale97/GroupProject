import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import the components for each of your routes
import LandingPage from "../pages/LandingPage";
import Menu from "../pages/Menu";
import Cart from "../components/Cart";
import Nav from "../pages/Nav";
import OrderStatus from "../pages/OrderStatus";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderstatus" element={<OrderStatus />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
