const expres = require('express');
const multer = require('multer');
exports.uploadFile = async (req, res) => {
    const fileStorageEngine = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, Date.now() + "--" + file.originalname);
        },

    });
}