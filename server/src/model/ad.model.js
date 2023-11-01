const mongoose = require("mongoose");

const adSchema = new mongoose.Schema(
  {
    adTitle: String,
    description: String,
    price: String,
    country: String,
    state: String,
    city: String,
    nearby: String,
    phoneNo: String,
    photo: []
  },
  { timestamps: true }
);

const adDataModal = mongoose.model("ad-user-data", adSchema);
module.exports = adDataModal;
