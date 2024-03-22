import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="Menu">
      <div className="CartContainer">
        <Link to="/cart"> 
          <h1>cart</h1>
        </Link>
      </div>
    </div>
  );
}
