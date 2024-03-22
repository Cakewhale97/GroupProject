import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Export the configured store as the default export of this module.
export default configureStore({
  // Pass an object to the reducer option. Each key-value pair in this defines a slice of the redux state.
  // The key is the name of the slice, and the value is the reducer function for that slice.
  // In this case, theres a single slice named #"cart", and its reducer function is cartReducer. 
  reducer: {
    cart: cartReducer,
  },
});