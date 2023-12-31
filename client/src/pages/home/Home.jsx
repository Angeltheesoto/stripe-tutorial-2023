import React from "react";
import Layout from "../../components/shared/layout";
import Container from "react-bootstrap/esm/Container";
import Card from "../../components/card/card";

const Home = () => {
  return (
    <Layout>
      <Container>
        <h1>Home</h1>
        <Card />
      </Container>
    </Layout>
  );
};

export default Home;
