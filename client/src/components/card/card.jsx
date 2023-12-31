import React from "react";
import "./card.styles.scss";

const card = ({ products }) => {
  return (
    <div className="card-container">
      {products.map((item) => (
        <div className="card-item-container">
          <img src={item.image} alt="product one" className="card-image" />
          <div>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
          <button className="app-btn">Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default card;
