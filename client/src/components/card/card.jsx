import React from "react";
import "./card.styles.scss";
import ProductOne from "../../images/Cute_burger_shirt_blk.jpg";
import ProductTwo from "../../images/Cute_burger_shirt.jpg";
import ProductThree from "../../images/Cute_pizza_shirt_blk.jpg";
import ProductFour from "../../images/Cute_pizza_shirt.jpg";
import ProductFive from "../../images/Cute_taco_shirt_blk.jpg";
import ProductSix from "../../images/Cute_taco_shirt.jpg";

const card = () => {
  const products = [
    {
      image: ProductOne,
      title: "Burger shirt | black",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
    },
    {
      image: ProductTwo,
      title: "Burger shirt | white",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
    },
    {
      image: ProductThree,
      title: "Pizza shirt | black",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
    },
    {
      image: ProductFour,
      title: "Pizza shirt | white",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
    },
    {
      image: ProductFive,
      title: "Taco shirt | black",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
    },
    {
      image: ProductSix,
      title: "Taco shirt | white",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
    },
  ];

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
