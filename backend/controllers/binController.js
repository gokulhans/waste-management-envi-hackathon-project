const Bin = require("../models/bin");

const binController = {
  create: async (req, res) => {
    console.log(req.body);
    try {
      const { location, pincode, district } = req.body;
      const newBin = new Bin({ location, pincode, district });
      await newBin.save();
      res.json({ msg: "Bin created", data: newBin });
    } catch (error) {
      res.status(500).json({ msg: "Error creating bin", error: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const bins = await Bin.find();
      res.json({ msg: "OK", data: bins });
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Error fetching bins", error: error.message });
    }
  },
  getAllByDistrict: async (req, res) => {
    const district = req.params.district;
    try {
      const bins = await Bin.find({ district: "calicut" });
      res.json({ msg: "OK", data: bins });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ msg: "Error fetching bins by district", error: error.message });
    }
  },
  getById: async (req, res) => {
    try {
      const binId = req.params.id;
      const bin = await Bin.findById(binId);
      if (bin) {
        res.json({ msg: "Bin found", data: bin });
      } else {
        res.status(404).json({ msg: "Bin not found" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Error fetching bin", error: error.message });
    }
  },
  updateById: async (req, res) => {
    try {
      const { isFilled, location, pincode, district, userid, count } = req.body;
      const updatedBin = await Bin.findByIdAndUpdate(
        req.params.id,
        { isFilled, location, pincode, district, userid, count },
        { new: true }
      );
      if (updatedBin) {
        res.json({ msg: "Bin updated", data: updatedBin });
      } else {
        res.status(404).json({ msg: "Bin not found" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Error updating bin", error: error.message });
    }
  },
  reportById: async (req, res) => {
    try {
      const { isFilled } = req.body;
      const userId = req.params.id;

      // Find the bin by user ID
      const bin = await Bin.findOne({ userid: userId });

      if (!bin) {
        return res.status(404).json({ msg: "Bin not found for the user" });
      }

      // Update the bin's isFilled status
      bin.isFilled = isFilled;
      bin.count = bin.count++;
      const updatedBin = await bin.save();

      res.json({ msg: "Bin updated", data: updatedBin });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Error updating bin", error: error.message });
    }
  },
  reportDoneById: async (req, res) => {
    try {
      const { isFilled } = req.body;
      const Id = req.params.id;

      // Find the bin by user ID
      const bin = await Bin.findById(Id);

      if (!bin) {
        return res.status(404).json({ msg: "Bin not found for the user" });
      }

      // Update the bin's isFilled status
      bin.isFilled = isFilled;
      const updatedBin = await bin.save();

      res.json({ msg: "Bin updated", data: updatedBin });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Error updating bin", error: error.message });
    }
  },
  deleteById: async (req, res) => {
    try {
      const deletedBin = await Bin.findByIdAndDelete(req.params.id);
      if (deletedBin) {
        res.json({ msg: "Bin deleted", data: deletedBin });
      } else {
        res.status(404).json({ msg: "Bin not found" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Error deleting bin", error: error.message });
    }
  },
};

module.exports = binController;
