const jwt = require("jsonwebtoken");

// Middleware to verify JSON Web Tokens (JWT) for authentication
const verifyJWT = (req, res, next) => {
  // Extract the authorization header from the request
  const authHeader = req.headers.authorization || req.headers.Authorization;
  // Check if the authorization header exists and starts with "Bearer "
  if (!authHeader?.startsWith("Bearer ")) {
    // If not, respond with Unauthorized status and message
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Extract the token from the authorization header
  const token = authHeader.split(" ")[1];
  // Verify the token using the ACCESS_TOKEN_SECRET from environment variables
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    // If token verification fails, respond with Forbidden status and message
    if (err) return res.status(403).json({ message: "Forbidden" });
    // If token is valid, extract user information from decoded token
    // Set user information (username and roles) in request object for further middleware or routes
    req.user = decoded.UserInfo.username;
    req.roles = decoded.UserInfo.roles;
    // Move to the next middleware or route handler
    next();
  });
};

module.exports = verifyJWT;
