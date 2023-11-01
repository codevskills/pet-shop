const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: true,
    unique: true, 
  },
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  userProfile: {
    type: String,
    required: true,
  },
  listings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pet',
    },
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message', // Reference to the Message model for user's messages 
    },
  ],
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pet', // Reference to the Pet model for user's favorite pets
    },
  ],
});

const userDataModel = mongoose.model('User-Data', userSchema);

module.exports = userDataModel;