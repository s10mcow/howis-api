const jwt = require("jsonwebtoken");

const authenticateUser = (authorizationHeader) => {
  // Check if the authorization header is present
  if (!authorizationHeader) {
    throw new Error("Authorization header missing");
  }

  try {
    // Extract the token from the "Bearer <token>" format
    const token = authorizationHeader.split(" ")[1];

    // Verify and decode the token using your Auth0 secret or public key
    const decoded = jwt.verify(token, "YOUR_AUTH0_SECRET_OR_PUBLIC_KEY");

    // Assuming the token contains user information like ID and email
    const { userId, email } = decoded;

    // Return the user object
    return { userId, email };
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};

module.exports = authenticateUser;
