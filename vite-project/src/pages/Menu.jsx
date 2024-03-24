import React from "react";
import "../styles/Menu.css";
import Products from "../components/Products";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <div className="cart-container">
        <nav>NAV</nav>
        <Link to="/cart">
          <h1 >cart</h1>
        </Link>
      </div>
      <h1 className="menu-title">Meny</h1>
      <div>
        <Products />
      </div>
    </div>
  );
}
