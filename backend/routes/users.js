const mongoose = require("mongoose");
require('dotenv').config(); 

const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  throw new Error('MONGODB_URI environment variable is not defined');
}

mongoose.connect("mongodb+srv://kunalkhandelwal108:Kunal892004@cluster0.dr7nbal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
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
