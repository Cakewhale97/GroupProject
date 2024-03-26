import "../styles/OrderStatus.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function OrderStatus() {
  const location = useLocation();
  const orderNr = location.state?.orderNr;
  const eta = location.state?.eta;
  const [orderStatus, setOrderStatus] = useState(null);

  useEffect(() => {
    if (orderNr) {
      axios.get(`https://airbean-9pcyw.ondigitalocean.app/api/beans/order/status/${orderNr}`)
        .then(response => {
          setOrderStatus(response.data);
        })
        .catch(error => {
          console.error('Error fetching order status:', error);
        });
    }
  }, [orderNr]);

  return (
    <>
      <div>Ordernummer {orderNr}</div>
      <img src="" alt="" />
      <h2>Din beställning är på väg!</h2>
      <p>{eta}</p>
    </>
  );
}

export default OrderStatus;
