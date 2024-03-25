import './Cart.css'
import { useSelector } from "react-redux";


export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  console.log('cart items', cartItems)

  return (
    <div className="cart-overlay">
      <div className="cart">
        <div className="cart-container">
          <div className="nav-container">
            <img className="nav" src="src/assets/navicon.svg" alt="" />
            <div className="cart-icon">   </div>
          </div>
        </div>
        <section className="cart-order">
          <h1>Min Beställning</h1>
          <div className="Products">
            {cartItems.map((item, index) => (
              <div key={index}>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
