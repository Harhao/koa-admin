const User = require("../controller/user.js");
const router = require("koa-router")({
  prefix: "/fruit"
});
router.post("/login", User.login);
router.post("/register", User.register);
router.get("/getuserinfo", User.getuserinfo);
module.exports = router;
