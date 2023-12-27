const mongoose = require("mongoose");

// Function to establish connection to the MongoDB database
const connectDB = async () => {
  try {
    // Connect to the MongoDB database using the URI from environment variables
    await mongoose.connect(process.env.DATABASE_URI);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
