import './Cart.css'
import { useSelector } from "react-redux";


export default function Cart() {
  const cartItems = useSelector((state) => state.cart);

  return (
   // {cartItems.map((item, index) => (
    //  <div key={index}>
    <div className="Cart">
      <h1>cart</h1>
      <p></p>
    </div>
  );
}
