const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

// Function to log events/messages to a specified log file
const logEvents = async (message, logFileName) => {
  const dateTime = format(new Date(), "yyyyMMdd\tHH:mm:ss");
  // Generate timestamp in the format: yyyyMMdd HH:mm:ss
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    // Check if the 'logs' directory exists; if not, create it
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }
    // Append the log item to the specified log file
    await fsPromises.appendFile(path.join(__dirname, "..", "logs", logFileName), logItem);
  } catch (err) {
    console.log(err); // Log any errors encountered during file operations
  }
};

// Middleware function to log incoming requests
const logger = (req, res, next) => {
  // Log request details (method, URL, origin) to a 'reqLog.log' file using logEvents
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, "reqLog.log");
  // Log the request method and path to the console
  console.log(`${req.method} ${req.path}`);
  next(); // Pass control to the next middleware in the chain
};

module.exports = { logEvents, logger };
