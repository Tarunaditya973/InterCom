const mongoose = require('mongoose');

const customerRequestSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User', // Assuming you have a User model
  },
  category: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CustomerRequest = mongoose.model('CustomerRequest', customerRequestSchema);

module.exports = CustomerRequest;
