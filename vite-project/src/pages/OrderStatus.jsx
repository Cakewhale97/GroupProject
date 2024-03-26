import "../styles/OrderStatus.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import droneImage from "../assets/drone.svg";
import loaderSvg from "../assets/loader.png";
import { useNavigate  } from "react-router-dom";

const OrderStatus = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const storedOrderNr = sessionStorage.getItem("orderNr");
  const orderNr = location.state ? location.state.orderNr : storedOrderNr;
  console.log("OrderNr:", orderNr);
  const [eta, setEta] = useState(null);

  const handleButtonClick = () => {
    navigate("/");
  }

  useEffect(() => {
    const storedEta = sessionStorage.getItem("eta");

   
    if(storedEta) {
      setEta(storedEta)
    }

    axios
      .get(
        `https://airbean-9pcyw.ondigitalocean.app/api/beans/order/status/${orderNr}`
      )
      .then((response) => {
        setEta(response.data.eta);
        sessionStorage.setItem("eta", response.data.eta);
        console.log("Response data:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    const intervalId = setInterval(() => {
      setEta((prevEta) => (prevEta > 0 ? prevEta - 1 : 0));
    }, 60000);

    return () => clearInterval(intervalId); 
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
          <p>
            Loading... <br />
            <img src={loaderSvg} alt="..Loading" className="loader" />
          </p>
        )}
      </div>
      <div className="status-btn">
        <button onClick={handleButtonClick}>Ok, cool!</button>
      </div>
    </div>
  );
};

export default OrderStatus;
