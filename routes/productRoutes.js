const ensureAuth = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", ensureAuth, (req, res) => {
  res.send("Product route works!");
});
module.exports = router;
