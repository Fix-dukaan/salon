const express = require("express");
const { getAllDishes } = require("../controllers/dishController");

const router = express.Router();

// GET /api/dishes - Fetch all dishes
router.get("/", getAllDishes);

module.exports = router;
