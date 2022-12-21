const {
  createAddress,
  updateAddress,
  deleteAddress,
  findAddressById,
  readAddress,
} = require("../controllers/addressController");

const express = require("express");
const router = express.Router();

router.route("/address").post(createAddress);
router.route("/address").get(readAddress);

router.route("/address/:id").delete(deleteAddress);
router.route("/address/:id").put(updateAddress);
router.route("/address/:id").get(findAddressById);

module.exports = router;
