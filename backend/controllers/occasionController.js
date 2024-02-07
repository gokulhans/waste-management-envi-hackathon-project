const Occasion = require("../models/occasion");

const occasionController = {
  create: async (req, res) => {
    try {
      const { district, address, pincode, occasion, guests, days } = req.body;
      const newOccasion = new Occasion({
        district,
        address,
        pincode,
        occasion,
        guests,
        days,
        userid: req.params.id,
      });
      await newOccasion.save();
      res.json({ msg: "Occasion created", data: newOccasion });
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Error creating occasion", error: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const occasions = await Occasion.find();
      res.json({ msg: "OK", data: occasions });
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Error fetching occasions", error: error.message });
    }
  },
  getAllByDistrict: async (req, res) => {
    const district = req.params.district;
    try {
      const occasions = await Occasion.find({ district: "calicut" });
      console.log(occasions);
      res.json({ msg: "OK", data: occasions });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ msg: "Error fetching occasions by district", error: error.message });
    }
  },
  getById: async (req, res) => {
    try {
      const occasionId = req.params.id;
      const occasion = await Occasion.findById(occasionId);
      if (occasion) {
        res.json({ msg: "Occasion found", data: occasion });
      } else {
        res.status(404).json({ msg: "Occasion not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Error fetching occasion", error: error.message });
    }
  },
  updateById: async (req, res) => {
    try {
      const { isFilled, district, address, pincode, occasion, guests, days } =
        req.body;
      const updatedOccasion = await Occasion.findByIdAndUpdate(
        req.params.id,
        { isFilled, district, address, pincode, occasion, guests, days },
        { new: true }
      );
      if (updatedOccasion) {
        res.json({ msg: "Occasion updated", data: updatedOccasion });
      } else {
        res.status(404).json({ msg: "Occasion not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Error updating occasion", error: error.message });
    }
  },
  reportById: async (req, res) => {
    try {
      const { isFilled } = req.body;
      const userId = req.params.id;

      // Find the occasion by user ID
      const occasion = await Occasion.findOne({ _id: userId });

      if (!occasion) {
        return res.status(404).json({ msg: "Occasion not found for the user" });
      }

      // Update the occasion's isFilled status
      occasion.isFilled = isFilled;
      const updatedOccasion = await occasion.save();

      res.json({ msg: "Occasion updated", data: updatedOccasion });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ msg: "Error updating occasion", error: error.message });
    }
  },
  deleteById: async (req, res) => {
    try {
      const deletedOccasion = await Occasion.findByIdAndDelete(req.params.id);
      if (deletedOccasion) {
        res.json({ msg: "Occasion deleted", data: deletedOccasion });
      } else {
        res.status(404).json({ msg: "Occasion not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Error deleting occasion", error: error.message });
    }
  },
};

module.exports = occasionController;
