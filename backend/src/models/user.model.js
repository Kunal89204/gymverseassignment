const mongoose = require("mongoose")

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