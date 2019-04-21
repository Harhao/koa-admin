const crypto = require("crypto");
const config = require("../config/index");
const jwt = require("jsonwebtoken");
module.exports = {
  createHash: value => {
    const hmac = crypto.createHash("sha256", config.secret);
    hmac.update(value);
    return hmac.digest("hex");
  },
  sign(result) {
    return jwt.sign(
      {
        _id: result._id,
        name: result.name
      },
      config.secret,
      config.expiresIn
    );
  },
  verify(authoration) {
    if (!authoration)
      return jwt.verify(authoration.split(" ")[1], config.secret);
    return null;
  }
};
