const mongoose = require("mongoose");

const regionAdminSchema = mongoose.Schema(
  {
    district: {
      type: String,
    },
    phone: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RegionAdmin", regionAdminSchema);
