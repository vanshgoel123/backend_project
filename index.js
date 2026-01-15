const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const auth = require("./routes/authRoutes");
const products = require("./routes/productRoutes");
require("dotenv").config();
require("./models/db");
const PORT = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", auth);
app.use("/products", products);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
