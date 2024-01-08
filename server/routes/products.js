const router = require("express").Router();
const Product = require("../models/Product");

module.exports = () => {
  // Get all product data
  router.get("/", async (req, res) => {
    try {
      console.log(Product);
      const productData = await Product.find();
      res.send(productData);
    } catch (err) {
      console.error(`Could not fetch products data. ${err}`);
    }
  });

  // Decrement product quantity when user returns response from confirmed purchase
  router.get("/:id", async (req, res) => {
    res.send("Decrement product quantity here..");
  });

  return router;
};
