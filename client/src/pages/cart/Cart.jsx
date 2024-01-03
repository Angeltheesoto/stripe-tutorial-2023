import React, { useContext } from "react";
import "./cart.styles.scss";
import Layout from "../../components/shared/layout";
import Container from "react-bootstrap/esm/Container";
import { dataContext } from "../../context/dataContext";

const Cart = () => {
  const { cart, setCart } = useContext(dataContext);
  return (
    <Layout>
      <Container>
        <div className="cart-container">
          {cart.map((item) => (
            <div>{item.title}</div>
          ))}
          Cart
        </div>
      </Container>
    </Layout>
  );
};

export default Cart;
