const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    
    firstname: {
      type: String,
      required: [true, "Please add the firstname"],
    },
    lastname: {
      type: String,
      required: [true, "Please add the lastname"],
    },
    email: {
      type: String,
      required: [true, "Please add the email"],
      unique: [true, "email already registerd"],
    },
    district: {
      type: String,
      default: "",
    },
    pincode: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: [true, "Please add the password"],
    },
    isRegionalAdmin: {
      type:Boolean,
      default: false,
    },
    isAdmin: {
      type:Boolean,
      default: false,
    },
    isSubscribed: {
      type:Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);