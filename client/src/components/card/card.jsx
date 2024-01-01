import React, { useState } from "react";
import "./card.styles.scss";

const Card = ({ products }) => {
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
              <button className="app-btn">Add to cart</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
