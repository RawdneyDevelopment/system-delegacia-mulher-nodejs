const express = require("express");
const routes = express.Router();

const userController = require("../controllers/userController");
const router = express.Router();

routes.post("/register", userController.createUser);

module.exports = router;
