// src/modules/Content.jsx
import React from 'react';
import "../styles/Content.css";
import Button from "@mui/material/Button"; // Import the Button component from Material-UI


export default function Content({ index, title, author, desc, price, addToCart }) {
  return (
    <div className="ContentBox">
      <h1>{title}</h1>
      <div className="CartBox">
        <h2>{author}</h2>
        <p>{desc}</p>
        <p>{price}</p>
        <Button variant="contained" color="primary" onClick={addToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
