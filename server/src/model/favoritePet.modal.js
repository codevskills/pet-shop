const mongoose = require('mongoose');

const favoritePetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for the user who favorited the pet
  },
  pet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet', // Reference to the Pet model for the favorite pet
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const FavoritePet = mongoose.model('FavoritePet', favoritePetSchema);

module.exports = FavoritePet;
    