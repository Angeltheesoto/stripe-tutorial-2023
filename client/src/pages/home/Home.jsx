import React from "react";
import Layout from "../../components/shared/layout";
import Container from "react-bootstrap/esm/Container";
import Card from "../../components/card/card";
import ProductOne from "../../images/Cute_burger_shirt_blk.jpg";
import ProductTwo from "../../images/Cute_burger_shirt.jpg";
import ProductThree from "../../images/Cute_pizza_shirt_blk.jpg";
import ProductFour from "../../images/Cute_pizza_shirt.jpg";
import ProductFive from "../../images/Cute_taco_shirt_blk.jpg";
import ProductSix from "../../images/Cute_taco_shirt.jpg";
import Hero from "../../components/hero/Hero";

const Home = () => {
  const tshirtsData = [
    {
      image: ProductOne,
      title: "Burger shirt | black",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
    },
    {
      image: ProductTwo,
      title: "Burger shirt | white",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
    },
    {
      image: ProductThree,
      title: "Pizza shirt | black",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
    },
    {
      image: ProductFour,
      title: "Pizza shirt | white",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
    },
    {
      image: ProductFive,
      title: "Taco shirt | black",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
    },
    {
      image: ProductSix,
      title: "Taco shirt | white",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
    },
  ];

  return (
    <Layout>
      <Container>
        <Hero />
        <h1>PRODUCTS</h1>
        <Card products={tshirtsData} />
      </Container>
    </Layout>
  );
};

export default Home;
