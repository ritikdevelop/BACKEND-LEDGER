const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

// NOTE: Implementation of registration api *POST /api/auth/register*
router.post("/register", authController.userRegisterController);

router.post("/login", authController.userLoginController);

module.exports = router;
