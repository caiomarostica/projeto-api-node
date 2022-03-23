const express = require("express");
const response = require("express/lib/response");
const router = express.Router();

const controllers = require("./controllers/moviesController");

router.get("/", controllers.home);

router.get("/all", controllers.getAll);

router.post("/create", controllers.createMovie);

module.exports = router