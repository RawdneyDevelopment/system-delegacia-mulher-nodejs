const express = require("express");
const router = express.Router(); 

const { singleUpload, multUploadFiles } = require("../middleware/uploadFiles");

router.route("/singleUpload").post(singleUpload);
router.route("/multUpload").post(multUploadFiles);


module.exports = router;


/* QUEBRADO, FALTA AJEITAR */


