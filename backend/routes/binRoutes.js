const express = require("express");
const binController = require("../controllers/binController");
const router = express.Router();

// GET all bins
router.get("/", binController.getAll);

// GET bin by ID
router.get("/:id", binController.getById);

// POST a new bin
router.post("/", binController.create);

// UPDATE bin by ID
router.put("/:id", binController.updateById);

// DELETE bin by ID
router.delete("/:id", binController.deleteById);

module.exports = router;