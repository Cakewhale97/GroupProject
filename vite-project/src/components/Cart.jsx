import './Cart.css'
import { useSelector } from "react-redux";


export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  console.log('cart items', cartItems)

  return (
    <div className="Products">
      {cartItems.map((item, index) => (
        <div key={index}>
     
        </div>
      ))}
