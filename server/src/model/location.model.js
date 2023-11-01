const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  country: {
    type: String
  },
  state: {
    type: String
  },
  city: {
    type: String
  },
  nearby: {
    type: String
  }
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
