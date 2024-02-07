const express = require("express");
const occasionController = require("../controllers/occasionController");
const router = express.Router();

// GET all occasions
router.get("/", occasionController.getAll);

// GET occasion by ID
router.get("/:id", occasionController.getById);

// POST a new occasion
router.post("/book-service/:id", occasionController.create);

// UPDATE occasion by ID
router.put("/:id", occasionController.updateById);

// DELETE occasion by ID
router.delete("/:id", occasionController.deleteById);

router.put("/report/:id", occasionController.reportById);

router.get("/regional/:district", occasionController.getAllByDistrict);

module.exports = router;
