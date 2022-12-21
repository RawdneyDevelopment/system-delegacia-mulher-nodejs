
const {
  uploadFile
  } = require("../controllers/uploadFiles");
const upload = require("../middleware/multFileMiddleware");

router.route("/single").post(uploadFile);
router.route("/multiple", upload.array("images", 3)).post(uploadFile), (req, res) =>{
    console.log(req.files);
    res.send('Multiple files Upload Sucess');
}

