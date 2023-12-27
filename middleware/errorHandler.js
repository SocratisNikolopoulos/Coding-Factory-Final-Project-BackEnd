const { logEvents } = require("./logger");

// Error handling middleware function
const errorHandler = (err, req, res, next) => {
  // Log the error details using logEvents function from "./logger"
  logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, "errorLog.log");
  // Log the error stack trace to the console
  console.log(err.stack);

  // Set the status code of the response based on the response status code or default to 500 (server error)
  const status = res.statusCode ? res.statusCode : 500; // server error
  res.status(status);
  // Send JSON response with error message and indicator that it's an error response
  res.json({ message: err.message, isError: true });
};

module.exports = errorHandler;
