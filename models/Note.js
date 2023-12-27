const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

// Define the schema for the Note model
const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // Reference to the User model
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false, // Default value for 'completed' field
    },
  },
  {
    timestamps: true, // Automatically add 'createdAt' and 'updatedAt' fields
  }
);

// Plugin for AutoIncrement feature using 'mongoose-sequence'
noteSchema.plugin(AutoIncrement, {
  inc_field: "ticket", // Field name to store the incremented value
  id: "ticketNums", // Identifier for the sequence in the database
  start_seq: 500, // Starting value for the sequence
});

// Export the Note model with the defined schema
module.exports = mongoose.model("Note", noteSchema);
