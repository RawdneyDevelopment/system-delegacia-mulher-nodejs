const express = require("express");
const router = express.Router(); 

const { uploadFile } = require("../middleware/uploadFiles");

router.route("/single").post(uploadFile);


module.exports = router;


/* QUEBRADO, FALTA AJEITAR */