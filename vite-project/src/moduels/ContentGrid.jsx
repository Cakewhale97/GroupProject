import React from "react";
import BookCard from "./BookCard"; 

export default function ContentGrid({ contentData, handleAddToCart }) {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {contentData.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
          description={book.desc}
          price={book.price}
          addToCart={() => handleAddToCart(book)} 
        />
      ))}
    </div>
  );
}


