import React, { useContext, useEffect, useState } from "react";
import "./card.styles.scss";
import { dataContext } from "../../context/dataContext";

const Card = ({ products }) => {
  const { cart, setCart } = useContext(dataContext);

  const [chooseSize, setChooseSize] = useState(false);
  const [chosenItem, setChosenItem] = useState("");
  const [chosenSize, setChosenSize] = useState("small");

  const handleClick = (item) => {
    console.log(`Product: ${item.image}`);
    setChosenItem(item);
    setChooseSize(true);
  };

  const handleGoBack = () => {
    setChosenItem("");
    setChooseSize(false);
  };

  const handleAddToCart = () => {
    /*
      {
        title: Burger shirt | black,
        size: small,
        quantity: 1
      },
      {
        title: Burger shirt | white,
        size: large,
        quantity: 3
      }
    */
    //  check if item exists in cart.
    // if item title and size are in cart
    //      then increment quantity by 1
    // else
    //      append item in cart
    let searchTitle = chosenItem.title;
    let searchSize = chosenSize;
    let itemExists = false;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].title === searchTitle && cart[i].size === searchSize) {
        cart[i].quantity = cart[i].quantity + 1;
        itemExists = true;
        break;
      }
    }

    if (!itemExists) {
      setCart((prev) => [
        ...prev,
        { title: searchTitle, size: searchSize, quantity: 1 },
      ]);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    // console.log(itemExists);
  };
  // console.log(cart);

  return (
    <div className="card-container">
      {!chooseSize &&
        products.map((item) => (
          <div
            className="card-item-container"
            onClick={() => handleClick(item)}
          >
            <img src={item.image} alt="product one" className="card-image" />
            <div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
            <button className="app-btn">Choose size</button>
          </div>
        ))}

      {chooseSize && chosenItem !== "" ? (
        <div className="card-size-container">
          <img
            src={chosenItem?.image}
            alt="product one"
            className="card-image"
          />
          <div className="card-size-subcontainer">
            <div>
              <h2>{chosenItem?.title}</h2>
              <p>{chosenItem?.desc}</p>
            </div>
            <div className="card-size-btn-container">
              <p
                className={
                  chosenSize === "small"
                    ? "app-size-btn app-size-btn-checked"
                    : "app-size-btn"
                }
                onClick={() => setChosenSize("small")}
              >
                Small
              </p>
              <p
                className={
                  chosenSize === "medium"
                    ? "app-size-btn app-size-btn-checked"
                    : "app-size-btn"
                }
                onClick={() => setChosenSize("medium")}
              >
                Medium
              </p>
              <p
                className={
                  chosenSize === "large"
                    ? "app-size-btn app-size-btn-checked"
                    : "app-size-btn"
                }
                onClick={() => setChosenSize("large")}
              >
                Large
              </p>
            </div>
            <div>
              <button
                className="app-btn app-back-btn"
                onClick={() => handleGoBack()}
              >
                Go back
              </button>
              <button className="app-btn" onClick={() => handleAddToCart()}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
