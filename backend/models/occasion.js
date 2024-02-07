const mongoose = require("mongoose");

const occasionSchema = mongoose.Schema(
  {
    district: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    occasion: {
      type: String,
      required: true,
    },
    guests: {
      type: String,
      required: true,
    },
    days: {
      type: String,
      required: true,
    },
    userid: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Occasion", occasionSchema);
