const mongoose = require("mongoose");

const binSchema = mongoose.Schema(
  {
    isFilled: {
      type: Boolean,
      default: false,
    },
    location: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    district: {
      type: String,
    },
    userid: {
      type: String,
      default: "admin",
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bin", binSchema);
