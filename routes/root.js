const express = require("express");
const router = express.Router();
const path = require("path");

// Route for serving the index.html file
router.get("^/$|/index(.html)?", (req, res) => {
  // Sends the index.html file when the root path (/) or /index.html is accessed
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
