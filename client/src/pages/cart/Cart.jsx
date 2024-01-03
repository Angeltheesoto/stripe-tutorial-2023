import React, { useContext, useEffect, useState } from "react";
import "./cart.styles.scss";
import Layout from "../../components/shared/layout";
import Container from "react-bootstrap/esm/Container";
import { dataContext } from "../../context/dataContext";
import { Plus, FileMinus, Trash } from "react-bootstrap-icons";

const Cart = () => {
  const { cart, setCart } = useContext(dataContext);
  const [total, setTotal] = useState(0);

  const findItemIndex = (item) => {
    let searchTitle = item.title;
    let searchSize = item.size;
    let foundItem = null;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].title === searchTitle && cart[i].size === searchSize) {
        foundItem = i;
        break;
      }
    }

    return foundItem;
  };

  const handleDeleteItem = (item) => {
    const itemToDelete = findItemIndex(item);

    if (itemToDelete !== null) {
      setCart((prev) => {
        const newCart = [...prev];
        newCart.splice(itemToDelete, 1);
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      });
    }
  };

  const handleIncreaseCount = (item) => {
    let itemToIncrease = findItemIndex(item);

    if (itemToIncrease !== null) {
      setCart((prev) => {
        const newCart = [...prev];
        newCart[itemToIncrease].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      });
    }
  };

  const handleDecreaseCount = (item) => {
    let itemToDecrease = findItemIndex(item);

    if (itemToDecrease !== null) {
      setCart((prev) => {
        const newCart = [...prev];
        if (newCart[itemToDecrease].quantity === 1) {
          handleDeleteItem(item);
        }
        if (
          newCart[itemToDecrease].quantity !== 1 &&
          newCart[itemToDecrease].quantity > 0
        ) {
          newCart[itemToDecrease].quantity -= 1;
        }
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      });
    }
  };

  useEffect(() => {
    //   console.log(cart);
    const addTotalInCart = () => {
      let sum = 0;
      for (let i = 0; i < cart.length; i++) {
        // console.log(cart[i].price);
        const curr = cart[i];
        const currPrice = Number(curr.price) * Number(curr.quantity);
        sum += currPrice;
      }
      return sum.toFixed(2);
    };
    let myTotal = addTotalInCart();
    setTotal((prev) => (prev = myTotal));
  }, [cart]);

  return (
    <Layout>
      <Container>
        <div className="cart-container">
          <h1>Cart</h1>
          {cart.length === 0 && <h5>Your cart is empty</h5>}
          {cart.map((item) => (
            <div className="cart-item">
              <img src={item.image} alt={item.title} className="me-5" />
              <div className="d-flex align-items-center justify-content-center flex-column">
                <h2>{item.title}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Size: {item.size}</p>
                <p>Price: ${item.price} / each</p>
                <div>
                  <button
                    className="app-btn me-2"
                    onClick={() => handleDecreaseCount(item)}
                  >
                    -
                  </button>
                  <button
                    className="app-btn"
                    onClick={() => handleIncreaseCount(item)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center ms-3 cart-trash">
                <Trash
                  size={30}
                  color="red"
                  className="cart-trash-icon"
                  onClick={() => handleDeleteItem(item)}
                />
              </div>
            </div>
          ))}
          <div className="d-flex align-items-start justify-content-start">
            <h4>Total:</h4>
            <span className="cart-total">${total ? total : 0}</span>
          </div>
          <button className="app-back-btn">Checkout</button>
        </div>
      </Container>
    </Layout>
  );
};

export default Cart;
