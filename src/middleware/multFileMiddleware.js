const multer = require('multer');
const path = require('path');

const upload = multer({ storage: fileStorageEngine });

module.exports = upload
