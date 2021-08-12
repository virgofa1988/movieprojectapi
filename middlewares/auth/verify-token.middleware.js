const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  //get Token from user
  const token = req.header("token");
  try {
    //verify token
    const secretKey = "jay";
    const decodeObject = jwt.verify(token, secretKey);
    //attach this object to send next()
    req.user = decodeObject;
    next();
  } catch (err) {
    res.status(401).send("Please login");
  }
};

const authorizeUserRole = (roleArray) => (req, res, next) => {
  //this user object from authenticateToken send
  const { user } = req;

  if (roleArray.findIndex((role) => role === user.maLoaiNguoiDung) > -1) {
    next(); //To delete controller
  } else {
    res.status(403).send("Unauthorized Account");
  }
};
module.exports = {
  authenticateToken,
  authorizeUserRole,
};
