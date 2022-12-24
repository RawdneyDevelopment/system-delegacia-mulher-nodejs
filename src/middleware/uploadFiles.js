const expres = require('express');
const multer = require('multer');
const path = require('path');
const uuid = require('uuid');

const storage = multer.diskStorage({
    destination: (req, _file, cb) => {
        cb(null, path.join(__dirname, "../src/files"));
    },
    filename: (req, _file, cb) => {
        cb(null, uuid());
    }

});
const upload = multer({storage: storage});

module.exports = upload;