const express = require("express");
const regionAdminController = require("../controllers/regionAdminController");
const router = express.Router();

// GET all regionAdmins
router.get("/", regionAdminController.getAll);

// GET regionAdmin by ID
router.get("/:id", regionAdminController.getById);

// POST a new regionAdmin
router.post("/", regionAdminController.create);

// UPDATE regionAdmin by ID
router.put("/:id", regionAdminController.updateById);

// DELETE regionAdmin by ID
router.delete("/:id", regionAdminController.deleteById);

module.exports = router;