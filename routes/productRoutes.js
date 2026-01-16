const ensureAuth = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", ensureAuth, (req, res) => {
  const products = [
    {
      id: "1",
      name: "Laptop",
      price: 999.99,
      description: "High performance laptop with 16GB RAM"
    },
    {
      id: "2",
      name: "Smartphone",
      price: 699.99,
      description: "Latest smartphone with 5G support"
    },
    {
      id: "3",
      name: "Headphones",
      price: 199.99,
      description: "Wireless noise-cancelling headphones"
    },
    {
      id: "4",
      name: "Tablet",
      price: 499.99,
      description: "10-inch tablet perfect for productivity"
    },
    {
      id: "5",
      name: "Monitor",
      price: 349.99,
      description: "4K Ultra HD monitor for creative work"
    }
  ];
  
  res.json({ message: "Products fetched successfully", products });  
});
module.exports = router;
