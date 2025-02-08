const express = require("express");
const { signup, login } = require("../controllers/authController");

const router = express.Router();

// POST /signup - User registration
router.post("/signup", signup);

// POST /login - User login
router.post("/login", login);

module.exports = router;
