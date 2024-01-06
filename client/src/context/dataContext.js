import React, { createContext, useEffect, useState } from "react";
import { getProductsDataCall } from "../api/products";

export const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const cartItems = localStorage.getItem("cart");
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(cartItems ? JSON.parse(cartItems) : []);

  // ?Check if the items exists in localstorage
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        let productData = await getProductsDataCall();
        setData(productData);
      } catch (error) {
        console.error("Error fetching product data: ", error);
      }
    };
    fetchProductData();
  }, []);

  return (
    <dataContext.Provider value={{ data, cart, setCart }}>
      {children}
    </dataContext.Provider>
  );
};
