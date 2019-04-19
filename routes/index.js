const User = require('../controller/user.js');
const router = require('koa-router')({
  prefix: '/fruit'
});
router.post('/register',User.register);
router.post('/login',User.login);

module.exports = router
