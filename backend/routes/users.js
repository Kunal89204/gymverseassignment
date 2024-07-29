const mongoose = require("mongoose");
require('dotenv').config(); 

const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  throw new Error('MONGODB_URI environment variable is not defined');
}

mongoose.connect(mongoURI)
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Error connecting to the database:', err));

const userSchema = new mongoose.Schema({
  authId: {
    type: String,
    required: true,
    unique: true
  },
  fullname: String,
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
  email: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
