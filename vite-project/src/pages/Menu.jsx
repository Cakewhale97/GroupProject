import "../styles/Menu.css";
import Products from "../components/Products";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Nav from "./Nav";

export default function Menu() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="menu">
      <div className="menu-cart-container">
        <Nav />
        <div className="menu-cart">
          <Link to="/cart">
            <p className="menu-cart-length">{cartItems.length}</p>
          </Link>
        </div>
      </div>
      <h1 className="menu-title">Meny</h1>
      <div>
        <Products />
      </div>
    </div>
  );
}
