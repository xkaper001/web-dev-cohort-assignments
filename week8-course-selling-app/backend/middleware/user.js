const jwt = require("jsonwebtoken")

function userMiddleware(req, res, next) {
  const token = req.headers.token;

  if (!token) {
    return res.status(403).json({
      error: "Token is required."
    })
  }

  try {
    const decodedData = jwt.verify(token, process.env.JWT_USER_SECRET);
    req.userId = decodedData.userId;
    next();
  } catch (error) {
    return res.status(400).json({
      error: "Token not valid"
    })
  }
}

module.exports = {
    userMiddleware: userMiddleware,
}