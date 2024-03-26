import "../styles/OrderStatus.css";
import { useLocation } from "react-router-dom";

function OrderStatus() {
  const location = useLocation();
  const orderNr = location.state?.orderNr;
  const eta = location.state?.eta;

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
