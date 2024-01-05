const router = require("express").Router();
const Product = require("../models/Product");

module.exports = () => {
  // Get all product data
  router.get("/", async (req, res) => {
    const productData = await Product.find();
    res.send(productData);
  });

  //   Decrement product quantity
  router.get("/:id", async (req, res) => {
    res.send("Decrement product quantity here..");
  });

  return router;
};
