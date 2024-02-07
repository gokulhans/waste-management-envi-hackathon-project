const RegionAdmin = require("../models/regionadmin");

const regionAdminController = {
  create: async (req, res) => {
    try {
      const { district, name, phone } = req.body;
      const newRegionAdmin = new RegionAdmin({ district, name, phone });
      await newRegionAdmin.save();
      res.json({ msg: "New Region Admin created", data: newRegionAdmin });
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Error creating Region Admin", error: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const regionAdmins = await RegionAdmin.find();
      res.json({ msg: "OK", data: regionAdmins });
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Error fetching Region Admins", error: error.message });
    }
  },
  getById: async (req, res) => {
    try {
      const regionAdminId = req.params.id;
      const regionAdmin = await RegionAdmin.findById(regionAdminId);
      if (regionAdmin) {
        res.json({ msg: "Region Admin found", data: regionAdmin });
      } else {
        res.status(404).json({ msg: "Region Admin not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Error fetching Region Admin", error: error.message });
    }
  },
  updateById: async (req, res) => {
    try {
      const { district, name, phone } = req.body;
      const updatedRegionAdmin = await RegionAdmin.findByIdAndUpdate(
        req.params.id,
        { district, name, phone },
        { new: true }
      );
      if (updatedRegionAdmin) {
        res.json({ msg: "Region Admin updated", data: updatedRegionAdmin });
      } else {
        res.status(404).json({ msg: "Region Admin not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Error updating Region Admin", error: error.message });
    }
  },
  deleteById: async (req, res) => {
    try {
      const deletedRegionAdmin = await RegionAdmin.findByIdAndDelete(
        req.params.id
      );
      if (deletedRegionAdmin) {
        res.json({ msg: "Region Admin deleted", data: deletedRegionAdmin });
      } else {
        res.status(404).json({ msg: "Region Admin not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Error deleting Region Admin", error: error.message });
    }
  },
};

module.exports = regionAdminController;
