import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";

function SendOrder() {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [orderNr, setOrderNr] = useState(null); //Not used right now
  const [eta, setEta] = useState(null); // Not used right now
  const [isSendingOrder, setIsSendingOrder] = useState(false);

  const handleCLick = () => {
    setIsSendingOrder(true);

    const postData = {
      details: {
        order: cartItems.map((item) => ({
          name: item.title,
          price: item.price,
        })),
      },
    };

    axios
      .post(
        "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order",
        postData
      )
      .then((response) => {
        console.log("Response data:", response.data);
        const { orderNr, eta } = response.data; // Destructure orderNr and eta from response data
        console.log({ orderNr });
        navigate("/orderstatus", { state: { orderNr, eta } }); // Pass orderNr and eta directly
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setIsSendingOrder(false);
      });
  };

  return (
    <>
      <div>SendOrder</div>
      <button className="sendorder-btn" onClick={handleCLick}>
        BTN
      </button>
    </>
  );
}

export default SendOrder;

// 1. Import the necessary modules from their respective libraries. This includes `axios` for making HTTP requests, `useSelector` from `react-redux` for accessing the Redux store, `useNavigate` from `react-router-dom` for navigation, and `useState` from `react` for local state management.

// 2. Define the `SendOrder` component. This is a functional component that will handle the process of sending an order.

// 3. Inside the `SendOrder` component, use the `useSelector` hook to access the `cart` slice of the Redux store. This will give you the items currently in the cart.

// 4. Use the `useNavigate` hook to get a function that you can use to navigate to different routes in your app.

// 5. Use the `useState` hook to create state variables for the order number (`orderNr`), estimated time of arrival (`eta`), and a boolean indicating whether an order is currently being sent (`isSendingOrder`).

// 6. Define a function `handleOrder` that will be called when the user wants to send an order. This function should do the following:

//    - Set `isSendingOrder` to `true` to indicate that an order is being sent.
//    - Create an `orderDetails` object from the `cartItems`. This object should match the format expected by the API.
//    - Use `axios` to send a POST request to the API with the `orderDetails` as the body.
//    - In the `.then` callback of the `axios` request, log the response data, save the `orderNr` and `eta` in the state, and navigate to the `/orderstatus` route, passing the `orderNr` and `eta` as state.
//    - In the `.catch` callback of the `axios` request, log any errors that occurred.
//    - In the `.finally` callback of the `axios` request, set `isSendingOrder` to `false` to indicate that the order has been sent.

// 7. In the JSX returned by the `SendOrder` component, render a button that, when clicked, calls the `handleOrder` function. This button should be disabled while an order is being sent.

// 8. Export the `SendOrder` component so it can be used in other parts of your app.
