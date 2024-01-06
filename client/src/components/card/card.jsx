import React, { useContext, useState } from "react";
import "./card.styles.scss";
import { dataContext } from "../../context/dataContext";

const Card = ({ products }) => {
  const { cart, setCart } = useContext(dataContext);

  const [chooseSize, setChooseSize] = useState(false);
  const [chosenItem, setChosenItem] = useState("");
  const [chosenSize, setChosenSize] = useState("small");

  const handleClick = (item) => {
    // console.log(`Product: ${item.image}`);
    setChosenItem(item);
    setChooseSize(true);
  };

  const handleGoBack = () => {
    setChosenItem("");
    setChooseSize(false);
  };

  // !WORKING HERE: Add a toast to tell the user that the size of the product they want to buy is sold out if the quantity is 0.
  const handleAddToCart = (item) => {
    let searchTitle = chosenItem.title;
    let searchSize = chosenSize;
    let itemExists = false;

    // !HERE
    if (item.quantity.searchSize === 0) {
      console.log("This item is sold out!");
    }

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
        {
          title: searchTitle,
          size: searchSize,
          quantity: 1,
          image: item.image,
          price: item.price,
        },
      ]);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    // console.log(itemExists);

    // console.log(item.quantity.large);
  };

  // console.log(cart);
  // console.log(`Card Component: ${products}`);

  return (
    <div className="card-container">
      {/* Displays all products */}
      {!chooseSize &&
        products.map((item) => (
          <div>
            {Object.values(item.quantity).reduce(
              (acc, value) => acc + value,
              0
            ) > 0 ? (
              <div
                className="card-item-container"
                onClick={() => handleClick(item)}
              >
                <img
                  src={item.image}
                  alt="product one"
                  className="card-image"
                />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
                <button className="app-btn">Choose size</button>
              </div>
            ) : (
              <div className="card-item-container">
                <div className="card-sold-out">SOLD OUT</div>
                <img
                  src={item.image}
                  alt="product one"
                  className="card-image"
                />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
                <button className="app-btn">Choose size</button>
              </div>
            )}
          </div>
        ))}

      {/* Displays chosen product */}
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
              <span className="app-price">${chosenItem?.price}</span>
            </div>
            {/* // !HERE */}
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
              <button
                className="app-btn"
                onClick={() =>
                  handleAddToCart({
                    image: chosenItem.image,
                    price: chosenItem.price,
                    quantity: chosenItem.quantity,
                  })
                }
              >
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
