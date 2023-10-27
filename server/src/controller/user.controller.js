const router = require("express").Router();

const userDataModel = require("../model/user.modal");

/* User Manipulation */

router.get("/user-get", (req, res) => {
  res.json();
});

router.post("/user-post", (req, res) => {
  res.json();
});

router.put("/user-update", (req, res) => {
  res.json();
});

router.delete("/user-delete", (req, res) => {
  res.json();
});

/* Order Manipulation */

router.get("/user-get-order", (req, res) => {
  res.json();
});

router.post("/user-post-order", (req, res) => {
  res.json();
});

router.put("/user-update-order", (req, res) => {
  res.json();
});

router.delete("/user-delete-order", (req, res) => {
  res.json();
});

module.exports = router;
