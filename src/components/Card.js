import React from "react";
import "./Card.css";

const Card = (props) => {
  const { name, img, price } = props.data;
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button
        className="btn-cart"
        onClick={() => props.handleAddToCart(props.data)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
