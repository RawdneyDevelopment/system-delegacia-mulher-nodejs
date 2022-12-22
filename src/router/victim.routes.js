const express = require("express");
const routes = express.Router();
const router = express.Router();
const {
  createVictim,
  updateVictim,
  deleteVictim,
  findVictimById,
} = require("../controllers/victimController");

router.route("/victim").post(createVictim);
router.route("/victim/:id").delete(deleteVictim);
router.route("/victim/:id").put(updateVictim);
router.route("/victim/:id").get(findVictimById);

module.exports = router;
