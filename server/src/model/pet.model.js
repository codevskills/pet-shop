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

const petSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    locations: [locationSchema],
    photo: {
      type: [String],
      required: true
    },
    terms: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ["dog", "cat", "bird", "other"],
      required: true
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User-Data",
      required: true
    },
  },
  { timestamps: true }
);

const Pet = mongoose.model("Pet-Data", petSchema);

module.exports = Pet;
