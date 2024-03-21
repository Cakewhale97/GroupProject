import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const BookCard = ({ title, author, description, price, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(); // Call the addToCart function when the "Add to Cart" button is clicked
  };

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          by {author}
        </Typography>
        <Typography variant="body1" component="p" mt={2}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>

        <Button size="small" onClick={handleAddToCart}>
          Add To Cart
        </Button>
        <Typography variant="body2" color="text.primary" sx={{ ml: "auto" }}>
          ${price}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default BookCard;