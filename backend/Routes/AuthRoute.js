const { Signup, Login } = require("../controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddlware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login)
router.post('/',userVerification)

module.exports = router;