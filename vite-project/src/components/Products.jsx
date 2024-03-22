import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  const [coffeeItems, setCoffeeItems] = useState([]);

  const handleAddToCart = (item) => {
    console.log("added to cart", item);
    dispatch(addToCart(item));
  };

  useEffect(() => {
    axios
      .get("https://airbean-api-xjlcn.ondigitalocean.app/api/beans/")
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
        <div key={index}>
          <div className="AddBtn">
            <button onClick={() => handleAddToCart(item)}>+</button>
          </div>
          <div>
            <h1>{item.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
