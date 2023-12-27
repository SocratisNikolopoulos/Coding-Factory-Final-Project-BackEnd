const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notesController");
const verifyJWT = require("../middleware/verifyJWT");

// Middleware to verify JWT token for authorization
router.use(verifyJWT);

// Routes for handling notes
router
  .route("/")
  .get(notesController.getAllNotes) // GET /notes - Get all notes
  .post(notesController.createNewNote) // POST /notes - Create a new note
  .patch(notesController.updateNote) // PATCH /notes - Update a note
  .delete(notesController.deleteNote); // DELETE /notes - Delete a note

module.exports = router;
