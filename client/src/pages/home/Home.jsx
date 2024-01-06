import React, { useContext } from "react";
import Layout from "../../components/shared/layout";
import Container from "react-bootstrap/esm/Container";
import Card from "../../components/card/card";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import { dataContext } from "../../context/dataContext";

const Home = () => {
  const { data } = useContext(dataContext);
  // console.log(`Home component: ${data}`);
  return (
    <Layout>
      <Container>
        <Hero />
        <h1>PRODUCTS</h1>
        <Card products={data} />
        <h1>ABOUT</h1>
        <About />
      </Container>
    </Layout>
  );
};

export default Home;
