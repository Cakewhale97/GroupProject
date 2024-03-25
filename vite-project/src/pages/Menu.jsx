import "../styles/Menu.css";
import Products from "../components/Products";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Menu() {
  const cartItems = useSelector((state) => state.cart);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="menu">
      <div className="menu-cart-container">
        <div className="menu-nav-container">
          <img
            className="nav"
            src="src/assets/navicon.svg"
            alt=""
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
          {isNavOpen && (
            <div className="nav-menu">
              <Link to="/menu" onClick={() => setIsNavOpen(false)}>
                Meny
              </Link>
              <Link to="/about" onClick={() => setIsNavOpen(false)}>
                Vårt Kaffe
              </Link>
              <Link to="/orderstatus" onClick={() => setIsNavOpen(false)}>
                Orderstatus
              </Link>
            </div>
          )}
        </div>
        <div className="menu-cart">
          {!isNavOpen && (
            <Link to="/cart">
              <p className="menu-cart-length">{cartItems.length}</p>
            </Link>
          )}
        </div>
      </div>
      <h1 className="menu-title">Meny</h1>
      <div>
        <Products />
      </div>
    </div>
  );
}
