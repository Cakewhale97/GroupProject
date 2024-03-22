import React from "react";
import "../styles/Menu.css";
import Products from "../components/Products";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="Menu">
      <div className="CartContainer">
        <Link to="/cart">
          <h1>cart</h1>
        </Link>
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
}
