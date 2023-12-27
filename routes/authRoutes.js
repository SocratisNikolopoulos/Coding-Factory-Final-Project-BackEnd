const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const loginLimiter = require("../middleware/loginLimiter");

// Route for user login
// POST /auth
// Uses loginLimiter middleware to limit login attempts
// Calls authController.login to handle user login
router.route("/").post(loginLimiter, authController.login);

// Route for refreshing authentication token
// GET /auth/refresh
// Calls authController.refresh to refresh authentication
router.route("/refresh").get(authController.refresh);

// Route for user logout
// POST /auth/logout
// Calls authController.logout to handle user logout
router.route("/logout").post(authController.logout);

module.exports = router;
