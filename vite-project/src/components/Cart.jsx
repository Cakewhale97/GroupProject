import "./Cart.css";
import { useSelector } from "react-redux";
import SendOrder from "./SendOrder";
import Nav from "../pages/Nav";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  console.log("cart items", cartItems);

  return (
    <div className="cart-overlay">
      <div className="cart">
        <div className="cart-container">
          <div className="nav-container">
            <Nav />
          </div>
          <div className="cart-icon"></div>
        </div>
        <article className="cart-order-main">
          <section className="cart-order">
            <h1 className="cart-order__title">Din Beställning</h1>
            <div className="cart-order__products">
              {cartItems.map((item, index) => (
                <div className="cart-order__product-info" key={index}>
                  <p className="cart-product-title">{item.title}</p>
                  <p className="cart-product-price">{item.price}kr</p>
                </div>
              ))}
            </div>
          </section>
          <section className="cart-total">
            <p className="cart-total__title">Totalt:</p>
            <div className="cart-dotted-line"></div>
            <p className="cart-total__sum">
              {cartItems.reduce((total, item) => total + item.price, 0)}kr
            </p>
          </section>
          <p className="cart-total__text">inkl moms + drönarleverans</p>
          <SendOrder />
        </article>
      </div>
    </div>
  );
}
