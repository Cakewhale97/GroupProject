import "../styles/OrderStatus.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const OrderStatus = () => {
  const location = useLocation();
  const { orderNr } = location.state;
  console.log("OrderNr:", orderNr)
  const [eta, setEta] = useState(null);

  useEffect(() => {
    axios.get(`https://airbean-9pcyw.ondigitalocean.app/api/beans/order/status/${orderNr}`)
    .then((response) => {
      setEta(response.data.eta);
      console.log("Response data:", response.data);
    }) 
    .catch((error) => {
      console.error("Error:", error);
    });
  }, [orderNr]);


  return (
    <div>
      <h1>Order Status</h1>
      <p>Your Order number is {orderNr}</p>
      {eta ? (
        <p> Your order will be ready in {eta} minutes </p>
      ) : (
        <p>Fetching order status...</p>
      )}
      <img src="" alt="" />
    </div>
  );
}

export default OrderStatus;
