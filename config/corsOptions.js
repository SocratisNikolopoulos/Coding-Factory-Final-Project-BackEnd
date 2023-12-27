const allowedOrigins = require("./allowedOrigins");
// CORS options configuration
const corsOptions = {
  // Origin function checks if the incoming request's origin is allowed
  origin: (origin, callback) => {
    // If the request origin is in the allowedOrigins list or it's null/undefined
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      // Deny the request with an error message
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Indicates that the server should include credentials in the response
  optionsSuccessStatus: 200, // Sets the status code for preflight OPTIONS requests to 200
};

module.exports = corsOptions;
