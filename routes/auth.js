const router = require("express").Router();

const { register } = require("../controllers/auth");

router.post("/", register);

module.exports = router;
