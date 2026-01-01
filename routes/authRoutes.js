const { handleRegister, renderRegister, handleLogin, renderLogin, handleHome } = require("../controller/authController");

const router =  require("express").Router();
router.route("/").post(handleRegister).get(renderRegister);

router.route("/").post(handleLogin).get(renderLogin);



module.exports = router;