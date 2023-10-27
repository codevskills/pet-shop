const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
  email: String,
  phoneNumber: String,
  profileUrl: String,
  orderData: [
    {
      orderId: Number,
      category: String,
      productName: String,
      price: Number,
      quantity: Number
    },
    { timestamps: true }
  ]
});

const userDataModel = mongoose.model("user-data", userSchema);

module.exports = userDataModel;
