const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.registerUser);

//Login a user
router.post("/login", userController.loginUser);

//Forgot password
router.post("/forgot-password",userController.forgotPassword)

//Reset password
router.post("/reset-password/:id/:token", userController.resetPassword);

// GET User BY ID
router.get("/edit/:id", userController.getUserByID);

// GET User BY ID
router.post("/edit/:id", userController.updateById);

// Subscribe BY ID
router.post("/subscribe/:id", userController.subscribeById);


module.exports = router;