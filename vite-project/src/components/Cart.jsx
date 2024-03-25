import './Cart.css'
import { useSelector } from "react-redux";
import SendOrder from "./SendOrder";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  console.log('cart items', cartItems)

  return (
    <div className="cart-overlay">
      <div className="cart">
        <div className="cart-container">
          <div className="nav-container">
            <img className="nav" src="src/assets/navicon.svg" alt="" />   </div>
          <div className="cart-icon">   </div>

        </div>
        <section className="cart-order">
          <h1>Min Beställning</h1>
          <div className="Products">
            {cartItems.map((item, index) => (
              <div className='product-info' key={index}>
                <p className="product-title">{item.title}</p>
                <p className="product-price">{item.price}kr</p>
              </div>
            ))}
          </div>
        </section>
        <section className="cart-total">
          <p className='cart-total'>Totalt: {cartItems.reduce((total, item) => total + item.price, 0)}kr</p>
        </section>
        <SendOrder />
      </div>
    </div>
  );
}
