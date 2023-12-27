const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const verifyJWT = require("../middleware/verifyJWT");

// Middleware to verify JWT token for authorization
router.use(verifyJWT);

// Routes for handling user-related operations
router
  .route("/")
  .get(usersController.getAllUsers) // GET /users - Get all users
  .post(usersController.createNewUser) // POST /users - Create a new user
  .patch(usersController.updateUser) // PATCH /users - Update a user
  .delete(usersController.deleteUser); // DELETE /users - Delete a user

module.exports = router;
