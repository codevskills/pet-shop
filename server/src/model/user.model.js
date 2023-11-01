const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  country: String,
  state: String,
  city: String,
  nearby: String
});

const petSchema = new mongoose.Schema(
  {
    title: {
      type: String
    },
    description: {
      type: String
    },
    price: {
      type: Number
    },
    phoneNumber: {
      type: String
    },
    location: [locationSchema],
    photo: {
      type: [String]
    },
    terms: {
      type: String
    },
    category: {
      type: String
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User-Data"
    }
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema(
  {
    username: String,
    googleId: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true
    },
    userProfile: String,
    listings: [petSchema],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
      }
    ],
    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pet-Data"
      }
    ]
  },
  { timestamps: true }
);

const userDataModel = mongoose.model("User-Data", userSchema);

module.exports = userDataModel;
