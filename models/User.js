const mongoose = require("mongoose");

// Defines the schema for the User model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    default: ["Employee"], // Default role set to "Employee"
  },
  active: {
    type: Boolean,
    default: true, // Default status set to active
  },
});

// Export the User model using the defined schema
module.exports = mongoose.model("User", userSchema);
