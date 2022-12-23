const express = require("express");
const router = express.Router();
const { uploadFile } = require("../controllers/uploadFiles");
const upload = require("../middleware/multFileMiddleware");

router.route("/single").post(uploadFile);
module.exports = router;
