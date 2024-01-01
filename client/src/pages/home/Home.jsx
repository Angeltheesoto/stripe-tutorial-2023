import React, { useContext, useState } from "react";
import Layout from "../../components/shared/layout";
import Container from "react-bootstrap/esm/Container";
import Card from "../../components/card/card";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import { dataContext } from "../../context/dataContext";

const Home = () => {
  const tshirtsData = useContext(dataContext);
  return (
    <Layout>
      <Container>
        <Hero />
        <h1>PRODUCTS</h1>
        <Card products={tshirtsData.data} />
        <h1>ABOUT</h1>
        <About />
      </Container>
    </Layout>
  );
};

export default Home;
