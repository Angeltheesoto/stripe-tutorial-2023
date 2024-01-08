const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db.js");

require("dotenv").config();
const PORT = process.env.PORT || 5000;
const allowedOrigins = ["http://localhost:3000"];

connectDB();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        // callback(new Error("Not allowed by CORS"));
        console.error({ error: "Not allowed by CORS" });
        callback(null, false);
      }
    },
    optionsSuccessStatus: 204,
  })
);

// paths
const productRoutes = require("./routes/products.js");
const billingRoutes = require("./routes/billing.js");

// routes
app.get("/", (req, res) => {
  res.send("Server is live!");
});
app.use("/api/products", productRoutes);
app.use("/billing", billingRoutes);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
