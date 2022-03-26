import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const { name, img, price, id } = props.data;
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button
        className="btn-cart"
        key={id}
        onClick={() => props.handleAddToCart(props.data)}
      >
        Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Card;
