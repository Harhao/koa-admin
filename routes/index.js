const User = require("../controller/user.js");
const router = require("koa-router")({
  prefix: "/fruit"
});
console.log(User.register);
router.post("/login", User.login);
router.post("/register", User.register);
module.exports = router;
