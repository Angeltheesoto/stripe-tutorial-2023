import React, { createContext, useEffect, useState } from "react";
import ProductOne from "../../src/images/Cute_burger_shirt_blk.jpg";
import ProductTwo from "../../src/images/Cute_burger_shirt.jpg";
import ProductThree from "../../src/images/Cute_pizza_shirt_blk.jpg";
import ProductFour from "../../src/images/Cute_pizza_shirt.jpg";
import ProductFive from "../../src/images/Cute_taco_shirt_blk.jpg";
import ProductSix from "../../src/images/Cute_taco_shirt.jpg";

export const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const cartItems = localStorage.getItem("cart");
  const [data, setData] = useState([
    {
      image: ProductOne,
      title: "Burger shirt | black",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
      price: "17.99",
    },
    {
      image: ProductTwo,
      title: "Burger shirt | white",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
      price: "17.99",
    },
    {
      image: ProductThree,
      title: "Pizza shirt | black",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
      price: "17.99",
    },
    {
      image: ProductFour,
      title: "Pizza shirt | white",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
      price: "17.99",
    },
    {
      image: ProductFive,
      title: "Taco shirt | black",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
      price: "17.99",
    },
    {
      image: ProductSix,
      title: "Taco shirt | white",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
      price: "17.99",
    },
  ]);
  const [cart, setCart] = useState(cartItems ? JSON.parse(cartItems) : []);

  // ?Check if the items exists in localstorage
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  //   useEffect(() => {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }, [cart]);

  return (
    <dataContext.Provider value={{ data, cart, setCart }}>
      {children}
    </dataContext.Provider>
  );
};
