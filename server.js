// Load required modules
require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { logger, logEvents } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");

// Set the port number
const PORT = process.env.PORT || 3500;

// Log the current environment
console.log(process.env.NODE_ENV);
// Connect to the database

connectDB();
// Middleware setup
app.use(logger); // Logger middleware

app.use(cors(corsOptions)); // Cross-origin resource sharing middleware

app.use(express.json()); // Parse incoming JSON data

app.use(cookieParser()); // Parse cookies

// Serve static files from the 'public' directory
app.use("/", express.static(path.join(__dirname, "public")));

// Define routes
app.use("/", require("./routes/root"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/notes", require("./routes/noteRoutes"));

// Handle 404 errors
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// Error handling middleware
app.use(errorHandler);

// Listen for MongoDB connection
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  // Start the server
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

// Handle MongoDB connection errors
mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, "mongoErrLog.log");
});
