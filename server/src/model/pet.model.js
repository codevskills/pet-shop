const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    reqId: String,
    reqRole: String,
    reqLocation: String,
    reqPostedDate: Date
  },
  { timestamps: true }
);
const userDataModel = mongoose.model("user-data", userSchema);
module.exports = userDataModel;const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Array of image URLs
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['dog', 'cat', 'bird', 'other'], // Add more categories as needed
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for the seller
    required: true,
  },
  location: {
    type: String, // Location of the pet
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;