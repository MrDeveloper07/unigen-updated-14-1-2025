const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profession: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema); // Use 'users' as the collection name.

module.exports = User;
