import "../styles/OrderStatus.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import droneImage from "../assets/drone.svg";

const OrderStatus = () => {
  const location = useLocation();
  const { orderNr } = location.state;
  console.log("OrderNr:", orderNr);
  const [eta, setEta] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://airbean-9pcyw.ondigitalocean.app/api/beans/order/status/${orderNr}`
      )
      .then((response) => {
        setEta(response.data.eta);
        console.log("Response data:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [orderNr]);

  return (
    <div className="status">
      <div className="status-order">
        <p>
          Ordernummer <span className="orderNr">#{orderNr}</span>{" "}
        </p>
      </div>

      <img src={droneImage} alt="" className="drone" />
      <div className="status-eta">
        {eta ? (
          <h2>
            Din beställning <br /> är på väg! <br />{" "}
            <span className="eta"> {eta} minuter</span>
          </h2>
        ) : (
          <p>Din beställning är på väg {eta}</p>
        )}
      </div>
    </div>
  );
};

export default OrderStatus;
