const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model for the participants
    },
  ],
  messages: [
    {
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model for the sender
      },
      content: String,
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
