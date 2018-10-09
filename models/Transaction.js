const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TransactionSchema = new Schema({
  usernameID: {
    type: String,
    required: true
  },
  bookID: {
    type: String,
    required: true
  },
  orderDate: {
    type: Date,
    defaut: Date.now
  },
  orderBook: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  }
});

module.exports = Transaction = mongoose.model('transaction', TransactionSchema);
