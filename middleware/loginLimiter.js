const rateLimit = require("express-rate-limit");
const { logEvents } = require("./logger");

// Create a rate limiter middleware for login requests
const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute - defines the time window for the limit
  max: 5, // Limit each IP to 5 login requests per `window` per minute
  // Message to send when the limit is exceeded
  message: { message: "Too many login attempts from this IP, please try again after a 60 second pause" },
  handler: (req, res, next, options) => {
    // Custom handler for exceeding the rate limit
    logEvents(`Too Many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, "errLog.log");
    res.status(options.statusCode).send(options.message);
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

module.exports = loginLimiter;
