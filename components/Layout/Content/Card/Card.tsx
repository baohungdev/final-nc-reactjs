import React from "react";

const Card = ({ product }) => {
  return (
    <div className="container">
      <h1>{product.name}</h1>
      <img src={product.imgUrl} alt="img" />
      <button>View</button>
      <button>Add to cart</button>
    </div>
  );
};

export default Card;
//TODO Styled this card
