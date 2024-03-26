import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import "./Products.css";

export default function Products() {
  const dispatch = useDispatch();
  const [coffeeItems, setCoffeeItems] = useState([]);

  const handleAddToCart = (item) => {
    console.log("added to cart", item);
    dispatch(addToCart(item));
  };

  useEffect(() => {
    axios
      .get("https://airbean-9pcyw.ondigitalocean.app/api/beans/")
      .then((res) => {
        setCoffeeItems(res.data.menu);
        console.log(res.data.menu);
      })
      .catch((error) => {
        console.error("There was an ", error);
      });
  }, []);


  return (

    <div className="Products">
      {coffeeItems.map((item, index) => (
        <div key={index} className="products-container">
          <div className="products-addbtn">
            <button className="add-btn" onClick={() => handleAddToCart(item)}>+</button>
          </div>
          <div className="product-info">
            <h1 className="product-title">{item.title}</h1>
            <p className="product-description__text">{item.desc}</p>
          </div>
          <p className="product-price">{item.price} kr</p>
        </div>
      ))}
    </div>
  );
}

