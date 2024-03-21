import { useState } from "react";
import Button from "@mui/material/Button";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import Header from "./moduels/Header";
import Content from "./moduels/Content";
import Cart from "./moduels/Cart";
import ContentData from "./moduels/ContentData";
import ContentGrid from "./moduels/ContentGrid";
import BookCard from "./moduels/BookCard";
import ProfileCard from "./moduels/ProfileCard";
import GrandParents from "./moduels/Parents/GrandParents";
function App() {
  const { cartCount, handleAddToCart } = Cart();

  return (
    <div>
      <Header cartCount={cartCount} />
      <div className="MainContent">
        <ContentGrid
          contentData={ContentData}
          handleAddToCart={handleAddToCart}
        />
      </div>
      <div className="Profile">
        <ProfileCard />
      </div>

      <div>
        <GrandParents />
      </div>
    </div>
  );
}
export default App;
