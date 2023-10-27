const router = require("express").Router();

const productDataModel = require("../model/product.modal");

/* User Manipulation */

router.get("/product-get", (req, res) => {
  res.json();
});

router.post("/product-post", (req, res) => {
  res.json();
});

router.put("/product-update", (req, res) => {
  res.json();
});

router.delete("/product-delete", (req, res) => {
  res.json();
});

module.exports = router;