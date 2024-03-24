import React from "react";
import "../styles/Menu.css";
import Products from "../components/Products";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <div className="cart-container">
        <div className="nav-container">
        <img className="nav" src="src/assets/navicon.svg" alt="" />
        </div>
        <Link to="/cart">
         <div className="cart"></div>
        </Link>
      </div>
      <h1 className="menu-title">Meny</h1>
      <div>
        <Products />
      </div>
    </div>
  );
}
